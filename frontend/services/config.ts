export const siteName = process.env.siteName
export const siteDescription = process.env.siteDescription
export const siteImageUrl = process.env.siteImageUrl
export const siteContactEmail = process.env.siteContactEmail
export const siteDiscordLink = process.env.siteDiscordLink
export const siteGithubRepositoryUrl = process.env.siteGithubRepositoryUrl
export const logoHasLightVariant = process.env.logoHasLightVariant

export const firebaseConfig = {
  apiKey: 'AIzaSyAnt_96QDnYKKLaTsKNz-QVcdVM8kXNAKg',
  authDomain: 'giraffeql-com.firebaseapp.com',
  projectId: 'giraffeql-com',
  storageBucket: 'giraffeql-com.appspot.com',
  messagingSenderId: '1038048865456',
  appId: '1:1038048865456:web:36c8ce73824dee0d745f75',
}

export const routesMap = {
  a: [
    'apiKey',
    'file',
    'giraffe',
    'giraffeSpecies',
    'giraffeSubspecies',
    'user',
    'userGiraffeFollowLink',
    'userUserFollowLink',
  ],
  i: ['giraffe', 'giraffeSpecies', 'giraffeSubspecies', 'user'],
  my: ['apiKey', 'file', 'giraffe'],
  s: [],
}
