<template>
  <div class="page-container">
    <SiteNav />
    <ListNav>
      <!-- 清單標題標題 -->
      <template v-slot:header>
        訊息
      </template>

      <!-- 使用者清單 -->
      <template v-slot:list>
        <div class="list-container">
          <!-- router-link v-slot: https://router.vuejs.org/api/#router-link-s-v-slot，
               客製化router-link (可以用tag attribute，但未來會被遺棄，建議是用custom v-slot) -->
          <router-link
            v-for="user in users"
            :key="user.id"
            v-slot="{ navigate, isExactActive }"
            custom
            :to="{ name: 'direct-message-room', params: { id: user.id } }"
          >
            <div
              class="list-group cursor-pointer"
              :class="{'active': isExactActive}"
              @click="navigate"
            >
              <UserThumbnail
                :initial-user="user"
                class="avatar"
              />
              <div
                class="user-info"
                @click="tempUser = user"
              >
                <!-- 控制當前聊天室使用者顯示 -->
                <div class="user">
                  <div class="name">
                    {{ emptyName(user.name, user.account) }}
                  </div>
                  <div class="account">
                    {{ user.account | addPrefix }}
                  </div>
                </div>
                <div class="introduction">
                  {{ user.introduction }}
                </div>
              </div>
              <div class="last-modified">
                {{ user.lastModified | timeFormat }}
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </ListNav>
    <router-view>
      <!-- 聊天室標題 -->
      <span class="user">
        <div class="name">{{ emptyName(tempUser.name, tempUser.account) }}</div>
        <div class="account">{{ tempUser.account | addPrefix }}</div>
      </span>
    </router-view>
  </div>
</template>

<script>
import UserThumbnail from '@/components/UserThumbnail.vue'
import SiteNav from '@/components/SiteNav.vue'
import ListNav from '@/components/ListNav.vue'
import {
  addPrefixFilter,
  emptyNameMethod,
  timeFormatFilter
} from '@/utils/mixins'

// const users = [
//   {
//     id: 1,
//     account: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     name: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
//     avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
//     introduction: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
//     lastModified: new Date()
//   },
//   {
//     id: 2,
//     account: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
//     name: '',
//     avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
//     introduction:
//       'xxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx zzzzzzzzzzzzzzzzzzzz',
//     lastModified: new Date()
//   },
//   {
//     id: 3,
//     account: 'cccccccccccccccccccccccccccccccccccccccc',
//     name: '',
//     avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
//     introduction:
//       'aaaaaaaaaaaaaaa bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddd',
//     lastModified: new Date()
//   }
// ]

export default {
  components: {
    SiteNav,
    ListNav,
    UserThumbnail
  },
  mixins: [addPrefixFilter, emptyNameMethod, timeFormatFilter],
  data () {
    return {
      users: [],
      tempUser: {}
    }
  },
  sockets: {
    // 來自WebSocket的新訊息
    listenUserData (resp) {
      console.log(resp)
      this.users = resp
    }
  }
}
</script>

<style lang="scss" scoped>
// 私人訊息
.user {
  margin-left: 24px;

  .name {
    color: #171725;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
  }
  .account {
    color: #6c757d;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
}

// 使用者清單
.list-group {
  align-items: center;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 16px 16px 15px 16px;
  overflow: hidden;

  &.active {
    border-right: 2px solid #ff6600;
    padding-right: 14px;
  }
}

.avatar {
  flex-shrink: 0;
  margin-right: 8px;
  margin-top: 3px;
}

.user-info {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;

  .user {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-left: 0px;

    .name {
      color: #171725;
      flex-grow: 0;
      flex-shrink: 1;
      font-size: 16px;
      font-weight: bold;
      line-height: 26px;
      margin-right: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .account {
      color: #6c757d;
      flex-grow: 1;
      flex-shrink: 1;
      font-size: 16px;
      font-weight: normal;
      line-height: 26px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .introduction {
    color: #6c757d;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.last-modified {
  width: 100px;
  color: #657786;
  flex-shrink: 0;
  text-align: end;
  align-self: flex-start;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}
</style>
