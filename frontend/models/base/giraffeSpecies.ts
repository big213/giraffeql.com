import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import AvatarColumn from '~/components/table/avatarColumn.vue'
import NameAvatarColumn from '~/components/table/nameAvatarColumn.vue'
import { GiraffeSubspecies } from './giraffeSubspecies'

export const GiraffeSpecies = <RecordInfo<'giraffeSpecies'>>{
  typename: 'giraffeSpecies',
  pluralTypename: 'giraffeSpecies',
  name: 'Giraffe Species',
  pluralName: 'Giraffe Species',
  icon: 'mdi-folder-information',
  routeName: 'a-view',
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
    fields: ['avatar', 'name', 'scientificName', 'description'],
  },
  importOptions: {
    fields: ['avatar', 'name', 'scientificName', 'description'],
  },
  editOptions: {
    fields: ['avatar', 'name', 'scientificName', 'description'],
  },
  viewOptions: {
    fields: ['avatar', 'name', 'scientificName', 'description'],
  },
  enterOptions: {},
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [
    {
      recordInfo: GiraffeSubspecies,
      lockedFilters: (_that, item) => {
        return [
          {
            field: 'species',
            operator: 'eq',
            value: item.id,
          },
        ]
      },
    },
  ],
}
