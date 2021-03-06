import { User } from '../base'
import { PublicGiraffe } from './giraffe'

export const PublicUser = {
  ...User,
  title: 'Public Users',
  paginationOptions: {
    ...(!!User.paginationOptions && User.paginationOptions),
    filterOptions: [],
    headerOptions: [
      {
        field: 'record',
        hideIfGrid: true,
      },
      {
        field: 'createdAt',
        width: '150px',
      },
    ],
    downloadOptions: undefined,
  },
  viewOptions: {
    fields: ['avatar', 'name', 'isPublic', 'currentUserFollowing'],
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
            field: 'createdBy',
            operator: 'eq',
            value: item.id,
          },
        ]
      },
    },
  ],
}
