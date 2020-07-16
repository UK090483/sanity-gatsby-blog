import { format } from 'date-fns'

export default {
    name: 'supporter',
    type: 'document',
    title: 'Supporter',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Logo',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
    ],
    orderings: [
        {
            name: 'publishingDateAsc',
            title: 'Publishing date new–>old',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'asc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'publishingDateDesc',
            title: 'Publishing date old->new',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'desc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            slug: 'slug',
            media: 'mainImage'
        },
        prepare({ title = 'No title', publishedAt, slug = {}, media }) {
            const dateSegment = format(publishedAt, 'YYYY/MM')
            const path = `/${dateSegment}/${slug.current}/`
            return {
                title,
                media,
                subtitle: publishedAt ? path : 'Missing publishing date'
            }
        }
    }
}
