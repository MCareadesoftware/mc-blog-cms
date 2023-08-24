import path from 'path';
import type { CollectionConfig } from 'payload/types';

const MediaOpenGraph: CollectionConfig = {
  slug: 'mediaOpenGraph',
  labels:{
    singular:"Media de Open Graph",
    plural:"Media de Open Graph",

  },
  upload: {
    staticDir: path.resolve(__dirname, '../../mediaOpenGraph'),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [],
};

export default MediaOpenGraph;
