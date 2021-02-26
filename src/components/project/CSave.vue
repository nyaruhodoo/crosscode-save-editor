<!--
 * @Description: 用于管理存档的上传与下载
 * @LastEditTime: 2021-02-26 21:53:00
-->
<template>
  <div class="save-control">
    <c-upload
      :title="$root.locale.save.存档上传"
      :name="saveName"
      :path="savePath"
      @upload="upload"
    ></c-upload>

    <transition>
      <div v-if="save" class="save-download">
        <a-button @click="download">
          <CloudDownloadOutlined /> {{ $root.locale.save.存档下载 }}
        </a-button>

        <a-select v-model:value="saveMode" style="width: 89px;">
          <a-select-opt-group :label="$root.locale.save.游戏平台">
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
    components: {
      CUpload,
      CloudDownloadOutlined,
    },
    props: {
      save: {
        type: Object,
      },
    },
    emits: ['set-save'],

    data() {
      return {
        savePath: 'C:\\Users\\你的用户名\\AppData\\Local\\CrossCode',
        saveName: 'cc.save',
        saveMode: null,
      }
    },

    methods: {
      upload(file) {
        const { save, mode } = saveDecryption(file)
        this.saveMode = mode
        this.$emit('set-save', save)
      },

      download() {
        let { saveName, save, saveMode } = this

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
          this.a.download = saveName
        }
        this.a.href = URL.createObjectURL(
          new Blob([save], { type: 'application/json' })
        )
        this.a.click()
        this.message.success(this.$root.locale.save.下载提示)
      },
    },
  }
</script>

<style scoped lang="scss">
  .save-control {
    display: inline-block;
    transform: translate(40px, 40px);
  }

  .save-download {
    margin-top: 30px;
  }
</style>
