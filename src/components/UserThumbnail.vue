<!--
名稱：泛用型使用者頭像縮圖
用法：使用時傳入使用者資訊（至少須含id和avatar）
功能：
  1. 頭像載入成功，顯示頭像
  2. 頭像載入失敗，顯示預設樣式
  3. 點擊頭像跳頁至使用者Profile頁
-->

<template>
  <router-link
    class="photo-container"
    :to="{name: 'user-main', params: {id : user.id}}"
  >
    <img
      v-show="user.avatar"
      :src="user.avatar"
      @error="user.avatar = ''"
    >
  </router-link>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      user: {
        id: -1,
        avatar: ''
      }
    }
  },
  watch: {
    initialUser (newValue) {
      this.user = {
        ...this.user,
        ...newValue
      }
    }
  },
  created () {
    this.user = {
      ...this.user,
      ...this.initialUser
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-container {
  background-color: #C4C4C4;
  clip-path: circle(25px at center);
  display: block;
  height: 50px;
  width: 50px;

  > img {
    height: inherit;
    object-fit: cover;
    width: inherit;
  }
}
</style>
