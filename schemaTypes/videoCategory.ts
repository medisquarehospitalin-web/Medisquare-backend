import { defineType, defineField } from "sanity";

export const videoCategory = defineType({
  name: "videoCategory",
  title: "Video Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "number",
      initialValue: 1,
    }),
  ],
});
