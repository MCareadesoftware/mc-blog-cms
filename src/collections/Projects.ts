import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Proyecto",
    plural: "Proyectos",
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
      hasMany: true,
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
      name: "title",
      label: "Título",
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
      type: "richText",
      admin: {
        elements: ["blockquote", "h1", "h2", "h3", "ol", "ul", "upload"],
        leaves: ["bold", "italic", "underline"],
        hideGutter: true,
      },
      required: true,
    },
    {
      name: "links",
      labels: {
        plural: "Links",
        singular: "link",
      },
      type: "array",
      fields: [
        {
          name: "name",
          label: "Nombre",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
      required: false,
    },

    {
      name: "testimonials",
      label: "Testimonios",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
      required: false,
    },
  ],
};

export default Projects;
