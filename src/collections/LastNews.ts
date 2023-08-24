import { CollectionConfig } from 'payload/types';

const LastNews: CollectionConfig = {
  slug: 'lastNews',
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
      relationTo: 'posts'
    },
  
  ],
}

export default LastNews;