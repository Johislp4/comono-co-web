export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Service title",
      type: "string",
    },
    {
      name: "description",
      title: "Description Service",
      type: "text",
      description: "Write about service",
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
        name:'href',
        title:'Link',
        type:'url'
    }
  ]
};
