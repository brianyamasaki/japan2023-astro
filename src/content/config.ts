import { z, defineCollection } from 'astro:content';

const destCollection = defineCollection({
  schema: z.object({
    destination: z.string(),
    order: z.number(),
    date: z.string(),
    title: z.string(),
    nextTitle: z.string(),
    transport: z.string().optional()
  })
})

export const collections = {
  'destinations': destCollection
};