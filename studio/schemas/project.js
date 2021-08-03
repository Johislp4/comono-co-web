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
        type: "array",
        description: "Write about Project",
        of:[{type:'block'}]
      },
      {
        name: 'tagsTechnologies',
        type: 'array',
        of: [
            {
                type: 'string'
            },
        ],
        options: {
            layout: 'tags'
        }
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
  