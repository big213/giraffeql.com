import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import {
  generateJoinableField,
  generatePreviewableRecordField,
} from '~/services/recordInfo'

export const UserGiraffeFollowLink = <RecordInfo<'userGiraffeFollowLink'>>{
  typename: 'userGiraffeFollowLink',
  pluralTypename: 'userGiraffeFollowLinks',
  name: 'UserGiraffeFollowLink',
  pluralName: 'UserGiraffeFollowLinks',
  icon: 'mdi-link',
  renderItem: (item) => item.name,
  fields: {
    id: {
      text: 'ID',
    },
    user: generateJoinableField({
      text: 'User',
      fieldname: 'user',
      typename: 'user',
      hasAvatar: true,
    }),
    userRecord: generatePreviewableRecordField({
      fieldname: 'user',
      text: 'User',
      followLinkModel: 'userGiraffeFollowLink',
    }),
    target: generateJoinableField({
      text: 'Target',
      fieldname: 'target',
      typename: 'giraffe',
      hasAvatar: true,
    }),
    targetRecord: generatePreviewableRecordField({
      fieldname: 'target',
      text: 'Target',
      followLinkModel: 'userGiraffeFollowLink',
    }),
    createdAt: {
      text: 'Created At',
      component: TimeagoColumn,
    },
    updatedAt: {
      text: 'Updated At',
      component: TimeagoColumn,
    },
  },
  paginationOptions: {
    hasSearch: false,
    filterOptions: [],
    sortOptions: [
      {
        field: 'createdAt',
        desc: true,
      },
    ],
    headerOptions: [
      {
        field: 'userRecord',
      },
      {
        field: 'targetRecord',
      },
      {
        field: 'createdAt',
        width: '150px',
      },
      {
        field: 'updatedAt',
        width: '150px',
      },
    ],
    downloadOptions: {},
  },
  addOptions: {
    fields: ['user', 'target'],
  },
  importOptions: {
    fields: ['user', 'target'],
  },
  editOptions: {
    fields: ['user', 'target'],
  },
  viewOptions: {
    fields: ['userRecord', 'targetRecord'],
  },
  enterOptions: {
    routeType: 'a',
  },
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [],
}
