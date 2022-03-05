<template>
  <div class="page-container">
    <SiteNav />
    <section class="main">
      <!-- 用slot插入客製化標題，有效重複使用元件 -->
      <PageHeader>
        通知
      </PageHeader>
      <!-- 通知顯示區域(待完成) -->
    </section>
    <RecommendedList />
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'
import RecommendedList from '@/components/RecommendedList'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    SiteNav,
    PageHeader,
    RecommendedList
  }
}
</script>

<style lang="scss" scoped>

</style>
