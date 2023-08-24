import { CollectionConfig } from 'payload/types';

const StickyPosts: CollectionConfig = {
  slug: 'stickyPosts',
  
  admin: {
    // defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'relationship',
      relationTo: 'posts'
    },
  
  ],
}

export default StickyPosts;