<template>
  <div class="save">
    <c-upload
      title="存档上传"
      :name="saveName"
      :path="savePath"
      placement="right"
      @upload="upload"
    ></c-upload>

    <transition>
      <div class="download" style="margin-top: 30px;" v-if="$root.save">
        <a-button @click="download">
          <CloudDownloadOutlined /> 存档下载
        </a-button>

        <a-select v-model:value="pc" style="width: 89px">
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

  <audio loop ref="audio">
    <source src="@/assets/muLea.ogg" />
  </audio>
</template>

<script>
  import { CloudDownloadOutlined } from '@ant-design/icons-vue'
  import cUpload from '@/components/base/c-upload.vue'
  import { decryption, encryption } from '@/util/saveHandler.js'

  export default {
    emits: ['set-save'],
    components: {
      cUpload,
      CloudDownloadOutlined
    },
    data() {
      return {
        pc: null,
        saveName: 'cc.save',
        savePath: 'C:\\Users\\你的用户名\\AppData\\Local\\CrossCode'
      }
    },
    mounted() {
      this.$refs.audio.volume = 0.2
    },

    methods: {
      savePathHelp() {
        const { savePath } = this
        navigator.clipboard
          .writeText(savePath)
          .then(() => {
            this.message.success('存档位置已经复制到剪切板')
          })
          .catch(() => {
            this.message.error(`请手动复制存档, ${savePath}`)
          })
      },

      upload(file) {
        this.$refs.audio.play()
        const { save, pc } = decryption(file)
        // 弱智组件不支持布尔值,虽然不清楚是谁的锅
        this.pc = pc ? 'pc' : 'switch'
        this.$emit('set-save', save)
      },

      download() {
        let {
          saveName,
          $root: { save },
          pc
        } = this
        if (!save) return

        // 因为不支持布尔值,必须修复这个弱智代码
        if (pc === 'switch') pc = false

        // 研究存档用
        if (pc === 'dev') {
          save = JSON.stringify(save.autoSlot)
        }
        // 正常模式
        else {
          save = encryption(save, pc)
        }

        if (!this.a) {
          this.a = document.createElement('a')
          this.a.download = saveName
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
    transform: translate(40px, 40px);
  }
</style>
