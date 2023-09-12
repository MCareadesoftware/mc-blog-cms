import path from "path";
import type { CollectionConfig } from "payload/types";

const Sale: CollectionConfig = {
  slug: "sales",
  labels: {
    plural: "Ofertas del mes",
    singular: "Ofertas del mes",
  },

  upload: {
    staticDir: path.resolve(__dirname, "../../media/sale"),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: "center",
        name: "thumbnail",
      },
      {
        width: 900,
        height: 450,
        crop: "center",
        name: "sixteenByNineMedium",
      },
    ],
  },

  fields: [
    {
      name: "link",
      label: "Link de redireccionamiento",
      type: "text",
      required: true,
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
};

export default Sale;
