import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Servicio",
    plural: "Servicios",
  },
  admin: {
    useAsTitle: "title",
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
      label: "Servicio",
      type: "relationship",
      relationTo: "services",
      required: true,
      hasMany:true
    },
    {
      name: "image",
      type: "relationship",
      label: "Imagen de portada",
      relationTo: "projectMedia",
      hasMany: false,
      required: true,
    },
    {
      name: "youtubeLink",
      label: "Link de Youtube",
      type: "text",
      required: true,
    },
    {
      name: "company",
      label: "Empresa",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Descripción",
      type: "text",
      required: true,
    },
  ],
};

export default Projects;
