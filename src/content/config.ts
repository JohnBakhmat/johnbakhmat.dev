import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		readingTime: z.string(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog };
