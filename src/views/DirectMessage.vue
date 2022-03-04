<template>
  <div class="page-container">
    <SiteNav />
    <ListNav>
      <template v-slot:header>
        訊息
      </template>
      <template v-slot:list>
        <div
          class="list-container"
        >
          <div
            v-for="user in users"
            :key="user.id"
            class="list-group"
          >
            <UserThumbnail
              :initial-user="user"
              class="avatar"
            />
            <div class="user-info">
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
        </div>
      </template>
    </ListNav>
    <MessageRoom>
      <!-- 私人訊息 -->
      <span class="user">
        <div class="name">UserName</div>
        <div class="account">@UserAccount</div>
      </span>
    </MessageRoom>
  </div>
</template>

<script>
import UserThumbnail from '@/components/UserThumbnail.vue'
import SiteNav from '@/components/SiteNav.vue'
import ListNav from '@/components/ListNav.vue'
import MessageRoom from '@/components/MessageRoom.vue'
import { addPrefixFilter, emptyNameMethod, timeFormatFilter } from '@/utils/mixins'

const users = [
  {
    id: 1,
    account: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    name: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
    introduction: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    lastModified: new Date()
  },
  {
    id: 2,
    account: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    name: '',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
    introduction: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx zzzzzzzzzzzzzzzzzzzz',
    lastModified: new Date()
  },
  {
    id: 3,
    account: 'cccccccccccccccccccccccccccccccccccccccc',
    name: '',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057',
    introduction: 'aaaaaaaaaaaaaaa bbbbbbbbbbbbbbb ccccccccccccccccccc ddddddddddddddd',
    lastModified: new Date()
  }
]

export default {
  components: {
    SiteNav,
    ListNav,
    MessageRoom,
    UserThumbnail
  },
  mixins: [addPrefixFilter, emptyNameMethod, timeFormatFilter],
  data () {
    return {
      users
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
    color: #6C757D;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
}

.list-group {
  align-items: center;
  border-bottom: 1px solid #E6ECF0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 16px 16px 15px 16px;
  overflow: hidden;

  &.active {
    border-right: 2px solid #FF6600;
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
      color: #6C757D;
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
    color: #6C757D;
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
