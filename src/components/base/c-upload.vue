<template>
  <div>
    <input
      class="input"
      type="file"
      :accept="'.' + name.split('.')[1]"
      ref="file"
      @change="upload"
      hidden
    />
    <a-button @click="inputClick">
      <CloudUploadOutlined /> {{ title }}
    </a-button>

    <a-tooltip :placement="placement">
      <template #title>
        <span>路径提示</span>
      </template>
      <a-button type="primary" shape="circle" @click="pathHelp">
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
    emits: ['upload'],
    props: ['name', 'path', 'title', 'placement'],
    components: { CloudUploadOutlined, QuestionOutlined },
    methods: {
      // 无法用label绑定只好转交下事件
      inputClick() {
        this.$refs.file.click()
      },

      upload() {
        const {
          name,
          $refs: { file: input }
        } = this
        const file = input.files[0]
        if (!file) return
        if (file.name !== name) {
          this.message.error(`请确认文件名是否为: ${name}`)
          return
        }

        this._fileRead(file)

        input.value = null
      },

      _fileRead(file) {
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
          this.$emit('upload', reader.result)
        }
      },

      pathHelp() {
        const { path } = this
        navigator.clipboard
          .writeText(path)
          .then(() => {
            this.message.success('路径位置已经复制到剪切板')
          })
          .catch(() => {
            this.message.error(`请手动复制路径, ${path}`)
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  .ant-btn {
    margin-right: 10px;
  }
</style>
