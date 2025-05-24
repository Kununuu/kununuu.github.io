import { z, defineCollection } from 'astro:content';

const abenteuerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const empfehlungenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    duration: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  abenteuer: abenteuerCollection,
  empfehlungen: empfehlungenCollection,
};
