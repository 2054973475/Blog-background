<template>
  <div class="blog-classify__container">
    <div class="blog-classify__header"><el-button type="primary" @click="headleAdd">增加</el-button></div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
      />
      <el-table-column
        prop="name"
        label="名称"
        width="180"
      />
      <el-table-column
        prop="word"
        label="关键词"
        width="300"
      />
      <el-table-column
        prop="desc"
        label="描述"
      />
      <el-table-column
        prop="blogNumber"
        label="博客数"
        width="180"
      />
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
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
import { getBlogClassify, addBlogClassify, setBlogClassify, deleteBlogClassify } from '@/api/blog';
import { Message } from 'element-ui';
import dayjs from 'dayjs';
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      classifyForm: {
        title: '新增分类',
        oldName: '',
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
          keys: ['name', 'word', 'classifyDesc', 'blogNumber', 'createDate', 'updateDate'],
          values: [
            this.classifyForm.name,
            this.classifyForm.word,
            this.classifyForm.classifyDesc,
            0,
            dayjs().format('YYYY-MM-DD HH:mm:ss'),
            dayjs().format('YYYY-MM-DD HH:mm:ss')
          ]
        };
        addBlogClassify(data).then(res => {
          if (res) {
            Message.success('分类新增成功');
          }
        });
      } else {
        const data = {
          name: this.classifyForm.oldName,
          keys: ['name', 'word', 'classifyDesc', 'updateDate'],
          values: [
            this.classifyForm.name,
            this.classifyForm.word,
            this.classifyForm.classifyDesc,
            dayjs().format('YYYY-MM-DD HH:mm:ss')
          ]
        };
        setBlogClassify(data).then(res => {
          if (res) {
            Message.success('分类修改成功');
          }
        });
      }
      this.dialogVisible = false;
      this.initTable();
    },
    handleEdit(row) {
      this.dialogVisible = true;
      const editClassifyForm = {
        title: '修改分类',
        oldName: row.name,
        name: row.name,
        word: row.word,
        classifyDesc: row.classifyDesc
      };
      this.classifyForm = editClassifyForm;
    },
    handleDelete(row) {
      deleteBlogClassify({ name: row.name }).then(res => {
        this.initTable();
        Message.success('分类删除成功');
      });
    },
    headleAdd() {
      this.dialogVisible = true;
      const addClassifyForm = {
        title: '新增分类',
        oldName: '',
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
.blog-classify{
  &__container{
    padding: 20px;
  }
  &__header{
    margin-bottom: 20px;
  }
}
</style>
