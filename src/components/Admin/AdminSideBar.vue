<template>
  <div class="sidebar d-flex flex-column">
    <icon
      class="logo"
      icon-name="logo"
      icon-class="logo"
    />

    <div class="nav-item-group">
      <div class="nav-item d-flex align-items-center">
        <router-link
          class="item d-flex"
          to="/admin/tweets"
        >
          <icon
            class="nav-icon"
            icon-name="home"
            icon-class="home"
          />
          <p class="text">
            推文清單
          </p>
        </router-link>
      </div>
      <div class="nav-item d-flex align-items-center">
        <router-link
          class="item d-flex"
          to="/admin/users"
        >
          <icon
            class="nav-icon"
            icon-name="user"
            icon-class="user"
          />
          <p class="text">
            使用者列表
          </p>
        </router-link>
      </div>
    </div>
    <div
      class="logout d-flex align-items-center"
      @click.stop.prevent="logout"
    >
      <icon
        icon-name="logout"
        icon-class="logout-icon cursor-point"
      />
      <p>登出</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push({ name: 'admin-sign-in' })
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 24px;
  height: 24px;
  margin-right: 7px;
}
.sidebar {
  width: 275px;
  margin: 4px 0 0 103px;
  border-right: 1px solid #e6ecf0;

  .logo {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
  .nav-item-group {
    width: inherit;
    margin-top: 24px;
    margin: 24px 0 0 10px;
    .nav-item {
      height: 56px;
      cursor: default;
      .item {
        cursor: pointer;
        text-decoration: none;
        color: #1c1c1c;
        .nav-icon {
          margin-right: 20px;
        }
        .text {
          margin: 0;
          line-height: 26px;
          font-size: 18px;
        }
      }
      .active {
        color: #ff6600;
      }
    }
  }
  .logout {
    cursor: pointer;
    margin-bottom: 17px;
    margin-left: 11px;
    margin-top: auto;
    user-select: none;

    svg {
      margin-right: 0px;
    }
    p {
      margin: 0 20px;
      line-height: 26px;
      font-size: 18px;
    }
  }
}
</style>
