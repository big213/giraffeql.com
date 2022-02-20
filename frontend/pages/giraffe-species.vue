<template>
  <CrudRecordPage :record-info="recordInfo" :title="title"></CrudRecordPage>
</template>

<script>
import CrudRecordPage from '~/components/page/crudRecordPage.vue'
import { PublicGiraffeSpecies } from '~/models'

export default {
  components: {
    CrudRecordPage,
  },

  data() {
    return {
      recordInfo: PublicGiraffeSpecies,
      title: 'Giraffe Species',
    }
  },
}
</script>
