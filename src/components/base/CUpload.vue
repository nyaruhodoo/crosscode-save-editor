<template>
  <input
    ref="file"
    class="input"
    type="file"
    :accept="'.' + name.split('.')[1]"
    hidden
    @change="upload"
  />

  <a-button @click="btnClick"> <CloudUploadOutlined /> {{ title }} </a-button>

  <a-tooltip :placement="'right'">
    <template #title>
      <span>路径提示</span>
    </template>
    <a-button class="help-btn" type="primary" shape="circle" @click="pathHelp">
      <template #icon>
        <QuestionOutlined />
      </template>
    </a-button>
  </a-tooltip>
</template>

<script>
  import { CloudUploadOutlined, QuestionOutlined } from '@ant-design/icons-vue'
  export default {
    emits: ['upload'],
    /*
      name: 文件名 
      path: 提示路径
      title: 按钮内容
    */
    props: ['name', 'path', 'title'],
    components: { CloudUploadOutlined, QuestionOutlined },
    methods: {
      // 无法用label绑定只好转交下事件
      btnClick() {
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
          input.value = null
          return
        }

        this._readFile(file)
      },

      _readFile(file) {
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
  .help-btn {
    margin: 10px;
  }
</style>
