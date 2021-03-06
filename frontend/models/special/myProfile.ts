import { User } from '../base'

export const MyProfile = {
  ...User,
  title: 'My Profile',
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
  editOptions: {
    fields: ['avatar', 'name', 'isPublic'],
  },
  viewOptions: {
    fields: ['avatar', 'name', 'isPublic', 'currentUserFollowing'],
  },
  deleteOptions: undefined,
  expandTypes: [],
}
