import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      type: "tabs", // required
      tabs: [
        // required
        {
          label: "General", // required
          description: "Información general ",
          fields: [
            // required
            {
              name: 'author',
              type: 'relationship',
              relationTo: 'autores',
              hasMany:false,
              required:true
            },
            {
              name:"featuredImage",
              type:"relationship",
              label:"Imagen destacada",
              relationTo:"media",
              hasMany:false,
              required:true
            } ,  
            {
              name: 'title',
              type: 'text',
              label:"Titulo (Ej. Como realizar campañas en Google Ads)",
              required:true
            },
            {
              name:"route",
              type:"text",
              label:"Ruta  (Ej. como-realizar-campañas-en-google-ads)",
              required:true
            },
            {
              name: 'description',
              type: 'text',
              required:true
            },
            {
              name:"timeToComplete",
              type:"text",
              required:true
            },
            {
              name: 'publishedDate',
              type: 'date',
              required:true,
              
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              hasMany:false,
              required:true
            },
            {
              name: 'tags',
              type: 'relationship',
              relationTo: 'tags',
              hasMany: true,
              required:true
            },
            {
              name: 'content',
              type: 'richText',
              required:true
            },
            {
              name: 'status',
              type: 'select',
              options: [
                {
                  value: 'draft',
                  label: 'Draft',
                },
                {
                  value: 'published',
                  label: 'Published',
                },
              ],
              defaultValue: 'draft',
              admin: {
                position: 'sidebar',
              }
            }
          ],
        },
        {
          name: "Seo",
          label: " Información general para seo", // required
          fields: [
            // required
            {
              name: 'titleOpenGraph',
              type: 'text',
              required:true
            },
            {
              name: 'descriptionOpenGraph',
              type: 'text',
              required:true
            },         
            {
              name: 'imageOpenGraph',
              type: "relationship",
              relationTo: "media",
              maxDepth:2,
              access: {
                // Only admins can create or update a value for this field
                read: () => true,
                update: () => true,
                create: () => true,
              },
            }
          ],
        },
      ],
    },
  ],
 
}

export default Posts;