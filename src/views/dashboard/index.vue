<template>
  <div class="dashboard__container">
    <div class="dashboard__statistics">
      <div
        v-for="item in statistics"
        :key="item.title"
        class="dashboard__statistics-item"
      >
        <div class="dashboard__statistics-item-left">
          <div class="dashboard__statistics-item-number">{{ item.count }}</div>
          <div class="dashboard__statistics-item-title">{{ item.title }}</div>
        </div>
        <i :class="`dashboard__statistics-item-icon bi ${item.icon}`" />
      </div>
    </div>
    <div class="dashboard__analysis">
      <BlogClassifyAnalysisChart
        class="dashboard__analysis-item"
        :data="blogClassifyAnalysisData"
      />
      <ArticleAccessTop
        class="dashboard__analysis-item"
        :data="articleAccessTop"
      />
      <BlogTagsAnalysisData
        class="dashboard__analysis-item"
        :data="blogTagsAnalysisData"
      />
    </div>
    <div class="dashboard__analysis-table">
      <RecentArticles
        class="dashboard__analysis-table-item"
        :data="recentArticles"
      />
      <RecentComments
        class="dashboard__analysis-table-item"
        :data="recentComments"
      />
    </div>
  </div>
</template>

<script>
import {
  getDashboardNumber,
  getBlogClassifyAnalysisData,
  getArticleAccessTop,
  getRecentArticles,
  getRecentComments,
  getBlogTagsAnalysisData
} from '@/api/dashboard';
import BlogClassifyAnalysisChart from './BlogClassifyAnalysisChart';
import BlogTagsAnalysisData from './BlogTagsAnalysisData';
import ArticleAccessTop from './ArticleAccessTop';
import RecentArticles from './RecentArticles';
import RecentComments from './RecentComments';
export default {
  components: {
    BlogClassifyAnalysisChart,
    ArticleAccessTop,
    RecentArticles,
    RecentComments,
    BlogTagsAnalysisData
  },
  data() {
    return {
      recentComments: [],
      blogClassifyAnalysisData: [],
      articleAccessTop: [],
      recentArticles: [],
      blogTagsAnalysisData: [],
      statistics: [
        { title: '文章', count: 0, icon: 'bi-bookmarks-fill' },
        { title: '标签', count: 0, icon: 'bi-tags-fill' },
        { title: '分类', count: 0, icon: 'bi-grid-3x3-gap-fill' },
        { title: '留言数', count: 0, icon: 'bi-chat-dots-fill' }
      ]
    };
  },
  async mounted() {
    const { result: dashboardNumber } = await getDashboardNumber();
    this.statistics[0].count = dashboardNumber.blogarticleNumber;
    this.statistics[1].count = dashboardNumber.tagsNumber;
    this.statistics[2].count = dashboardNumber.blogclassifyNumber;
    this.statistics[3].count = dashboardNumber.leavingmessageNumber;
    const { result: blogClassifyAnalysisData } =
      await getBlogClassifyAnalysisData();
    this.blogClassifyAnalysisData = blogClassifyAnalysisData;
    const { result: articleAccessTop } = await getArticleAccessTop();
    this.articleAccessTop = articleAccessTop;
    const { result: recentArticles } = await getRecentArticles();
    this.recentArticles = recentArticles;
    const { result: recentComments } = await getRecentComments();
    this.recentComments = recentComments;
    const { result: blogTagsAnalysisData } = await getBlogTagsAnalysisData();
    this.blogTagsAnalysisData = blogTagsAnalysisData;
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
.dashboard {
  &__container {
    height: 100%;
    width: 100%;
    padding: 10px 30px;
    background-color: rgba(0, 0, 0, 0.05);
  }
  &__statistics {
    display: flex;
    justify-content: space-between;
  }
  &__statistics-item {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    width: 23.5%;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__statistics-item-number {
    font-size: 35px;
    margin-bottom: 5px;
  }
  &__statistics-item-title {
    font-size: 14px;
  }
  &__statistics-item-icon {
    color: white;
    font-size: 50px;
  }
  &__analysis {
    display: flex;
    height: 290px;
    margin-top: 10px;
  }
  &__analysis-item {
    flex: 1;
    width: 0;
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
  &__analysis-table {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  &__analysis-table-item {
    flex: 1;
    width: 0;
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
}
</style>
