<template>
  <div class="tweets d-flex flex-column">
    <div class="navbar">
      <div class="title">
        推文清單
      </div>
    </div>
    <div class="data-panel">
      <div
        v-for="tweet in tweets"
        :key="tweet.id"
        class="list-container d-flex"
      >
        <span class="photo">
          <UserThumbnail :initial-user="tweet.userData" />
        </span>
        <div class="text-area">
          <div class="info d-flex">
            <div class="name">
              {{ emptyName(tweet.userData.name, tweet.userData.account) }}
            </div>
            <div class="account">
              <!-- TODO 引入時間規則 -->
              {{ tweet.userData.account | addPrefix }} ‧
              {{ tweet.createdAt | timeFormat }}
            </div>
          </div>
          <div class="comment">
            <span> {{ tweet.description | sliceSentence }} </span>
          </div>
          <button
            class="btn delete"
            type="button"
            :disabled="isProcessing"
            @click.prevent.stop="deleteTweet(tweet.id)"
          >
            <icon
              icon-name="delete"
              icon-class="delete-icon"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserThumbnail from '@/components/UserThumbnail.vue'
import adminApi from '@/apis/admin'
import { Toast } from '@/utils/helpers'

import {
  emptyNameMethod,
  addPrefixFilter,
  numberFormatFilter,
  timeFormatFilter
} from '@/utils/mixins'

export default {
  components: {
    UserThumbnail
  },
  filters: {
    addIcon (account) {
      return '@' + account
    },
    sliceSentence (comment) {
      return comment.length > 50 ? comment.slice(0, 50) + '...' : comment
    }
  },
  mixins: [
    emptyNameMethod,
    addPrefixFilter,
    numberFormatFilter,
    timeFormatFilter
  ],
  data () {
    return {
      tweets: [],
      isProcessing: false
    }
  },
  created () {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets () {
      try {
        const { data } = await adminApi.getTweets()

        if (Array.isArray(data) === false) {
          throw new Error(data.message)
        }

        this.tweets = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得資料'
        })
        console.dir(error)
      }
    },
    async deleteTweet (tweetId) {
      try {
        this.isProcessing = true
        const { data } = await adminApi.deleteTweet({ tweetId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)
        Toast.fire({
          icon: 'success',
          title: '成功刪除推文'
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除推文'
        })
        console.dir(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  pointer-events: none;
}
.tweets {
  flex-grow: 1;
  .navbar {
    height: 55px;
    width: 100%;
    padding: 15px 0px 15px 26px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e6ecf0;
    .title {
      font-size: 18px;
      line-height: 26px;
    }
  }
  .data-panel {
    height: 1147px;
    overflow-y: auto;
    .list-container {
      position: relative;
      height: 65px;
      padding: 0 0 12px 15px;
      margin-top: 10px;
      border-bottom: 1px solid #e6ecf0;
      .text-area {
        line-height: 22px;
        font-size: 15px;
        margin-left: 15px;
        .name {
          margin-right: 5px;
          a {
            color: #1c1c1c;
          }
        }
        .account {
          color: #657786;
          font-weight: 500;
        }
        .comment {
          font-weight: 500;
          margin-top: 6px;
        }
      }
      .delete {
        position: absolute;
        border: none;
        padding: 0;
        right: 19.5px;
        top: 4.5px;
        height: 15px;
        width: 15px;
        &:focus {
          outline: none;
          box-shadow: none;
        }
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}
</style>
