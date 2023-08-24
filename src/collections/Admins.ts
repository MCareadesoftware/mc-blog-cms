import { CollectionConfig } from 'payload/types';

const Admins: CollectionConfig = {
  slug: 'administradores',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'nombre',
      type: 'text',
    },
    // {
    //   name: "profile",
    //   type: "relationship",
    //   relationTo: "media",
    //   access: {
    //     // Only admins can create or update a value for this field
    //     read: () => true,
    //     update: () => true,
    //     create: () => true,
    //   },
    // },
    {
      name: "adminRoles",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: "admin",
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: () => true,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],

  
};

export default Admins;