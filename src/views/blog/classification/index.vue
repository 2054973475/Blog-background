<template>
  <div class="blog-classify__container">
    <div class="blog-classify__header">
      <el-button type="primary" @click="headleAdd">增加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="word" label="关键词" width="150" :show-overflow-tooltip="true" />
      <el-table-column prop="classifyDesc" label="描述" :show-overflow-tooltip="true" />
      <el-table-column prop="blogNumber" label="博客数" width="180" />
      <el-table-column label="操作" width="145">
        <template slot-scope="scope">
          <div class="blog-classify__setting">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
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
    <el-dialog
      :title="classifyForm.title"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="classifyForm" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="classifyForm.name" />
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="classifyForm.word" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="classifyForm.classifyDesc" type="textarea" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getBlogClassify, addBlogClassify, setBlogClassify, deleteBlogClassify } from '@/api/blogClassify';
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      classifyForm: {
        id: 0,
        title: '新增分类',
        name: '',
        word: '',
        classifyDesc: ''
      }
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    async initTable() {
      const data = await getBlogClassify();
      this.tableData = data.result;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleSubmit() {
      if (this.classifyForm.title === '新增分类') {
        const data = {
          keys: ['name', 'word', 'classifyDesc'],
          values: [
            this.classifyForm.name,
            this.classifyForm.word,
            this.classifyForm.classifyDesc
          ]
        };
        addBlogClassify(data);
      } else {
        const data = {
          id: this.classifyForm.id,
          keys: ['name', 'word', 'classifyDesc'],
          values: [
            this.classifyForm.name,
            this.classifyForm.word,
            this.classifyForm.classifyDesc
          ]
        };
        setBlogClassify(data);
      }
      this.dialogVisible = false;
      this.initTable();
    },
    handleEdit(row) {
      this.dialogVisible = true;
      const editClassifyForm = {
        id: row.id,
        title: '修改分类',
        name: row.name,
        word: row.word,
        classifyDesc: row.classifyDesc
      };
      this.classifyForm = editClassifyForm;
    },
    handleDelete(row) {
      deleteBlogClassify({ id: row.id }).then(res => {
        this.initTable();
      });
    },
    headleAdd() {
      this.dialogVisible = true;
      const addClassifyForm = {
        id: 0,
        title: '新增分类',
        name: '',
        word: '',
        classifyDesc: ''
      };
      this.classifyForm = addClassifyForm;
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-classify {
  &__container {
    padding: 20px;
  }
  &__header {
    margin-bottom: 20px;
  }
  &__setting{
    display: flex;
    justify-content: space-between;
  }
}
</style>
