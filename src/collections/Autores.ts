import { CollectionConfig } from 'payload/types';

const Authors: CollectionConfig = {
  slug: 'autores',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
      required:true
    },
    {
      name:"position",
      label:"Puesto",
      type:"text",
      required:true
    },  
    {
      name:"location",
      label:"Ubicación",
      type:"text",
      required:true,
    },
    {
      name:"linkedin",
      label:"URL Linkedin",
      type:"text",
      required:true
    },
    {
      name: "profile",
      type: "relationship",
      relationTo: "media",
      access: {
        // Only admins can create or update a value for this field
        read: () => true,
        update: () => true,
        create: () => true,
      },
      maxDepth:2,
      required:true
    },
  
  ],

  
};

export default Authors;