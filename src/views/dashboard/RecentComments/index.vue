<template>
  <div class="recent-comments__container">
    <div class="recent-comments__header">近期留言</div>
    <div class="recent-comments__content">
      <el-table height="290" :data="data" border style="width: 100%" stripe>
        <el-table-column
          prop="name"
          label="发起人"
          show-overflow-tooltip
          width="70"
        />
        <el-table-column
          prop="content"
          label="评论内容"
          show-overflow-tooltip
        />
        <el-table-column prop="title" label="出处" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-show="scope.row.title === null"><a target="_blank" href="http://159.75.239.201/leaveMessage">留言板</a></span>
            <span v-show="scope.row.title !== null"><a target="_blank" :href="`http://159.75.239.201/blogDetails/${scope.row.id}`">{{ scope.row.title }}</a></span>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="评论时间" width="160" />
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
.recent-comments {
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
