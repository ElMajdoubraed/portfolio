export default {
    name : 'pageInfo',
    title: "PageInfo",
    type: "document",
    fields: [
        {
            name: "name",
            type: 'string',
            title: 'Name'
        },
        {
            name: "role",
            type: 'string',
            title: 'Role'
        },
        {
            name: "heroImage",
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "backgroundInformation",
            type: 'string',
            title: 'BackgroundInformation'
        },
        {
            name: "profilePic",
            type: 'image',
            title: 'ProfilePic',
            options: {
                hotspot: true,
            }
        },
        {
            name: "phoneNumber",
            type: 'string',
            title: 'PhoneNumber'
        },
        {
            name: "email",
            type: 'string',
            title: 'Email'
        },
        {
            name: "adress",
            type: 'string',
            title: 'Adress'
        },
        {
            name: "socials",
            title:"Socials",
            type: "array",
            of : [{ type: "reference", to: { type: "social" }}]
        }
    ]
}