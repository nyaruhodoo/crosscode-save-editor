<!--
 * @Description: 用于管理存档的上传与下载
 * @LastEditTime: 2021-01-30 15:38:30
-->
<template>
  <div class="save">
    <c-upload
      title="存档上传"
      :name="fileName"
      :path="'C:\\Users\\你的用户名\\AppData\\Local\\CrossCode'"
      @upload="upload"
    ></c-upload>

    <transition>
      <div v-if="save" class="download">
        <a-button @click="download">
          <CloudDownloadOutlined /> 存档下载
        </a-button>

        <a-select v-model:value="saveMode" style="width: 89px">
          <a-select-opt-group label="游戏平台">
            <a-select-option value="pc">
              pc
            </a-select-option>

            <a-select-option value="switch">
              switch
            </a-select-option>

            <a-select-option value="dev">
              dev
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>
    </transition>
  </div>
</template>

<script>
  import CUpload from '@/components/base/CUpload.vue'
  import { CloudDownloadOutlined } from '@ant-design/icons-vue'
  import { saveDecryption, saveEncryption } from '@/util/saveHandler.js'

  export default {
    emits: ['set-save'],
    props: ['save'],

    components: {
      CUpload,
      CloudDownloadOutlined
    },

    data() {
      return {
        saveMode: null,
        fileName: 'cc.save'
      }
    },

    methods: {
      upload(file) {
        const { save, mode } = saveDecryption(file)
        this.saveMode = mode
        this.$emit('set-save', save)
      },

      download() {
        let { fileName, save, saveMode } = this

        // 研究存档用
        if (saveMode === 'dev') {
          save = JSON.stringify(save.autoSlot)
        }
        // 正常模式
        else {
          save = saveEncryption(save, saveMode)
        }

        if (!this.a) {
          this.a = document.createElement('a')
          this.a.download = fileName
        }
        this.a.href = URL.createObjectURL(
          new Blob([save], { type: 'application/json' })
        )
        this.a.click()
        this.message.success('请手动替换存档,并且重启游戏')
      }
    }
  }
</script>

<style scoped lang="scss">
  .save {
    display: inline-block;
    transform: translate(40px, 40px);
  }
  .download {
    margin-top: 30px;
  }
</style>
