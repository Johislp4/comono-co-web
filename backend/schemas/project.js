export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Project title",
        type: "string",
      },
      {
        name: "description",
        title: "Description Project",
        type: "text",
        description: "Write about Project",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "href",
        title: "Link",
        type: "url",
        description: "Link of the project",
      }
    ],
  };
  