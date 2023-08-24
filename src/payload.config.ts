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



const S3AdapterCredentials = {
  config: {
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESSKEYID,
      secretAccessKey: process.env.S3_SECRETACCESSKEY,
    },

    region: process.env.S3_REGION,
  },

  bucket: process.env.S3_BUCKET,
};
export default buildConfig({

  plugins: [
    // Pass the plugin to Payload
    cloudStorage({
      enabled: process.env.S3_ENABLED === "true",
      collections: {
        empresaImagenDestacada: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        empresaImagenPortada: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotoBannerWhatsapp: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotoLogo: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotoLogoClienteEmpresas: {
          adapter: s3Adapter(S3AdapterCredentials),
        },

        fotosCategorias: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotosComentarios: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotosEmpresas: {
          adapter: s3Adapter(S3AdapterCredentials),
        },

        fotosProductos: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotosServicios: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        fotosUsuarios: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        BannersHorizontal: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        BannersVertical: {
          adapter: s3Adapter(S3AdapterCredentials),
        },
        
        
      },
    }),
  ],
  serverURL: `${process.env.CLIENT_URL}`,
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
