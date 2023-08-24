import { CollectionConfig } from "payload/types";


const Users: CollectionConfig = {
  slug: "users",
  labels:{
    singular: 'Usuario',
    plural:"Usuarios"
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    create: () => true,
    delete: ()=>true,
    update: ()=>true,
  },

  fields: [
    // Email added by default
    // Add more fields as needed


    {
      name:"email",
      type:"email",
      unique:true,
      required:true
    },

    {
      name: "name",
      type: "text",
    },
    {
      name: "linkPerfil",
      type: "text",
    },

    {
      name: "rolUsuario",
      type: "text",
      defaultValue: "usuario",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: ()=>true,
      },
    },
  ],
};

export default Users;
