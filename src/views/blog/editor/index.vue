<template>
  <div class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      :rules="rules"
      class="form-container"
    >
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px" prop="标题">
              <MDinput
                v-model="postForm.title"
                :maxlength="100"
                name="name"
                required
              >
                标题
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="10">
                  <el-form-item
                    label-width="80px"
                    label="发布时间:"
                    class="postInfo-container-item"
                  >
                    <el-date-picker
                      v-model="postForm.releaseDate"
                      type="datetime"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="Select date and time"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item
                    label-width="60px"
                    label="分类:"
                    class="postInfo-container-item"
                    prop="classifyId"
                  >
                    <el-select
                      v-model="postForm.classifyId"
                      placeholder="Search classify"
                    >
                      <el-option
                        v-for="item in classifyList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item
                    label-width="90px"
                    label="发布:"
                    class="postInfo-container-item"
                  >
                    <el-switch v-model="postForm.isRelease" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item
          style="margin-bottom: 40px"
          label-width="50px"
          label="摘要:"
        >
          <el-input
            v-model="postForm.summary"
            :rows="1"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
        </el-form-item>
        <el-form-item
          style="margin-bottom: 40px"
          label-width="80px"
          label="文章标签:"
          prop="tags"
        >
          <el-select
            v-model="postForm.tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
            style="width: 100%"
          >
            <el-option
              v-for="item in tagsList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="content" style="margin-bottom: 30px">
          <Tinymce ref="editor" v-model="postForm.content" :height="400" />
        </el-form-item>

        <el-form-item prop="coverImg" style="margin-bottom: 30px">
          <Upload v-model="postForm.coverImg" />
        </el-form-item>
        <el-button
          v-loading="loading"
          class="form-submit"
          type="primary"
          @click="submitForm"
        >
          提交
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { addBlogArticle, getBlogArticle, setBlogArticle } from '@/api/blogArticle';
import Tinymce from '@/components/Tinymce';
import Upload from '@/components/Upload/SingleImage3';
import MDinput from '@/components/MDinput';
import { getBlogClassify } from '@/api/blogClassify';
const defaultForm = {
  isRelease: false,
  title: '', // 文章题目
  content: '', // 文章内容
  summary: '', // 文章摘要
  coverImg: '', // 文章图片
  classifyId: '',
  releaseDate: '', // 发布时间
  tags: []
};

export default {
  components: { Tinymce, MDinput, Upload },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value.length === 0) {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        });
        callback(new Error(rule.field + '为必传项'));
      } else {
        callback();
      }
    };
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      classifyList: [],
      rules: {
        tags: [{ validator: validateRequire }],
        classifyId: [{ validator: validateRequire }],
        coverImg: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      },
      tagsList: []
    };
  },
  created() {
    this.getClassifyList();
    console.log(this.$router.currentRoute.params.id);
    if (!this.$router.currentRoute.params.id) {
      this.setPageTitle('创建博客');
    } else {
      this.setPageTitle('编辑博客');
      getBlogArticle({ id: this.$router.currentRoute.params.id }).then(res => {
        delete res.result[0].classify;
        this.postForm = res.result[0];
        console.log(this.postForm);
        this.postForm.tags = this.postForm.tags.split(',');
      });
    }
  },
  methods: {
    setPageTitle(title) {
      document.title = `${title}`;
    },
    submitForm() {
      console.log(this.postForm);
      this.$refs.postForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          const data = {
            keys: Object.keys(this.postForm),
            values: Object.values(this.postForm)
          };
          if (!this.$router.currentRoute.params.id) {
            this.addArticle(data);
          } else {
            this.setArticle(data);
          }
          this.loading = false;
          this.$router.replace({ name: 'administration' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    addArticle(data) {
      data.keys.push('viewNumber');
      data.values.push(0);
      addBlogArticle(data).then(res => {
        this.$notify({
          title: '成功',
          message: '提交文章成功',
          type: 'success',
          duration: 2000
        });
      });
    },
    setArticle(data) {
      data['id'] = this.$router.currentRoute.params.id;
      setBlogArticle(data).then(res => {
        this.$notify({
          title: '成功',
          message: '修改文章成功',
          type: 'success',
          duration: 2000
        });
      });
    },
    getClassifyList() {
      getBlogClassify().then((res) => {
        this.classifyList = res.result;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.form-submit {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 300px;
}
.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 0 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
