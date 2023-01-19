import Contentful from "contentful"

export interface Post {
  title: string
  slug: string
  date: string
  cover: Contentful.Asset
  description: string
  body: string
}

export const contentfulClient = Contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
})
