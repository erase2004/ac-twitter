<template>
  <div class="mx-0 px-0 d-flex">
    <AdminSideBar />
    <AdminTweetsList />
  </div>
</template>

<script>
import AdminSideBar from '@/components/Admin/AdminSideBar.vue'
import AdminTweetsList from '@/components/Admin/AdminTweetsList.vue'

export default {
  components: {
    AdminSideBar,
    AdminTweetsList
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  box-sizing: border-box;
  color: #1c1c1c;
}
</style>
