import {defineType, defineField} from 'sanity'

export const teamGrid = defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  fields: [
    defineField({name: 'badgeText', title: 'Badge Text', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleHighlight', title: 'Title Highlight', type: 'string'}),
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
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'altText', title: 'Alt Text', type: 'string'})],
            }),
            defineField({name: 'bio', title: 'Bio', type: 'text', rows: 3}),
            defineField({name: 'ishighlight', title: 'Highlight Member', type: 'boolean'}),
            defineField({name: 'link', title: 'Link', type: 'string'}),
            defineField({name: 'facebook', title: 'Facebook URL', type: 'string'}),
            defineField({name: 'twitter', title: 'Twitter URL', type: 'string'}),
            defineField({name: 'instagram', title: 'Instagram URL', type: 'string'}),
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
      name: 'specialties',
      title: 'Specialties Grid',
      type: 'array',
      description: 'Quick links to specialties shown in the floating grid',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'icon', title: 'Icon (e.g. Shield, Brain, Activity, Heart)', type: 'string'}),
            defineField({name: 'link', title: 'Link (e.g. /oncology or sec-clinics-grid)', type: 'string'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Bottom Highlights',
      type: 'array',
      description: 'Checkmark highlights shown in the bottom bar',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Hero Slider',
        subtitle: title || 'Hero Slideshow',
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
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
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
      of: [
        {
          type: 'object',
          name: 'qualification',
          title: 'Qualification',
          fields: [
            defineField({name: 'degree', title: 'Degree', type: 'string'}),
            defineField({name: 'specialization', title: 'Specialization', type: 'string'}),
            defineField({name: 'university', title: 'University / College / Institution', type: 'string'}),
          ],
          preview: {
            select: {
              degree: 'degree',
              specialization: 'specialization',
              university: 'university',
            },
            prepare({degree, specialization, university}) {
              const subtitle = [specialization, university].filter(Boolean).join(' - ')
              return {
                title: degree || 'Untitled Qualification',
                subtitle: subtitle || undefined,
              }
            },
          },
        },
      ],
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

export const hero = defineType({
  name: 'hero',
  title: 'Inner Page Hero',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'breadcrumbText', title: 'Breadcrumb Text', type: 'string', description: 'e.g. HOME > CLINICS > MEDICAL ONCOLOGY'}),
    defineField({name: 'backgroundImage', title: 'Background Image Path', type: 'string', description: 'e.g. /assets/img/carou_lobby.jpg'}),
  ],
  preview: {
    select: {title: 'title', breadcrumbText: 'breadcrumbText'},
    prepare({title, breadcrumbText}) {
      return {title: 'Inner Page Hero', subtitle: title || breadcrumbText}
    },
  },
})

const rawSectionTypes = [
  hero,
  heroSlider,
  clinicsGrid,
  facilitiesGrid,
  teamGrid,
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
