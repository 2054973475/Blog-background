<template>
  <div class="leaving-message__container">
    <div class="leaving-message__header" />
    <el-table :data="messageTable" border style="width: 100%" height="580">
      <el-table-column label="序号" prop="id" align="center" width="80" />
      <el-table-column prop="time" label="留言时间" width="150" />
      <el-table-column
        prop="articleId"
        label="博客"
        width="80"
        align="center"
      />
      <el-table-column prop="name" label="用户" width="100" align="center" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="identity" label="身份" width="80" align="center" />
      <el-table-column prop="content" label="内容" />
      <el-table-column
        prop="replyName"
        label="回复对象"
        width="100"
        align="center"
      />
      <el-table-column prop="replyContent" label="回复内容" />
      <el-table-column
        prop="replyMessageId"
        label="回复留言"
        width="80"
        align="center"
      />
      <el-table-column label="操作" width="145">
        <template slot-scope="scope">
          <div class="leaving-message__setting">
            <el-popconfirm
              title="是否要删除该留言用户"
              icon-color="red"
              @onConfirm="handleDelete(scope.row)"
            >
              <el-button
                slot="reference"
                size="mini"
                type="danger"
              >删除</el-button>
            </el-popconfirm>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="leaving-message__pagination"
      :current-page.sync="pageNumber"
      :page-size="pageSize"
      :hide-on-single-page="true"
      background
      layout="prev, pager, next"
      :total="total"
    />
  </div>
</template>

<script>
import { getLeavingMessage, deleteLeavingMessage } from '@/api/leavingmessage';
export default {
  data() {
    return {
      pageNumber: 0,
      pageSize: 10,
      messageTable: [],
      total: 0
    };
  },
  watch: {
    pageNumber() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const data = await getLeavingMessage({
        pageNumber: this.pageNumber - 1,
        pageSize: this.pageSize
      });
      data.result.data.forEach((element) => {
        element.identity = element.identity ? '作者' : '游客';
      });
      this.total = data.result.total;
      this.messageTable = data.result.data;
    },
    async handleDelete(val) {
      const data = await deleteLeavingMessage({ id: val.id });
      this.$notify({
        title: '成功',
        message: data.message,
        type: 'success',
        duration: 2000
      });
      this.init();
    }
  }
};
</script>
<style lang="scss" scoped>
.leaving-message {
  &__container {
    padding: 20px;
  }
  &__pagination {
    display: flex;
    justify-content: right;
    margin-top: 20px;
  }
  &__header {
    margin-bottom: 20px;
  }
  &__setting {
    display: flex;
    justify-content: center;
  }
}
</style>
