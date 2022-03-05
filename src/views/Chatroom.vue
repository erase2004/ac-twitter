<template>
  <div class="page-container">
    <SiteNav />
    <ListNav>
      <!-- 清單標題標題 -->
      <template v-slot:header>
        上線使用者({{ users.length }})
      </template>

      <!-- 使用者清單 -->
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

export default {
  components: {
    SiteNav,
    ListNav,
    MessageRoom,
    UserThumbnail
  },
  mixins: [addPrefixFilter, emptyNameMethod],
  sockets: {
    // 來自WebSocket的線上使用者清單更新
    userListUpdate (resp) {
      console.log('user list update')
      console.log(resp)
      this.users = [...resp.onlineUsers]
    }
  },
  data () {
    return {
      users: []
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

// 使用者清單
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
