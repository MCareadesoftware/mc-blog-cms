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
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { config } from './config/configEnvs';



const S3AdapterCredentials = {
  config: {
    endpoint: config.S3_ENDPOINT,
    credentials: {
      accessKeyId: config.S3_ACCESSKEYID,
      secretAccessKey: config.S3_SECRETACCESSKEY,
    },

    region: config.S3_REGION,
  },

  bucket: config.S3_BUCKET,
};
export default buildConfig({

  plugins: [
    // Pass the plugin to Payload
    cloudStorage({
      enabled: process.env.S3_ENABLED === "true",
      collections: {
        media: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        mediaOpenGraph: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        sales: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        monthWinner: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        mainBanner: {
          adapter: s3Adapter(S3AdapterCredentials),
        }
       
       
        
        
      },
    }),
  ],
  serverURL: config.SERVER_URL ,
  admin: {
    user: Admins.slug,
  },
  collections: [MainBanner,Categories, Posts,UltimasNoticias, Tags, Admins, Media,MediaOpenGraph,FeaturedPosts,StickyPosts,Authors,LastNews,Users,Comments,WinnerMonth,Sale],
  
  csrf:[
    "https://paginas-digitales-client-y5chm.ondigitalocean.app",
    "https://starfish-app-t8o9t.ondigitalocean.app",
    "https://starfish-app-t8o9t.ondigitalocean.app/admin",
    "http://localhost:3000",
    "http://localhost:4000/admin",
  ],
  
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
