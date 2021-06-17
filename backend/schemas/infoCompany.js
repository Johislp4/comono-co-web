export default {
  name: "infoCompany",
  title: "Information of Company",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of company",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "country",
      type: "string",
      title: "Country",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "number",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: 'socialmedia',
      title:'Social Media',
      type: "object",
      fields: [
        {
          title: "Twitter",
          name: "twitter",
          type: "url",
          
        },
        {
          title: "Instagram",
          name: "instagram",
          type: "url",
        
        },
        {
          title: "Facebook",
          name: "facebook",
          type: "url",
          
        },
      ],
    },
  ]
};
