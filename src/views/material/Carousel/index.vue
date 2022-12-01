<template>
  <div class="carousel__container">
    <div class="carousel__header">
      <el-button type="primary" @click="headleAdd">增加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" />
      <el-table-column label="图片" width="220">
        <template slot-scope="scope">
          <img :src="scope.row.picture" class="carousel__img">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" :show-overflow-tooltip="true" />
      <el-table-column prop="pictureDesc" label="描述" :show-overflow-tooltip="true" />
      <el-table-column label="操作" width="145">
        <template slot-scope="scope">
          <div class="carousel__setting">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popconfirm
              title="是否要删除该轮播图片"
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
      :title="carouselForm.title"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-form ref="form" :model="carouselForm" label-width="80px">
        <el-form-item>
          <Upload v-model="carouselForm.picture" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="carouselForm.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="carouselForm.pictureDesc" type="textarea" />
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
import Upload from '@/components/Upload/SingleImage3';
import { getCarousel, addCarousel, setCarousel, deleteCarousel } from '@/api/carousel';
export default {
  components: {
    Upload
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      carouselForm: {
        title: '',
        id: 0,
        name: '',
        picture: '',
        pictureDesc: ''
      }
    };
  },
  mounted() {
    this.initTable();
  },
  methods: {
    async initTable() {
      const data = await getCarousel();
      this.tableData = data.result;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleSubmit() {
      if (this.carouselForm.title === '新增轮播图片') {
        const data = {
          keys: ['name', 'picture', 'pictureDesc'],
          values: [
            this.carouselForm.name,
            this.carouselForm.picture,
            this.carouselForm.pictureDesc
          ]
        };
        addCarousel(data);
      } else {
        const data = {
          id: this.carouselForm.id,
          keys: ['name', 'picture', 'pictureDesc'],
          values: [
            this.carouselForm.name,
            this.carouselForm.picture,
            this.carouselForm.pictureDesc
          ]
        };
        setCarousel(data);
      }
      this.dialogVisible = false;
      this.initTable();
    },
    handleEdit(row) {
      this.dialogVisible = true;
      const editCarouselForm = {
        id: row.id,
        title: '修改轮播图片',
        name: row.name,
        picture: row.picture,
        pictureDesc: row.pictureDesc
      };
      this.carouselForm = editCarouselForm;
    },
    handleDelete(row) {
      deleteCarousel({ id: row.id }).then(res => {
        this.initTable();
      });
    },
    headleAdd() {
      this.dialogVisible = true;
      const addCarouselForm = {
        id: 0,
        title: '新增轮播图片',
        name: '',
        picture: '',
        pictureDesc: ''
      };
      this.carouselForm = addCarouselForm;
    }
  }
};
</script>
<style lang="scss" scoped>
.carousel {
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
  &__img{
    width: 200px;
    height: 120px;
  }
}
</style>
