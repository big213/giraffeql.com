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
  addOptions: undefined,
  editOptions: undefined,
  deleteOptions: undefined,
  importOptions: undefined,
  enterOptions: {
    routeType: 'i',
  },
}
