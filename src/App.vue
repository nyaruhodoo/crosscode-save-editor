<template>
  <div class="bg-lea"></div>
  <c-save :save="save" @set-save="setSave"></c-save>
  <c-editor v-if="save" :save="save"></c-editor>
</template>

<script>
  import CSave from '@/components/project/CSave.vue'
  import CEditor from '@/components/project/CEditor/CEditor.vue'
  export default {
    components: {
      CSave,
      CEditor
    },
    data() {
      return {
        save: null
      }
    },
    methods: {
      setSave(save) {
        this.save = save
      }
    }
  }
</script>
