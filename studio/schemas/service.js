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
      title: "Description Service Home",
      type: "text",
      description: "Write about service, the section appears on home section",
    },
    {
      name: "descriptionSection",
      title: "Description Service Section",
      type: "object",
      description: "Write about service, the section appears on Service Item (interna)",
      fieldsets: [{name: 'service', title: 'Service Page'}],
      fields:[
        {
          name:'serviceExtract',
          title:'Extract of service appears on page service',
          type: "array",
          of: [
            {
              type: "block",
            },
          ]
          
        },
        {
          name:'sectionScreen',
          title: 'Service Section',
          description:"Info service in every single section or screen",
          type: 'array',
          of:[
            {
              type:'object',
              fields:[
                {
                  name:'title',
                  type:'string',

                },
                {
                  name:'description',
                  type: 'blockContent'
                },
                {
                  name:'image',
                  type:'image'
                },
                {
                  name:'order',
                  type:'number',
                  description: 'left - 0  or  Right- 1'
                }
              ],
               preview:{
                select:{
                  title: "title",
                  name: "title",
                  media: "image",
                },
                prepare({
                  title, 
                  name,
                  media
                }){
                  return{
                    title,
                    name,
                    media
                  }
                }
              }


            }
          ]

        },
        {
          name: "serviceAdvantage",
          title: "Service Advantages",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image"
                },
                {
                  name: "order",
                  title: "order",
                  type: "number"
                }
              ],
              // preview:{
              //   select:{
              //     title: "service.name",
              //     name: "service.name",
              //     media: "service.image",
              //   },
              //   prepare({
              //     title, 
              //     name,
              //     media
              //   }){
              //     return{
              //       title,
              //       name,
              //       media
              //     }
              //   }
              // }
            },
          ],
         
        }

      ]
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
