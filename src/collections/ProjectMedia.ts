import path from 'path';
import type { CollectionConfig } from 'payload/types';

const ProjectMedia: CollectionConfig = {
  slug: 'projectMedia',
  labels: {
    singular: "Imágen de servicio",
    plural: "Imagenes de servicios",
  },
  access:{
    read:()=>true,
    create:()=>true,
    delete:()=>true,
    update:()=>true
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../project-media'),
    mimeTypes:["image/jpeg","image/png","image/gif","image/svg+xml","image/webp"]

  },
  fields: [],
};

export default ProjectMedia;
