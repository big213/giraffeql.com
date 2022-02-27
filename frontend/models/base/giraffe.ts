import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import AvatarColumn from '~/components/table/avatarColumn.vue'
import NameAvatarColumn from '~/components/table/nameAvatarColumn.vue'
import FollowColumn from '~/components/table/followColumn.vue'
import {
  generateJoinableField,
  generatePreviewableRecordField,
} from '~/services/recordInfo'
import { getGiraffeSubspecies } from '~/services/dropdown'

export const Giraffe = <RecordInfo<'giraffe'>>{
  typename: 'giraffe',
  pluralTypename: 'giraffes',
  name: 'Giraffe',
  pluralName: 'Giraffes',
  icon: 'mdi-pig-variant',
  routeName: 'a-view',
  renderItem: (item) => item.name,
  fields: {
    id: {
      text: 'ID',
    },
    name: {
      text: 'Name',
    },
    avatar: {
      text: 'Avatar',
      inputType: 'avatar',
      component: AvatarColumn,
    },
    description: {
      text: 'Description',
      inputType: 'textarea',
    },
    nameWithAvatar: {
      text: 'Name',
      fields: ['name', 'avatar'],
      component: NameAvatarColumn,
    },
    subspecies: {
      ...generateJoinableField({
        text: 'Subspecies',
        fieldname: 'subspecies',
        typename: 'giraffeSubspecies',
        hasAvatar: true,
        inputType: 'autocomplete',
      }),
      getOptions: getGiraffeSubspecies,
    },
    subspeciesRecord: generatePreviewableRecordField({
      fieldname: 'subspecies',
      text: 'Subspecies',
    }),
    record: generatePreviewableRecordField({
      text: 'Giraffe',
      followLinkModel: 'userGiraffeFollowLink',
    }),
    currentUserFollowing: {
      text: 'Follow',
      fields: ['currentUserFollowLink.id'],
      component: FollowColumn,
      columnOptions: {
        linkModel: 'userGiraffeFollowLink',
      },
    },
    createdBy: generateJoinableField({
      text: 'Created By',
      fieldname: 'createdBy',
      typename: 'user',
      hasAvatar: true,
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
        field: 'nameWithAvatar',
      },
      {
        field: 'subspeciesRecord',
        width: '200px',
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
    fields: ['subspecies', 'avatar', 'name', 'description'],
  },
  importOptions: {
    fields: ['subspecies', 'avatar', 'name', 'description'],
  },
  editOptions: {
    fields: ['subspecies', 'avatar', 'name', 'description'],
  },
  viewOptions: {
    fields: [
      'subspeciesRecord',
      'avatar',
      'name',
      'description',
      'currentUserFollowing',
    ],
  },
  enterOptions: {},
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [],
}
