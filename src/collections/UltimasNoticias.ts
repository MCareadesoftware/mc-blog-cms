import { CollectionConfig } from 'payload/types';

const UltimasNoticias: CollectionConfig = {
  slug: 'ultimasNoticias',
  admin: {
    // defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create:()=>true,
    update:()=>true
  },
  fields: [
    {
      name: 'title',
      type: 'relationship',
      relationTo: 'posts',
      unique:true
    },
  
  ],
}

export default UltimasNoticias;