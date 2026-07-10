// Generic page-section schema.
// Each section is identified by sectionType (string) and carries
// data fields inside sectionData matching the unified JSON structure.
import {defineType, defineField} from 'sanity'

export const pageSection = defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionData',
      title: 'Section Data',
      type: 'object',
      fields: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'altText', title: 'Alt Text', type: 'string'}),
            defineField({name: 'fileUrl', title: 'File URL', type: 'string'}),
          ],
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'link', title: 'Link', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'value', title: 'Value', type: 'string'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    select: {sectionType: 'sectionType', title: 'sectionData.title'},
    prepare({sectionType, title}) {
      return {
        title: sectionType || 'Section',
        subtitle: title,
      }
    },
  },
})
