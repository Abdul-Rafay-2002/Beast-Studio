export default {
  name: 'product',
  title: 'T-shirts',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'T-Shirt Name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'shortdesc',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'longdesc',
      title: 'Long Description',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    }
  ],
}
