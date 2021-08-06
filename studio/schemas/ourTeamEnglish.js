export default {
    name: "ourTeamEnglish",
    title: "Our Team / English",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "profile",
        title: "Description Profile",
        type: "string",
        description: "Write about your profile in the company",
      },
      {
        name: "image",
        title: "Personal Image",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "backgroundColor",
        title: "Background Color",
        type: "string",
      },
      {
        name: "fontColor",
        title: "Font Color ",
        type: "string",
      },
      {
        name: "skill",
        title: "Description Job",
        type: "array",
        of:[{type: "block"}]
      },
      {
        name: "order",
        title: "Order",
        type: "number"
      },
      {
        name: "href",
        title: "URL Contact",
        type: "url",
        description: "Link of Contact",
      }
    ],
  };
  