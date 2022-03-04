<template>
  <div class="page-container">
    <SiteNav />
    <ListNav>
      <template v-slot:header>
        上線使用者()
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
            <div class="name">
              {{ emptyName(user.name, user.account) }}
            </div>
            <div class="account">
              {{ user.account | addPrefix }}
            </div>
          </div>
        </div>
      </template>
    </ListNav>
    <MessageRoom>
      <!-- 公開聊天室 -->
      <span class="room-title">公開聊天室</span>
    </MessageRoom>
  </div>
</template>

<script>
import UserThumbnail from '@/components/UserThumbnail.vue'
import SiteNav from '@/components/SiteNav.vue'
import ListNav from '@/components/ListNav.vue'
import MessageRoom from '@/components/MessageRoom.vue'
import { addPrefixFilter, emptyNameMethod } from '@/utils/mixins'

const users = [
  {
    id: 1,
    account: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    name: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057'
  },
  {
    id: 2,
    account: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    name: '',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057'
  },
  {
    id: 3,
    account: 'cccccccccccccccccccccccccccccccccccccccc',
    name: '',
    avatar: 'https://loremflickr.com/320/240/woman/?random=25.130310387068057'
  }
]

export default {
  components: {
    SiteNav,
    ListNav,
    MessageRoom,
    UserThumbnail
  },
  mixins: [addPrefixFilter, emptyNameMethod],
  data () {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
// 公開聊天室
.room-title {
  color: #171725;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  margin-left: 23px;
}

.list-group {
  align-items: center;
  border-bottom: 1px solid #E6ECF0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 15px;
  overflow: hidden;
}

.avatar {
  flex-shrink: 0;
  margin-right: 10px;
}

.name {
  color: #1C1C1C;
  flex-grow: 0;
  flex-shrink: 1;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
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
}
</style>
