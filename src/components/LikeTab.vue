<template>
  <div class="tab-container">
    <portal to="modals">
      <ReplyModal
        :order="4"
        :show="show"
        :tweet="modalTweet"
        @after-reply="afterReplyHandler($event)"
        @close="closeModal"
      />
    </portal>
    <!-- 喜歡的內容列表 -->
    <div
      v-show="!isLoading"
      class="tweet-list"
    >
      <!-- 推文顯示清單 -->
      <template v-show="sortedTweets.length > 0">
        <Tweet
          v-for="tweet in sortedTweets"
          :key="tweet.id"
          :initial-tweet="tweet"
          @open-reply-modal="openReplyModal($event)"
        />
      </template>
      <h1
        v-show="isLoading === false && sortedTweets.length === 0"
        class="default-text"
      >
        尚無喜歡的內容
      </h1>
    </div>
  </div>
</template>

<script>
import Tweet from '@/components/Tweet.vue'
import ReplyModal from '@/components/ReplyModal.vue'
import { sortByTime, Toast } from '@/utils/helpers'
import usersAPI from '@/apis/users'
// import moment from 'moment' // 測試用

// 測試資料
/*
const dummyTweets = [
  // 一般資料
  {
    id: 26,
    userData: {
      id: 21,
      account: 'cindy266',
      name: '鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: '2016-08-29T09:12:33.001+0000'
  },
  // name很長
  {
    id: 27,
    userData: {
      id: 21,
      account: 'cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: '2016-08-29T09:12:33.001+0000'
  },
  // name很長且account也很長
  {
    id: 28,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: '2016-08-29T09:12:33.001+0000'
  },
  // 今年內
  {
    id: 29,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: '2022-02-01T11:00:00.001+0800'
  },
  // 24小時內
  {
    id: 30,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: moment().startOf('day').toISOString()
  },
  // 長內文
  {
    id: 31,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!',
    replyAmount: 12,
    likeAmount: 263,
    userLiked: true,
    createdAt: moment().startOf('day').toISOString()
  },
  // 回覆數量1,000以上，10,000以下
  {
    id: 32,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!',
    replyAmount: 5566,
    likeAmount: 263,
    userLiked: true,
    createdAt: moment().startOf('day').toISOString()
  },
  // 回覆數量10,000以上
  {
    id: 33,
    userData: {
      id: 21,
      account: 'cindy266cindy266cindy266',
      name: '鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒鰻魚燒',
      avatar: 'https://i.epochtimes.com/assets/uploads/2021/08/id13156667-shutterstock_376153318-450x322.jpg'
    },
    description: '今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!今天天氣好好喔!!',
    replyAmount: 114514,
    likeAmount: 263,
    userLiked: true,
    createdAt: moment().startOf('day').toISOString()
  }
]
*/

export default {
  components: {
    ReplyModal,
    Tweet
  },
  data () {
    return {
      tweets: [],
      isLoading: true,
      show: false,
      modalTweet: {}
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchTweets(id)
    next()
  },
  computed: {
    sortedTweets () {
      return sortByTime(this.tweets, 'relationshipCreatedAt')
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchTweets(id)
  },
  methods: {
    // 測試用
    /*
    fetchTweets (userId) {
      console.log(userId)
      this.tweets = dummyTweets
      this.isLoading = false
    }
    */
    async fetchTweets (userId) {
      try {
        this.isLoading = true
        const response = await usersAPI.getUserLikes({ userId })

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        let tweets = response.data
        tweets = tweets.map(tweet => ({
          ...tweet,
          id: tweet.TweetId
        }))
        this.tweets = tweets
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試'
        })
      }
    },
    openReplyModal (tweet) {
      this.show = true
      this.modalTweet = tweet
    },
    closeModal () {
      this.show = false
    },
    afterReplyHandler (tweetId) {
      this.tweets = this.tweets.map(tweet => {
        if (tweet.id === tweetId) {
          tweet.replyAmount = tweet.replyAmount + 1
        }
        return tweet
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-wrap: nowrap;

  h1.default-text {
    font-weight: bold;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
}
/* 強制改寫Tweet的顯示樣式 */
::v-deep {
  .tweet-container {
    padding: 10px 15px 0px 15px;
  }
  section.content-part {
    .control-group {
      margin-top: 10px;

      .control-container {
        height: 30px;
      }
    }
  }
}
</style>
