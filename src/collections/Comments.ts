import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Comments: CollectionConfig = {
  slug: "comentarios",
  admin: {
    useAsTitle: "usuario",
  },
  access: {
    create: ()=>true,
    delete: ()=>true,
    update: ()=>true,
    read: () => true, // Everyone can see comments by default (can still restrict based on user role
  },
  fields: [
    {
      name: "texto",
      type: "text",
    },
    {
      name: "usuario",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "post",
      type: "relationship",
      relationTo: "posts",
      maxDepth:0
    },

    {
      name:"liked",
      type:"relationship",
      relationTo:"users",
      hasMany:true,
      maxDepth:0
    },
    {
      name:"disliked",
      type:"relationship",
      relationTo:"users",
      hasMany:true,
      maxDepth:0
    },

  ],
};

export default Comments;
