<template>
  <div class="page-container">
    <SiteNav />
    <ListNav />
    <MessageRoom>
      <!-- 公開聊天室 -->
      <span class="room-title">公開聊天室</span>

      <!-- 私人訊息 -->
      <!-- <span class="user">
        <div class="name">UserName</div>
        <div class="account">@UserAccount</div>
      </span> -->
    </MessageRoom>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'
import ListNav from '@/components/ListNav.vue'
import MessageRoom from '@/components/MessageRoom.vue'

export default {
  components: {
    SiteNav,
    ListNav,
    MessageRoom
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

</style>
