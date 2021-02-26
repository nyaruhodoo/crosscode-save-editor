<!--
 * @Description: 文件上传组件
 * @param {String} name: 要求的文件名
 * @param {String} path: 提示路径
 * @param {String} title: 按钮文字
 * @LastEditTime: 2021-02-26 21:55:45
-->
<template>
  <div class="file-upload">
    <input
      ref="fileInput"
      type="file"
      hidden
      :accept="'.' + name.split('.')[1]"
      @change="upload"
    />

    <a-button @click="toInput"> <CloudUploadOutlined /> {{ title }} </a-button>

    <a-tooltip :placement="'right'">
      <template #title>
        <span>{{ $root.locale.upload.路径提示 }}</span>
      </template>
      <a-button
        class="help-btn"
        type="primary"
        shape="circle"
        @click="pathHelp"
      >
        <template #icon>
          <QuestionOutlined />
        </template>
      </a-button>
    </a-tooltip>
  </div>
</template>

<script>
  import { CloudUploadOutlined, QuestionOutlined } from '@ant-design/icons-vue'
  export default {
    components: { CloudUploadOutlined, QuestionOutlined },
    props: {
      name: {
        type: String,
      },
      path: {
        type: String,
      },
      title: {
        type: String,
      },
    },
    emits: ['upload'],
    methods: {
      // 无法用label绑定只好转交下事件
      toInput() {
        this.$refs.fileInput.click()
      },

      upload() {
        const {
          name,
          $refs: { fileInput },
        } = this

        const file = fileInput.files[0]
        if (!file) return
        if (file.name !== name) {
          this.message.error(`${this.$root.locale.upload.确认文件名}: ${name}`)
          fileInput.value = null
          return
        }

        this._readFile(file)
      },

      async pathHelp() {
        const { path } = this

        try {
          await navigator.clipboard.writeText(path)
          this.message.success(this.$root.locale.upload.复制路径)
        } catch (error) {
          this.message.error(`${this.$root.locale.upload.手动复制}, ${path}`)
        }
      },

      _readFile(file) {
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
          this.$emit('upload', reader.result)
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .file-upload {
    display: inline-block;
  }

  .help-btn {
    margin: 10px;
  }
</style>
