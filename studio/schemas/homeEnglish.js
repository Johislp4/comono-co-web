export default {
    name: "homeEnglish",
    title: "Home / English",
    type: "document",
    fields: [
      {
        name: "name",
        title: "name",
        type: "string",
      },
      {
        name: "banner",
        title: "Banner Message",
        type: "text",
        description: "Write you message",
      },
      {
        name: "service",
        title: "Service Home",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "service",
                title: "Services",
                type: "reference",
                to: [{ type: "serviceEnglish" }],
              },
            ],
            preview:{
              select:{
                title: "service.name",
                name: "service.name",
                media: "service.image",
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
          },
        ],
      },
      {
        name:'bio',
        title:'Bio English',
        type:'object',
        fieldsets: [{name: 'bio', title: 'Bio Comono'}],
        fields:[
          {
            name:'bioTitle',
            title: "Bio Title",
            type: "string",
          },
          {
            name: "name",
            title: "Bio Comono",
            type: "array",
            of: [
              {
                title: "Bio Comono",
                type: "block",
              },
            ]
          },
          {
            name:'image',
            title: "Image",
            type: "image",
            options:{
              hotspot:true
            }
          }
        ]
      },
      {
        name:'project',
        title:'Projects English',
        type:'array',
        fieldsets: [{name: 'project', title: 'Comono Project'}],
        of:[
          {
            type:"object",
            fields:[
              {
                name:'project',
                title: 'Project',
                type: 'reference',
                to:[{type:'projectEnglish'}]
              }
            ],
            preview:{
              select:{
                title: "project.name",
                name: "project.name",
                media: "project.image",
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
        name: 'form',
        title:'Message Form',
        type: "object",
        fields: [
          {
            title: "Head",
            name: "head",
            type: "string",
            
          },
          {
            title: "Message",
            name: "message",
            type: "string",
          },
          
        ],
      },
    ],
    
  };
  