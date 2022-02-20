import { User } from '../base'
import { PublicGiraffe } from './giraffe'

export const PublicUser = {
  ...User,
  paginationOptions: {
    ...(!!User.paginationOptions && User.paginationOptions),
    filterOptions: [],
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
  viewOptions: {
    fields: ['avatar', 'name', 'isPublic'],
  },
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
            field: 'createdBy',
            operator: 'eq',
            value: item.id,
          },
        ]
      },
    },
  ],
}
