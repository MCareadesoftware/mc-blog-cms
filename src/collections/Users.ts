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
      saveToJWT: true,
      access: {
        create: () => true,
        update: ()=>true,
        read:()=>true
      },
    },
  ],
};

export default Users;
