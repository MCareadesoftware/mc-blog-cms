import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';

import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Media from './collections/Media';
import MediaOpenGraph from './collections/MediaOpenGraph';
import FeaturedPosts from './collections/FeaturedPosts';
import Admins from './collections/Admins';
import Authors from './collections/Autores';
import LastNews from './collections/LastNews';
import StickyPosts from './collections/StickyPosts';
import Users from './collections/Users';
import Comments from './collections/Comments';
import WinnerMonth from './collections/WinnerMonth';
import Sale from './collections/Sale';
import MainBanner from './collections/MainBanner';
import UltimasNoticias from './collections/UltimasNoticias';


export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: Admins.slug,
  },
  collections: [MainBanner,Categories, Posts,UltimasNoticias, Tags, Admins, Media,MediaOpenGraph,FeaturedPosts,StickyPosts,Authors,LastNews,Users,Comments,WinnerMonth,Sale],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
