<template>
  <div class="blog-setup__container">
    <el-form ref="form" :model="form" label-width="100px" class="blog-setup__form">
      <el-form-item label="博主头像">
        <div class="blog-setup__avatar-container">
          <my-upload
            v-model="show"
            @crop-success="cropSuccess"
          />
          <img class="blog-setup__avatar" :src="form.avatar" @click="toggleShow">
        </div>

      </el-form-item>
      <el-form-item label="博主名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="博主标语">
        <el-input v-model="form.introduction" />
      </el-form-item>
      <el-form-item label="博主QQ">
        <el-input v-model="form.QQ" />
      </el-form-item>
      <el-form-item label="博主邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload/upload-2.vue';
export default {
  components: {
    myUpload
  },
  data() {
    return {
      show: false,
      form: {
        name: '',
        introduction: '',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        email: '',
        phone: '',
        QQ: ''
      }
    };
  },
  async mounted() {
    const data = await this.$store.dispatch('user/getInfo');
    this.form.name = data.name;
    this.form.introduction = data.introduction;
    this.form.avatar = data.avatar;
    this.form.email = data.email;
    this.form.phone = data.phone;
    this.form.QQ = data.QQ;
  },
  methods: {
    onSubmit() {
      const data = {
        keys: Object.keys(this.form),
        values: Object.values(this.form)
      };
      this.$store.dispatch('user/setInfo', data).then(res => {
        console.log(res);
      });
    },
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      this.form.avatar = imgDataUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-setup {
  &__container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__form{
    width: 500px;
  }
  &__avatar{
    width:150px;
    height: 150px;
    border-radius: 50%;
  }
  &__avatar-container{
    display: flex;
    justify-content: center;
  }
}
</style>
