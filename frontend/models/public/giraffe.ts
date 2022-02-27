import { Giraffe } from '../base'

export const PublicGiraffe = {
  ...Giraffe,
  paginationOptions: {
    ...(!!Giraffe.paginationOptions && Giraffe.paginationOptions),
    headerOptions: [
      {
        field: 'record',
      },
      {
        field: 'subspeciesRecord',
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
