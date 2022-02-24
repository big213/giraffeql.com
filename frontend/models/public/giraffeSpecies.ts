import { GiraffeSpecies } from '../base'
import { PublicGiraffeSubspecies } from './giraffeSubspecies'

export const PublicGiraffeSpecies = {
  ...GiraffeSpecies,
  paginationOptions: {
    ...(!!GiraffeSpecies.paginationOptions && GiraffeSpecies.paginationOptions),
    headerOptions: [
      {
        field: 'nameWithAvatar',
      },
      {
        field: 'createdAt',
        width: '150px',
      },
    ],
    downloadOptions: undefined,
  },
  routeName: 'i-view',
  addOptions: undefined,
  editOptions: undefined,
  deleteOptions: undefined,
  importOptions: undefined,
  expandTypes: [
    {
      recordInfo: PublicGiraffeSubspecies,
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
