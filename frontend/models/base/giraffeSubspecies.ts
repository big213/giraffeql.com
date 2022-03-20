import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import AvatarColumn from '~/components/table/avatarColumn.vue'
import NameAvatarColumn from '~/components/table/nameAvatarColumn.vue'
import {
  generateJoinableField,
  generatePreviewableRecordField,
} from '~/services/recordInfo'
import { Giraffe } from './giraffe'

export const GiraffeSubspecies = <RecordInfo<'giraffeSubspecies'>>{
  typename: 'giraffeSubspecies',
  pluralTypename: 'giraffeSubspeciess',
  name: 'Giraffe Subspecies',
  pluralName: 'Giraffe Subspecies',
  icon: 'mdi-folder-information',
  renderItem: (item) => item.name,
  fields: {
    id: {
      text: 'ID',
    },
    name: {
      text: 'Name',
    },
    scientificName: {
      text: 'Scientific Name',
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
    species: generateJoinableField({
      text: 'Species',
      fieldname: 'species',
      typename: 'giraffeSpecies',
      hasAvatar: true,
    }),
    speciesRecord: generatePreviewableRecordField({
      fieldname: 'species',
      text: 'Species',
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
        field: 'speciesRecord',
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
    fields: ['species', 'avatar', 'name', 'scientificName', 'description'],
  },
  importOptions: {
    fields: ['species', 'avatar', 'name', 'scientificName', 'description'],
  },
  editOptions: {
    fields: ['species', 'avatar', 'name', 'scientificName', 'description'],
  },
  viewOptions: {
    fields: [
      'speciesRecord',
      'avatar',
      'name',
      'scientificName',
      'description',
    ],
  },
  enterOptions: {
    routeType: 'a',
  },
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [
    {
      recordInfo: Giraffe,
      name: 'Giraffes',
      lockedFilters: (_that, item) => {
        return [
          {
            field: 'subspecies',
            operator: 'eq',
            value: item.id,
          },
        ]
      },
    },
  ],
}
