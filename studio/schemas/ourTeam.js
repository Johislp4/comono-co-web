export default {
    name: "ourTeam",
    title: "Our Team",
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
        name: "colorBackground",
        title: "Color Background ",
        type: "string",
      },
      {
        name: "colorFont",
        title: "Color Font",
        type: "string",
      },
      {
        name: "skill",
        title: "Description Job",
        type: "array",
        of:[{type: "block"}]
      },
      {
        name: "href",
        title: "URL Contact",
        type: "url",
        description: "Link of Contact",
      }
    ],
  };
  