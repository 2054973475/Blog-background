<template>
  <div class="blog-about__container">
    <div class="blog-about__header">关于博主</div>
    <div>
      <WangEditor
        type="about"
        :height="500"
        :value="content"
        @unpdateHtml="(value) => (content = value)"
      />
    </div>
    <div class="blog-about__floor">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
import WangEditor from '@/components/WangEditor';
export default {
  name: 'BlogAbout',
  components: { WangEditor },
  data() {
    return {
      content: ``
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.content = this.$store.state.user.userInfo.userDesc;
    });
  },
  methods: {
    handleSubmit() {
      const data = {
        keys: ['userDesc'],
        values: [this.content]
      };
      this.$store.dispatch('user/setInfo', data);
    }
  }
};
</script>

<style scoped lang="scss">
.blog-about {
  &__container {
    padding: 20px;
  }
  &__header {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  &__floor {
    margin-top: 20px;
  }
}
</style>

