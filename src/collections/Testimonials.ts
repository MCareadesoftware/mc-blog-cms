import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonio",
    plural: "Testimonios",
  },
  admin: {
    useAsTitle: "service",
  },
  access: {
    create: () => true,
    delete: () => true,
    update: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "service",
      label: "Servicio (Escoge uno o varios)",
      type: "relationship",
      relationTo: "services",
      required: true,
      hasMany: true,
    },
    {
      name: "image",
      type: "relationship",
      label: "Imagen de testimonio",
      relationTo: "testimonialMedia",
      hasMany: false,
      required: true,
    },
    {
      name: "description",
      label: "Descripción",
      type: "textarea",
      required: true,
    },
  ],
};

export default Testimonials;