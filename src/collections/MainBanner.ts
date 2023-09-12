import path from "path";
import type { CollectionConfig } from "payload/types";

const MainBanner: CollectionConfig = {
  slug: "mainBanner",
  labels: {
    plural: "Banner principal",
    singular: "Banners principales",
  },

  upload: {
    staticDir: path.resolve(__dirname, "../../media/mainBanner"),
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
      name: "alternativetext",
      label: "Texto Alternativo",
      type: "text",
      required: true,
    },
    {
      name:"link",
      label:"Link de redirección",
      type:"text",
      required:true
    }
  ],
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
};

export default MainBanner;
