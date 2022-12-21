export default {
    name : 'skill',
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            type: 'string',
            title: 'Title',
            description: 'Title of skill'
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
            name: "progress",
            type: 'number',
            title: 'Progress',
            description: "Progress of skill from 0 to 100%",
            validation: (Rule) => Rule.min(0).max(100), 
        }
    ]
}