<template>
  <div class="wang-editor__conatiner">
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
    <ul
      class="wang-editor__meun"
      :style="`height: ${height + 125}px;`"
      @click="handleMeun"
      v-html="meunHtml"
    />
  </div>
</template>

<script>
import { Boot } from '@wangeditor/editor';
import markdownModule from '@wangeditor/plugin-md';
Boot.registerModule(markdownModule);
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
      mode: 'default',
      meunHtml: ''
    };
  },
  watch: {
    html() {
      this.$emit('updateHtml', this.html);
    },
    value() {
      this.html = this.value;
      this.$nextTick(() => {
        const headers = this.editor.getElemsByTypePrefix('header');
        const html = headers
          .map((header) => {
            const text = header.children[0].text;
            const { id, type } = header;
            return `<li id="${id}" type="${type}" style="${`padding-left: ${
              Number(type.replace('header', '')) * 1.5
            }ch;`}">${text}</li>`;
          })
          .join('');
        this.meunHtml = html;
      });
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
    handleMeun(event) {
      if (event.target.tagName !== 'LI') return;
      event.preventDefault();
      const id = event.target.id;
      this.editor.scrollToElem(id); // 滚动到标题
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
<style lang="scss">
.wang-editor {
  &__conatiner {
    display: flex;
  }
  &__meun {
    padding: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.05);
    min-width: 250px;
    overflow-y: scroll;
    list-style: none;
    li {
      list-style: none;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
