<template>
  <div class="message-room">
    <div class="room-header">
      <!-- 使用slot，給上層元素可以插入客製化顯示內容的空間 -->
      <slot />
    </div>
    <div class="message-container">
      <div />
    </div>
    <div class="control-group">
      <input
        type="text"
        name="message"
        placeholder="輸入訊息..."
      >
      <icon
        icon-name="message-send"
        class="btn-send cursor-pointer"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-room {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.room-header {
  display: flex;
  height: 74px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid #E6ECF0;
}

.message-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 1;
  overflow-x: clip;
  overflow-y: auto;
}

.control-group {
  height: 64px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border-top: 1px solid #E6ECF0;

  input {
    background-color: #E6ECF0;
    border: 1px solid #E6ECF0;
    border-radius: 50px;
    margin-right: 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #1C1C1C;
    padding-left: 16px;
    display: flex;
    flex-grow: 1;

    &::placeholder {
      color: #92929D;
    }
  }

  .btn-send {
    height: 24px;
    width: 24px;
    color: #FF6600;

    &:hover {
      opacity: 0.75;
    }

    &[disabled] {
      opacity: 0.4;
    }
  }
}
</style>
