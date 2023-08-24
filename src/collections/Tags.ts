import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:()=>true,
    delete:()=>true,
    update:()=>true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label:"Título (Ejemplo: Creación de contenido)",
      required:true
    },
    {
      name: 'route',
      label:"Ruta (Ejemplo: creacion-de-contenido)",
      type: 'text',
      required:true
    },
    {
      name:'categoryRelated',
      type:"relationship",
      label:"Categoría",
      relationTo:"categories",
      required:true
    }


  ],
  timestamps: false,
}

export default Tags;