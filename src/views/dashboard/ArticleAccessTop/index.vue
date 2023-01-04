<template>
  <div class="article-access-top__container">
    <div class="article-access-top__header">文章访问TOP10</div>
    <div class="article-access-top__content">
      <div
        v-for="item in data"
        :key="item.id"
        class="article-access-top__content-item"
      >
        <div class="article-access-top__content-item-title">
          <a
            target="_blank"
            :href="`http://159.75.239.201/blogDetails/${item.id}`"
          >{{ item.title }}</a>
        </div>
        <div class="article-access-top__content-item-view-number">
          {{ item.viewNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.article-access-top {
  &__container {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 20px;
    border-radius: 10px;
  }
  &__header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding-top: 0;
    padding-bottom: 10px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
  &__content {
    flex: 1;
    width: 100%;
    padding: 5px 0;
  }
  &__content-item {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
  &__content-item-title {
    flex: 1;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a{
        color:rgba(0, 0, 0, 0.85)
    }
    a:hover {
      color: red;
    }
  }
  &__content-item-view-number {
    width: 50px;
    text-align: center;
  }
}
</style>
