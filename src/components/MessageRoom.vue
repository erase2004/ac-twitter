<template>
  <div class="message-room">
    <section class="room-header">
      <!-- 使用slot，給上層元素可以插入客製化顯示標題內容 -->
      <slot />
    </section>
    <section
      ref="chatroom"
      class="message-container"
    >
      <div class="mt-auto">
        <div
          v-for="message in proccessedMessage"
          :key="message.id"
          class="message-block"
          :class="{'server-message': message.type === 0, 'self-message': message.type === 1}"
        >
          <!-- 伺服器發的訊息 -->
          <div
            v-if="message.type === 0"
            class="message"
          >
            {{ serverMessage(message) }}
          </div>
          <!-- 自己發的訊息 -->
          <div
            v-else-if="message.type === 1"
            class="self"
          >
            <div class="message">
              {{ message.message }}
            </div>
            <div class="time">
              {{ message.created_at | timeFormat }}
            </div>
          </div>
          <!-- 其他人發的訊息 -->
          <div
            v-else-if="message.type === 2"
            class="user"
          >
            <div class="message-area">
              <UserThumbnail
                :initial-user="message.userData"
                class="avatar"
              />
              <div class="message">
                {{ message.message }}
              </div>
            </div>
            <div class="time">
              {{ message.created_at | timeFormat }}
            </div>
          </div>
          <div
            v-else
            class="d-none"
          />
        </div>
      </div>
    </section>
    <!-- 輸入框與訊息送出按鈕 -->
    <section class="control-group">
      <input
        v-model.lazy.trim="inputMessage"
        type="text"
        name="message"
        placeholder="輸入訊息..."
      >
      <icon
        icon-name="message-send"
        class="btn-send cursor-pointer"
        :disabled="isLoading"
        @click.native.stop.prevent="sendMessage"
      />
    </section>
  </div>
</template>

<script>
import UserThumbnail from '@/components/UserThumbnail.vue'
import { Toast } from '@/utils/helpers'
import { timeFormatFilter, emptyNameMethod, inputValidationMethod } from '@/utils/mixins'
import { mapState } from 'vuex'

export default {
  components: {
    UserThumbnail
  },
  mixins: [timeFormatFilter, emptyNameMethod, inputValidationMethod],
  data () {
    return {
      messages: [],
      inputMessage: '',
      isLoading: true
    }
  },
  sockets: {
    // WebSocket登入成功
    loginSuccess (resp) {
      console.log('login success')
      console.log(resp)
      this.isLoading = false
      this.messages = [...resp.messageData]
    },
    // WebSocket斷線
    disconnect (resp) {
      console.log('socket disconnected')
      console.log(resp)
      this.isLoading = true
    },
    // 來自WebSocket的新訊息
    message (resp) {
      this.messages = [...this.messages, resp]
    }
  },
  computed: {
    ...mapState(['currentUser']),
    proccessedMessage () {
      // 過濾掉重複id的message

      const idSet = new Set()
      const messages = this.messages.filter(message => {
        if (idSet.has(message.id)) {
          return false
        } else {
          idSet.add(message.id)
          return true
        }
      })

      return messages.map(message => {
        if (message.source === 'server') {
          // 伺服器發的訊息
          return {
            ...message,
            type: 0
          }
        }

        if (message.userData.id === this.currentUser.id) {
          // 自己發的訊息
          return {
            ...message,
            type: 1
          }
        }

        // 別人發的訊息
        return {
          ...message,
          type: 2
        }
      })
    }
  },
  watch: {
    proccessedMessage () {
      this.$nextTick(function () {
        var container = this.$refs.chatroom
        container.scrollTop = container.scrollHeight
      })
    }
  },
  mounted () {
    // 在component掛載後，對WebSocket進行登入
    this.$socket.client.emit('login', { userId: this.currentUser.id })
  },
  beforeDestroy () {
    console.log('before destory')
    this.$socket.client.emit('logout', { userId: this.currentUser.id })
  },
  methods: {
    serverMessage (message) {
      console.log(message)

      const userName = (message.userData) ? this.emptyName(message.userData.name, message.userData.account) : this.emptyName(message.userData.name, message.userData.account)

      if (message.message === 'join') {
        return `${userName} 上線`
      } else if (message.message === 'leave') {
        return `${userName} 離線`
      } else {
        return ''
      }
    },
    sendMessage () {
      if (this.isLoading) return

      const { status, message } = this.checkInstantMessage(this.inputMessage)

      if (status === false) {
        return Toast.fire({
          icon: 'warning',
          title: message
        })
      }

      this.$socket.client.emit('message', {
        source: 'user',
        userId: this.currentUser.id,
        message: this.inputMessage
      })

      this.inputMessage = ''
    }
  }
}
</script>

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
  flex-shrink: 0;
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
  padding: 16px;
}

.message-block {
  // 伺服器發的訊息
  &.server-message {
    margin-bottom: 16px;
    text-align: center;
    .message {
      display: inline-block;
      color: #657786;
      background-color: #E5E5E5;
      border-radius: 50px;
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      padding: 7px 14px;
    }
  }

  // 自己發的訊息
  &.self-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-top: 20px;

    .self {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      .message {
        max-width: 400px;
        background-color: #FF6600;
        color: #FFFFFF;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        border-radius: 25px 25px 0px 25px;
        padding: 10px 15px 15px 15px;
      }

      .time {
        color: #657786;
        font-weight: normal;
        font-size: 13px;
        line-height: 13px;
        margin-left: 50px;
        margin-top: 2px;
        align-self: flex-end;
      }
    }
  }

  // 別人發的訊息
  .user {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 20px;

    .message-area {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      max-width: 415px;

      .avatar {
        align-self: flex-end;
        margin-right: 10px;
      }

      .message {
        background-color: #E6ECF0;
        color: #1C1C1C;
        border-radius: 25px 25px 25px 0px;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        padding: 10px 15px 15px 15px;
      }
    }

    .time {
      color: #657786;
      font-weight: normal;
      font-size: 13px;
      line-height: 13px;
      margin-left: 50px;
      margin-top: 2px;
    }
  }
}

// 改寫UserThumbnail樣式
::v-deep .photo-container {
  height: 40px;
  width: 40px;
  clip-path: circle(20px at center);
}

// 輸入框與訊息送出按鈕
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
