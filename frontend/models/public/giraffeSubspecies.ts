import { GiraffeSubspecies } from '../base'
import { MyGiraffes } from '../special'
import { PublicGiraffe } from './giraffe'

export const PublicGiraffeSubspecies = {
  ...GiraffeSubspecies,
  paginationOptions: {
    ...(!!GiraffeSubspecies.paginationOptions &&
      GiraffeSubspecies.paginationOptions),
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
