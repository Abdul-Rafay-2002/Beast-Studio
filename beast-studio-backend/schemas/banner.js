export default{
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
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
            name: 'product',
            title: 'Product',
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
    ],
}