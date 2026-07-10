import {defineType, defineField} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Hero',
        subtitle: title || subtitle,
        media,
      }
    },
  },
})

export const statsContent = defineType({
  name: 'statsContent',
  title: 'Stats Content',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'contentTitle', title: 'Content Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Stats Content',
        subtitle: title || subtitle,
        media,
      }
    },
  },
})

export const iconCardGrid = defineType({
  name: 'iconCardGrid',
  title: 'Icon Card Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Default (Specialties)', value: 'default'},
          {title: 'Facilities (Image Grid)', value: 'facilities'},
          {title: 'Informative (Features Grid)', value: 'informative'},
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Icon Card Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const contentWithImage = defineType({
  name: 'contentWithImage',
  title: 'Content With Image',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {list: ['left', 'right']},
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'imagePosition',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Content With Image',
        subtitle: title ? `${title}${subtitle ? ` · image ${subtitle}` : ''}` : undefined,
        media,
      }
    },
  },
})

export const teamGrid = defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'designation', title: 'Designation', type: 'string'}),
            defineField({name: 'bio', title: 'Bio', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Team Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const aboutHero = defineType({
  name: 'aboutHero',
  title: 'About Hero',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'About Hero',
        subtitle: title || subtitle,
      }
    },
  },
})

export const aboutIntro = defineType({
  name: 'aboutIntro',
  title: 'About Intro',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'points', title: 'Points', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'highlights', title: 'Highlights', type: 'array', of: [{type: 'string'}]}),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'About Intro',
        subtitle: title || subtitle,
      }
    },
  },
})

export const highlightQuote = defineType({
  name: 'highlightQuote',
  title: 'Highlight Quote',
  type: 'object',
  fields: [
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
  ],
  preview: {
    select: {
      description: 'description',
    },
    prepare({description}) {
      return {
        title: 'Highlight Quote',
        subtitle: description,
      }
    },
  },
})

export const reasonsGrid = defineType({
  name: 'reasonsGrid',
  title: 'Reasons Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Reasons Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const valuesSection = defineType({
  name: 'valuesSection',
  title: 'Values Section',
  type: 'object',
  fields: [
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({subtitle, media}) {
      return {
        title: 'Values Section',
        subtitle,
        media,
      }
    },
  },
})

export const statsProgress = defineType({
  name: 'statsProgress',
  title: 'Stats Progress',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title: 'Stats Progress',
        subtitle: title || description,
      }
    },
  },
})

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      ctaLabel: 'primaryCta.label',
    },
    prepare({title, ctaLabel}) {
      return {
        title: 'CTA Section',
        subtitle: title || ctaLabel,
      }
    },
  },
})

export const facilityFeature = defineType({
  name: 'facilityFeature',
  title: 'Facility Feature',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {list: ['left', 'right']},
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: 'Facility Feature',
        subtitle: title || subtitle,
        media,
      }
    },
  },
})

export const patientCareServices = defineType({
  name: 'patientCareServices',
  title: 'Patient Care Services',
  type: 'object',
  fields: [
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({
      name: 'inpatient',
      title: 'Inpatient',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'outpatient',
      title: 'Outpatient',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({name: 'link', title: 'Link', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      inpatientTitle: 'inpatient.title',
      outpatientTitle: 'outpatient.title',
      media: 'inpatient.image',
    },
    prepare({inpatientTitle, outpatientTitle, media}) {
      return {
        title: 'Patient Care Services',
        subtitle: [inpatientTitle, outpatientTitle].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})

export const timelineSlider = defineType({
  name: 'timelineSlider',
  title: 'Timeline Slider',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'position', title: 'Position', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Timeline Slider',
        subtitle: title || subtitle,
      }
    },
  },
})

export const heroSlider = defineType({
  name: 'heroSlider',
  title: 'Hero Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      description: 'Add multiple slides to show in the Hero Slider',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            defineField({name: 'titlePrefix', title: 'Title Prefix', type: 'string'}),
            defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
            defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
            defineField({name: 'badge', title: 'Badge', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({
              name: 'primaryCta',
              title: 'Primary CTA',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'href', title: 'Href', type: 'string'}),
              ],
            }),
            defineField({
              name: 'secondaryCta',
              title: 'Secondary CTA',
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'href', title: 'Href', type: 'string'}),
              ],
            }),
          ],
          preview: {
            select: {
              titlePrefix: 'titlePrefix',
              titleHighlight: 'titleHighlight',
              media: 'image',
            },
            prepare({titlePrefix, titleHighlight, media}) {
              return {
                title: [titlePrefix, titleHighlight].filter(Boolean).join(' ') || 'Slide',
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'bottomItems',
      title: 'Bottom Items',
      type: 'array',
      description: 'Checkmark points displayed at the bottom of the slide text content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'icon', title: 'Icon (Lucide name, e.g. BadgeCheck, ShieldCheck)', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'savedKidsTag',
      title: 'Saved Kids Tag (Floating Card)',
      type: 'object',
      fields: [
        defineField({name: 'show', title: 'Show Tag', type: 'boolean', initialValue: true}),
        defineField({name: 'label', title: 'Label', type: 'string', initialValue: 'Saved this year'}),
        defineField({name: 'value', title: 'Value', type: 'string', initialValue: '7,500+ kids'}),
        defineField({name: 'avatars', title: 'Avatars Count Text', type: 'string', initialValue: '+9k'}),
      ],
    }),
    defineField({
      name: 'nicuTag',
      title: 'NICU Tag (Floating Card)',
      type: 'object',
      fields: [
        defineField({name: 'show', title: 'Show Tag', type: 'boolean', initialValue: true}),
        defineField({name: 'label', title: 'Label', type: 'string', initialValue: 'Level 3 NICU'}),
        defineField({name: 'value', title: 'Value', type: 'string', initialValue: 'Highest level of neonatal critical care'}),
        defineField({name: 'stars', title: 'Stars Count (0-5)', type: 'number', initialValue: 5}),
      ],
    }),
    // Legacy Single Slide fields for compatibility
    defineField({name: 'titlePrefix', title: 'Title Prefix (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({name: 'subtitle', title: 'Subtitle (Legacy Single Slide)', type: 'string', description: 'Used only if slides array is empty'}),
    defineField({
      name: 'image',
      title: 'Image (Legacy Single Slide)',
      type: 'image',
      description: 'Used only if slides array is empty',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA (Legacy Single Slide)',
      type: 'object',
      description: 'Used only if slides array is empty',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA (Legacy Single Slide)',
      type: 'object',
      description: 'Used only if slides array is empty',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      slides: 'slides',
      titleHighlight: 'titleHighlight',
      media: 'image',
    },
    prepare({slides, titleHighlight, media}) {
      const slideCount = Array.isArray(slides) ? slides.length : 0;
      return {
        title: 'Hero Slider',
        subtitle: slideCount > 0 ? `${slideCount} Slides` : `1 Slide (Legacy: ${titleHighlight || 'Untitled'})`,
        media: slideCount > 0 ? slides[0]?.image : media,
      }
    },
  },
})

export const imageCardGrid = defineType({
  name: 'imageCardGrid',
  title: 'Image Card Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'variant', title: 'Variant', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Image Card Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const inquiryForm = defineType({
  name: 'inquiryForm',
  title: 'Inquiry Form',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'formId', title: 'Form ID (Legacy)', type: 'string', description: 'Used for legacy forms linked by ID'}),
    defineField({
      name: 'form',
      title: 'Select Form',
      type: 'reference',
      to: [{type: 'form'}],
      description: 'Select a form built with the Sanity Form Builder',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {list: ['detailed', 'simple']},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant',
    },
    prepare({title, variant}) {
      return {
        title: 'Inquiry Form',
        subtitle: title ? `${title}${variant ? ` · ${variant}` : ''}` : variant,
      }
    },
  },
})

export const mapEmbed = defineType({
  name: 'mapEmbed',
  title: 'Map Embed',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      fields: [
        defineField({name: 'address', title: 'Address', type: 'string'}),
        defineField({name: 'embedUrl', title: 'Embed URL', type: 'url'}),
        defineField({name: 'latitude', title: 'Latitude', type: 'string'}),
        defineField({name: 'longitude', title: 'Longitude', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      pageTitle: 'title',
    },
    prepare({pageTitle}) {
      return {
        title: 'Map Embed',
        subtitle: pageTitle,
      }
    },
  },
})

export const paragraphEditor = defineType({
  name: 'paragraphEditor',
  title: 'Paragraph Editor',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content}) {
      const firstBlock = Array.isArray(content) && content[0]
      const text =
        firstBlock?.children
          ?.filter((c: {_type: string}) => c._type === 'span')
          ?.map((c: {text: string}) => c.text)
          ?.join('') ?? ''
      return {
        title: 'Paragraph Editor',
        subtitle: text || undefined,
      }
    },
  },
})

export const logoGrid = defineType({
  name: 'logoGrid',
  title: 'Logo Grid',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Two Column', value: 'two-column'},
        ],
      },
      initialValue: 'default',
    }),
    defineField({name: 'description1', title: 'Description 1 (Legacy/Future)', type: 'string'}),
    defineField({name: 'description2', title: 'Description 2 (Legacy/Future)', type: 'string'}),
    defineField({name: 'ctaLabel', title: 'CTA Label (Legacy/Future)', type: 'string'}),
    defineField({name: 'ctaLink', title: 'CTA Link (Legacy/Future)', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({name: 'altText', title: 'Alt Text', type: 'string'}),
                defineField({name: 'caption', title: 'Caption', type: 'string'}),
              ],
            }),
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
            defineField({name: 'logoType', title: 'Logo Type', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: 'Logo Grid',
        subtitle: title || subtitle,
      }
    },
  },
})

export const announcementSection = defineType({
  name: 'announcementSection',
  title: 'Announcement Section',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Internal Title', type: 'string'}),
    defineField({name: 'sectionTitle', title: 'Section Title (Heading)', type: 'string', initialValue: 'News & Announcements'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Latest Updates'}),
    defineField({name: 'description', title: 'Description Text', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Announcement Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'announcementItem',
          title: 'Announcement Item',
          fields: [
            defineField({
              name: 'badgeText',
              title: 'Badge Text',
              type: 'string',
              initialValue: 'BIG ANNOUNCEMENT',
              description: 'Role/subtitle shown under the name (e.g., "Managing Director", "Announcement").',
            }),
            defineField({
              name: 'headline',
              title: 'Title / Headline',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'shortDescription',
              title: 'Description / Bio',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'points',
              title: 'Bullet Points / Services',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'image',
              title: 'Left Side Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({
              name: 'link',
              title: 'Card Click Link (e.g., /ongc-empanelment)',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              headline: 'headline',
              badgeText: 'badgeText',
              media: 'image',
            },
            prepare({headline, badgeText, media}) {
              return {
                title: headline || 'Untitled Announcement',
                subtitle: badgeText,
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({title, items}) {
      const itemCount = Array.isArray(items) ? items.length : 0
      return {
        title: 'Announcement Section',
        subtitle: `${title || 'Announcement'} (${itemCount} items)`,
      }
    },
  },
})

export const mapReview = defineType({
  name: 'mapReview',
  title: 'Google Map Review',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Internal Title', type: 'string'}),
    defineField({name: 'sectionTitle', title: 'Section Title (Heading)', type: 'string', initialValue: 'What Our Patients Say'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Reviews'}),
    defineField({name: 'description', title: 'Description Text', type: 'text', rows: 3}),
    defineField({
      name: 'showGoogleReviews',
      title: 'Show Google Reviews',
      type: 'boolean',
      initialValue: true,
      description: 'If enabled, Google reviews will be fetched and shown automatically in a carousel slider.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionTitle: 'sectionTitle',
    },
    prepare({title, sectionTitle}) {
      return {
        title: 'Google Map Review',
        subtitle: title || sectionTitle,
      }
    },
  },
})

export const clinicsGrid = defineType({
  name: 'clinicsGrid',
  title: 'Clinics Grid',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Clinic Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'icon', title: 'Icon (Path/SVG)', type: 'string'}),
            defineField({name: 'link', title: 'Link (URL)', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Clinics Grid', subtitle: title || badgeText}
    },
  },
})

export const facilitiesGrid = defineType({
  name: 'facilitiesGrid',
  title: 'Facilities Grid',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Facility Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'icon', title: 'Icon (Path/SVG)', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Facilities Grid', subtitle: title || badgeText}
    },
  },
})

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Testimonial Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'author', title: 'Author', type: 'string'}),
            defineField({name: 'rating', title: 'Rating (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5)}),
            defineField({name: 'text', title: 'Testimonial Text', type: 'text', rows: 3}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Testimonials', subtitle: title || badgeText}
    },
  },
})

export const contactAppointment = defineType({
  name: 'contactAppointment',
  title: 'Contact & Appointment',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'location',
      title: 'Location Info',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'address', title: 'Address', type: 'text', rows: 2}),
        defineField({name: 'mapUrl', title: 'Google Map URL', type: 'string'}),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'phone', title: 'Phone Number', type: 'string'}),
        defineField({name: 'email', title: 'Email Address', type: 'string'}),
      ],
    }),
    defineField({
      name: 'appointment',
      title: 'Appointment Info',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Contact & Appointment', subtitle: title || badgeText}
    },
  },
})

export const clinicHighlights = defineType({
  name: 'clinicHighlights',
  title: 'Clinic Highlights',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Highlight Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({
              name: 'modalContent',
              title: 'Modal Content',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Modal Title', type: 'string'}),
                defineField({name: 'body', title: 'Modal Body (HTML allowed)', type: 'text', rows: 5}),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Clinic Highlights', subtitle: title || badgeText}
    },
  },
})

export const clinicFacilities = defineType({
  name: 'clinicFacilities',
  title: 'Clinic Facilities',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Facility Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'icon', title: 'Icon (Path/SVG)', type: 'string'}),
            defineField({
              name: 'modalContent',
              title: 'Modal Content',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Modal Title', type: 'string'}),
                defineField({name: 'body', title: 'Modal Body (HTML allowed)', type: 'text', rows: 5}),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Clinic Facilities', subtitle: title || badgeText}
    },
  },
})

export const patientEducationArticles = defineType({
  name: 'patientEducationArticles',
  title: 'Patient Education Articles',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Article Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({
              name: 'modalContent',
              title: 'Modal Content',
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Modal Title', type: 'string'}),
                defineField({name: 'body', title: 'Modal Body (HTML allowed)', type: 'text', rows: 5}),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Patient Education Articles', subtitle: title || badgeText}
    },
  },
})

export const comingSoon = defineType({
  name: 'comingSoon',
  title: 'Coming Soon',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', titleHighlight: 'titleHighlight'},
    prepare({title, titleHighlight}) {
      return {title: 'Coming Soon', subtitle: [title, titleHighlight].filter(Boolean).join(' ')}
    },
  },
})

export const doctorProfile = defineType({
  name: 'doctorProfile',
  title: 'Doctor Profile',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Doctor Name', type: 'string'}),
    defineField({name: 'specialty', title: 'Specialty', type: 'string'}),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
    }),
    defineField({name: 'bio', title: 'Bio / Profile Summary', type: 'text', rows: 4}),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'Facebook URL', type: 'string'}),
        defineField({name: 'instagram', title: 'Instagram URL', type: 'string'}),
        defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'string'}),
      ],
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Recognitions',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'memberships',
      title: 'Professional Memberships',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'specialty', media: 'photo'},
    prepare({title, subtitle, media}) {
      return {title: title || 'Doctor Profile', subtitle, media}
    },
  },
})

export const healthAwareness = defineType({
  name: 'healthAwareness',
  title: 'Health Awareness',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'activities',
      title: 'Activities / Awareness Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({
              name: 'slides',
              title: 'Gallery Slides (Images)',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({name: 'videoBadgeText', title: 'Video Badge Text', type: 'string'}),
    defineField({name: 'videoTitle', title: 'Video Section Title', type: 'string'}),
    defineField({name: 'videoTitleHighlight', title: 'Video Section Title Highlight', type: 'string'}),
    defineField({
      name: 'videos',
      title: 'YouTube / Embed Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Video Title', type: 'string'}),
            defineField({name: 'embedUrl', title: 'Video Embed URL / ID', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Health Awareness', subtitle: title || badgeText}
    },
  },
})

export const conditionsList = defineType({
  name: 'conditionsList',
  title: 'Conditions List',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
    defineField({
      name: 'col1',
      title: 'Column 1 Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'col2',
      title: 'Column 2 Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'title', badgeText: 'badgeText'},
    prepare({title, badgeText}) {
      return {title: 'Conditions List', subtitle: title || badgeText}
    },
  },
})

const rawSectionTypes = [
  hero,
  statsContent,
  iconCardGrid,
  contentWithImage,
  teamGrid,
  aboutHero,
  aboutIntro,
  highlightQuote,
  reasonsGrid,
  valuesSection,
  statsProgress,
  ctaSection,
  facilityFeature,
  patientCareServices,
  timelineSlider,
  heroSlider,
  imageCardGrid,
  inquiryForm,
  mapEmbed,
  paragraphEditor,
  logoGrid,
  announcementSection,
  mapReview,
  clinicsGrid,
  facilitiesGrid,
  testimonials,
  contactAppointment,
  clinicHighlights,
  clinicFacilities,
  patientEducationArticles,
  comingSoon,
  doctorProfile,
  healthAwareness,
  conditionsList,
]

// Prepend the hideSection field to each section type dynamically for easy toggle in Sanity Studio
rawSectionTypes.forEach((section) => {
  if (section.fields) {
    section.fields.unshift(
      defineField({
        name: 'hideSection',
        title: 'Hide Section',
        type: 'boolean',
        initialValue: false,
      })
    )
  }
})

export const sectionTypes = rawSectionTypes
