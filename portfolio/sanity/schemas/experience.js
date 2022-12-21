export default {
    name : 'experience',
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            type: 'string',
            title: 'JobTitle'
        },
        {
            name: "companyImage",
            type: 'image',
            title: 'CompanyImage',
            options: {
                hotspot: true,
            }
        },
        {
            name: "company",
            type: 'string',
            title: 'Company'
        },
        {
            name: "dateStarted",
            type: 'date',
            title: 'DateStarted'
        },
        {
            name: "dateEnded",
            type: 'date',
            title: 'DateEnded'
        },
        {
            name: "isCurrentlyWorkingHere",
            type: 'boolean',
            title: 'IsCurrentlyWorkingHere'
        },
        {
            name: "technologies",
            title:"Technologies",
            type: "array",
            of : [{ type: "reference", to: { type: "skill" }}]
        },
        {
            name: "points",
            title:"Points",
            type: "array",
            of : [{ type: "string" }]
        }
    ]
}