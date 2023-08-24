import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories',
  labels:{
    singular:"Categoría",
    plural:"Categorías"
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required:true,
      label:"Título (ej: Google Ads)"
    },
    {
      name:"route",
      type:"text",
      label:"Ruta (ej: google-ads)",
      required:true
    }
  ],
}

export default Categories;