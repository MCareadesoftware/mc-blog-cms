import { CollectionConfig } from "payload/types";

const Suscriptions: CollectionConfig = {
  slug: "suscripciones",
  admin: {
    // defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "userType",
      label: "Tipo de usuario",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Teléfono",
      type: "text",
      required: true,
    },
  ],
};

export default Suscriptions;
