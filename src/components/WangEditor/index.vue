<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="html"
      :style="`height: ${height}px; overflow-y: hidden`"
      :default-config="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { cos, Bucket, Region } from '@/api/util';
export default {
  components: { Editor, Toolbar },
  props: {
    height: {
      type: Number,
      default: 500
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'article'
    }
  },
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        excludeKeys: ['uploadVideo', 'insertVideo', 'editVideoSize']
      },
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            server: '',
            timeout: 5 * 1000, // 5s
            fieldName: 'myFileName',
            customUpload: this.customUpload
          }
        }
      },
      mode: 'default'
    };
  },
  watch: {
    html() {
      this.$emit('updateHtml', this.html);
    },
    value() {
      this.html = this.value;
    }
  },
  methods: {
    customUpload(file, insertFn) {
      let key = '';
      if (this.type === 'article') {
        key = `images/${this.type}/${new Date().getTime() + '-' + file.name}`;
      } else {
        key = `images/${this.type}/${new Date().getTime() + '-' + file.name}`;
      }
      cos.putObject(
        {
          Bucket: Bucket,
          Region: Region,
          Key: key,
          Body: file
        },
        (err, data) => {
          if (err) throw err;
          insertFn('https://' + data.Location);
        }
      );
    },
    onCreated(editor) {
      this.editor = Object.seal(editor);
    },
    beforeDestroy() {
      const editor = this.editor;
      if (editor === null) return;
      editor.destroy();
    }
  }
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
