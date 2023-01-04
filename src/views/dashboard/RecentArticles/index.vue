<template>
  <div class="recent-articles__container">
    <div class="recent-articles__header">近期文章</div>
    <div class="recent-articles__content">
      <el-table :data="data" border style="width: 100%" stripe>
        <el-table-column label="标题" show-overflow-tooltip>
          <template slot-scope="scope">
            <a
              target="_blank"
              :href="`http://159.75.239.201/blogDetails/${scope.row.id}`"
            >{{ scope.row.title }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="classifyName"
          label="分类"
          width="70"
          align="center"
        />
        <el-table-column
          prop="viewNumber"
          label="浏览数"
          width="70"
          align="center"
        />
        <el-table-column prop="releaseDate" label="发布时间" width="160" />
      </el-table>
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
.recent-articles {
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
    padding: 15px;
    padding-bottom: 0;
    box-sizing: border-box;
  }
}
</style>
