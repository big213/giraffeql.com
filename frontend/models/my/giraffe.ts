import { Giraffe } from '../base'

export const MyGiraffe = {
  ...Giraffe,
  title: `My ${Giraffe.pluralName}`,
  paginationOptions: {
    ...Giraffe.paginationOptions,
    downloadOptions: undefined,
  },
  enterOptions: {
    routeType: 'my',
  },
}
