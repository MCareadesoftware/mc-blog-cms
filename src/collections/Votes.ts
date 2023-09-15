import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Votes: CollectionConfig = {
  slug: "votesBlog",
  labels:{
    singular:"Voto",
    plural:"Votos"
  },
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
      name: "user",
      type: "relationship",
      relationTo: "users",
      maxDepth:0,

    },
    {
      name: "post",
      type: "relationship",
      relationTo: "posts",
      maxDepth:0
    }
 
  ],
};

export default Votes;
