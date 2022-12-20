export default {
    name : 'pageInfo',
    title: "pageTitle",
    type: "document",
    fields: [
        {
            name: "field1",
            type: 'string',
            title: 'title1'
        },

        {
            name: "field2",
            type: 'string',
            title: 'title2'
        },
        {
            name: "field3",
            type: 'string',
            title: 'title3'
        },
        {
            name: "field4",
            type: 'string',
            title: 'title4'
        },
        {
            name: "field5image",
            type: 'image',
            title: 'title5',
            options: {
                hotspot: true,
            }
        }
    ]
}