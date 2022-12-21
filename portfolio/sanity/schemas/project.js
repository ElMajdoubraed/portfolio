export default {
    name : 'project',
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: 'string',
            title: 'Title',
            description: 'Title of the project'
        },
        {
            name: "image",
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "summary",
            type: 'string',
            title: 'Summary'
        },
        {
            name: "technologies",
            title:"Technologies",
            type: "array",
            of : [{ type: "reference", to: { type: "skill" }}]
        },
        {
            name: "linkToBuild",
            type: 'url',
            title: 'LinkToBuild'
        },
    ]
}