import { GiraffeSubspecies } from '../base'
import { PublicGiraffe } from './giraffe'

export const PublicGiraffeSubspecies = {
  ...GiraffeSubspecies,
  paginationOptions: {
    ...(!!GiraffeSubspecies.paginationOptions &&
      GiraffeSubspecies.paginationOptions),
    headerOptions: [
      {
        field: 'nameWithAvatar',
        hideIfGrid: true,
      },
      {
        field: 'speciesRecord',
        width: '200px',
      },
      {
        field: 'createdAt',
        width: '150px',
      },
    ],
    downloadOptions: undefined,
  },
  addOptions: undefined,
  editOptions: undefined,
  deleteOptions: undefined,
  importOptions: undefined,
  enterOptions: {
    routeType: 'i',
  },
  expandTypes: [
    {
      recordInfo: PublicGiraffe,
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
