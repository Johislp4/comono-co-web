export default {
    name: "serviceEnglish",
    title: "Service / English",
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
        name:'completeService',
        title:'Detalle del servicio',
        type:'array',
        of:[{type:'block'}]
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
  