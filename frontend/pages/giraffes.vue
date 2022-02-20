<template>
  <CrudRecordPage :record-info="recordInfo" :title="title"></CrudRecordPage>
</template>

<script>
import CrudRecordPage from '~/components/page/crudRecordPage.vue'
import { PublicGiraffe } from '~/models'

export default {
  components: {
    CrudRecordPage,
  },

  data() {
    return {
      recordInfo: PublicGiraffe,
      title: 'Giraffes',
    }
  },
}
</script>
