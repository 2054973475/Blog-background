<template>
  <div class="blog-admin__container">
    <div class="blog-admin__header">
      <el-button type="primary" @click="clearFilter">清除所有过滤器</el-button>
      <el-button type="primary" @click="handleAddBlog">创建博客</el-button>
    </div>
    <el-table
      ref="blogTable"
      :data="
        tableData.filter(
          (data) =>
            !search || data.title.toLowerCase().includes(search.toLowerCase())
        )
      "
      border
      height="600"
      style="width: 100%"
    >
      <el-table-column label="序号" prop="id" width="80" align="center" />
      <el-table-column
        label="标题"
        prop="title"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="分类"
        width="80"
        prop="classify"
        align="center"
        :filters="classifyFilters"
        :filter-method="filterHandlerClassify"
      />
      <el-table-column label="标签" prop="tags" :show-overflow-tooltip="true" />
      <el-table-column
        label="留言数"
        prop="messagesNumber"
        width="90"
        :show-overflow-tooltip="true"
        align="center"
        sortable
      />
      <el-table-column
        label="阅读数"
        prop="viewNumber"
        width="90"
        :show-overflow-tooltip="true"
        align="center"
        sortable
      />
      <el-table-column
        label="发布状态"
        width="90"
        align="center"
        :filters="[
          { text: '发布中', value: true },
          { text: '草稿', value: false },
        ]"
        :filter-method="filterHandlerIsRelease"
      >
        <template slot-scope="scope">
          <span v-show="scope.row.isRelease">发布中</span>
          <span v-show="!scope.row.isRelease">草稿</span>
        </template>
      </el-table-column>
      <el-table-column
        label="发布时间"
        width="155"
        prop="releaseDate"
        :filters="releaseDateFilters"
        :filter-method="filterHandlerReleaseDate"
      />
      <el-table-column label="操作" width="145">
        <template slot="header" slot-scope="scope">
          <el-input
            v-if="scope"
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <div class="blog-admin__setting">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)"
            >编辑</el-button>
            <el-popconfirm
              title="是否要删除该分类"
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
  </div>
</template>

<script>
import { getBlogArticleAll, deleteBlogArticle } from '@/api/blogArticle';
export default {
  data() {
    return {
      tableData: [],
      search: '',
      classifyFilters: [],
      releaseDateFilters: []
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    initTable() {
      getBlogArticleAll().then((res) => {
        this.tableData = res.result;
        this.classifyFilters = [
          ...new Set(res.result.map((item) => item.classify))
        ].map((item) => ({ text: item, value: item }));
        this.releaseDateFilters = [
          ...new Set(res.result.map((item) => item.releaseDate.split(' ')[0]))
        ].map((item) => ({ text: item, value: item }));
        console.log();
      });
    },
    handleEdit(row) {
      this.$router.push(`editor/${row.id}`);
    },
    handleDelete(row) {
      deleteBlogArticle({ id: row.id }).then((res) => {
        this.initTable();
      });
    },
    handleAddBlog() {
      this.$router.push(`editor`);
    },
    filterHandlerClassify(value, row) {
      return row.classify === value;
    },
    filterHandlerIsRelease(value, row) {
      return row.isRelease === value;
    },
    filterHandlerReleaseDate(value, row) {
      return row.releaseDate.split(' ')[0] === value;
    },
    clearFilter() {
      this.$refs.blogTable.clearFilter();
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-admin {
  &__container {
    padding: 30px;
  }
  &__header {
    display: flex;
    justify-content: right;
    margin-bottom: 20px;
  }
  &__setting {
    display: flex;
    justify-content: space-between;
  }
  &__pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
