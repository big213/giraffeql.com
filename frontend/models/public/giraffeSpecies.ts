import { GiraffeSpecies } from '../base'

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
}
