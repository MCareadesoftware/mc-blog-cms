import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Services: CollectionConfig = {
  slug: "services",
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
      name: "title",
      type: "select",
      options: [
        {
          label: "Combos desde cero",
          value: "combos-cero",
        },
        {
          label: "Combos vendedores",
          value: "combos-vendedores",
        },
        {
          label: "Combos marketeros",
          value: "combos-marketeros",
        },
        {
          label: "Meta",
          value: "meta-ads",
        },
        {
          label: "Google",
          value: "google-ads",
        },
        {
          label: "Tiktok",
          value: "tiktok-ads",
        },
        {
          label: "Social Media",
          value: "social-media",
        },
        {
          label: "Desarrollo web",
          value: "desarrollo-web",
        },
        {
          label: "Identidad corporativa",
          value: "identidad-corporativa",
        },
        {
          label: "SEO",
          value: "seo",
        },
        {
          label: "Chatbot",
          value: "chatbots",
        },
        {
          label: "Automatizaciones",
          value: "automatizaciones",
        },
       
        {
          label: "Sistemas ERP",
          value: "sistemas-erp",
        },
        {
          label: "Producción audiovisual",
          value: "produccion-audiovisual",
        },
        {
          label: "Consultoría y soporte",
          value: "consultoria-y-soporte",
        },
        {
          label: "Linkedin Ads",
          value: "linkedin",
        },
      ],
      required:true,
      unique:true
    },
    // {
    //   name: "post",
    //   type: "relationship",
    //   relationTo: "posts",
    //   maxDepth: 0,
    // },
  ],
};

export default Services;
