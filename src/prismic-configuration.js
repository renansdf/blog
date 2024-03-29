import Prismic from '@prismicio/client'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://defreitasreactblog.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken = process.env.REACT_APP_PRISMIC_TOKEN

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') return `/post/${doc.uid}`
  return '/'
}

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken })
