<template>
  <div class="links__container">
    <div class="links__header">
      <el-button type="primary" @click="headleAdd">增加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" />
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="link" label="链接" :show-overflow-tooltip="true" />
      <el-table-column prop="linkDesc" label="描述" :show-overflow-tooltip="true" />
      <el-table-column label="操作" width="145">
        <template slot-scope="scope">
          <div class="links__setting">
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
      :title="linkForm.title"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="linkForm" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="linkForm.name" />
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="linkForm.link" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="linkForm.linkDesc" type="textarea" />
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
import { getBlogLinks, addBlogLinks, setBlogLinks, deleteBlogLinks } from '@/api/blogLinks';
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      linkForm: {
        id: 0,
        title: '新增链接',
        name: '',
        link: '',
        linkDesc: ''
      }
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    async initTable() {
      const data = await getBlogLinks();
      this.tableData = data.result;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleSubmit() {
      if (this.linkForm.title === '新增分类') {
        const data = {
          keys: ['name', 'link', 'linkDesc'],
          values: [
            this.linkForm.name,
            this.linkForm.link,
            this.linkForm.linkDesc
          ]
        };
        addBlogLinks(data);
      } else {
        const data = {
          id: this.classifyForm.id,
          keys: ['name', 'link', 'linkDesc'],
          values: [
            this.linkForm.name,
            this.linkForm.link,
            this.linkForm.linkDesc
          ]
        };
        setBlogLinks(data);
      }
      this.dialogVisible = false;
      this.initTable();
    },
    handleEdit(row) {
      this.dialogVisible = true;
      const editLinkForm = {
        id: row.id,
        title: '修改链接',
        name: row.name,
        link: row.link,
        linkDesc: row.linkDesc
      };
      this.linkForm = editLinkForm;
    },
    handleDelete(row) {
      deleteBlogLinks({ id: row.id }).then(res => {
        this.initTable();
      });
    },
    headleAdd() {
      this.dialogVisible = true;
      const addLinkForm = {
        id: 0,
        title: '新增分类',
        name: '',
        link: '',
        linkDesc: ''
      };
      this.linkForm = addLinkForm;
    }
  }
};
</script>
<style lang="scss" scoped>
.links {
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
