<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      class="image-uploader"
      drag
      action="https://httpbin.org/post"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div class="image-preview">
      <div v-show="imageUrl.length > 1" class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from '@/utils/request.js';
import { cos, Bucket, Region } from '@/api/util';
export default {
  name: 'SingleImageUpload3',
  props: {
    type: {
      type: String,
      default: 'article'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tempUrl: baseURL,
      dataObj: { token: '', key: '' }
    };
  },
  computed: {
    imageUrl() {
      return this.value;
    }
  },
  methods: {
    rmImage() {
      this.emitInput('');
    },
    emitInput(val) {
      this.$emit('input', val);
    },
    async handleImageSuccess(file) {
      var base64Url = file.files.file;
      var dataURLtoBlob = function(dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      };
      var body = dataURLtoBlob(base64Url);
      cos.putObject(
        {
          Bucket: Bucket,
          Region: Region,
          Key: `images/${this.type}/${new Date().getTime()}.jpeg`,
          Body: body
        },
        (err, data) => {
          if (err) throw err;
          this.emitInput('https://' + data.Location);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 300px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
}
</style>
