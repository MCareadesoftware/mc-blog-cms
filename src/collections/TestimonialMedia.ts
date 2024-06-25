import path from 'path';
import type { CollectionConfig } from 'payload/types';

const TestimonialMedia: CollectionConfig = {
  slug: 'testimonialMedia',
  labels: {
    singular: "Imágen de testimonio",
    plural: "Imagenes de testimonios",
  },
  access:{
    read:()=>true,
    create:()=>true,
    delete:()=>true,
    update:()=>true
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../testimonial-media'),
    mimeTypes:["image/jpeg","image/png","image/gif","image/svg+xml","image/webp"]
  },
  fields: [],
};

export default TestimonialMedia;
