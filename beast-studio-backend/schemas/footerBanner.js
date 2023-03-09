export default {
    name: 'footerbanner',
    title: 'Footer Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Small Text',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Sub Title',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
    ],
}