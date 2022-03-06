<template>
  <section class="user-list">
    <div class="list-header">
      <!-- 使用slot，給上層元素可以插入客製化顯示標題內容 -->
      <slot name="header" />
    </div>
    <div class="list-body">
      <!-- 使用slot，給上層元素可以插入客製化顯示清單內容 -->
      <slot name="list" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.user-list {
  border-right: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 414px;
}

.list-header {
  border-bottom: 1px solid #e6ecf0;
  color: #171725;
  font-size: 24px;
  font-weight: bold;
  line-height: 26px;
  padding: 24px 0px 24px 23px;
}

.list-body {
  overflow-x: clip;
  overflow-y: auto;
}
</style>
