import { GiraffeSubspecies } from '../base'

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
}
