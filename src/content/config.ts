import { z, defineCollection } from 'astro:content';

const destCollection = defineCollection({
  schema: z.object({
    destination: z.string(),
    order: z.number(),
    date: z.date(),
    title: z.string(),
    subtitle: z.string()
  })
})

export const collections = {
  'dest': destCollection
};