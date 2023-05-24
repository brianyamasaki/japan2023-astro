import { z, defineCollection } from 'astro:content';

const destCollection = defineCollection({
  schema: z.object({
    destination: z.string(),
    order: z.number(),
    date: z.string(),
    title: z.string(),
    subtitle: z.string(),
    imgs: z.array(z.object({
      src: z.string(),
      comment: z.string()
    }))
  })
})

export const collections = {
  'destinations': destCollection
};