import { Giraffe } from '../base'

export const MyGiraffes = {
  ...Giraffe,
  routeName: 'i-view',
  paginationOptions: {
    ...Giraffe.paginationOptions,
    downloadOptions: undefined,
  },
}
