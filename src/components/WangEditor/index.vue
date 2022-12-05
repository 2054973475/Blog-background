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
            base64LimitSize: 1000 * 1024
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
