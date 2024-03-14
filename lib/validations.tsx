import { z } from "zod";

export const QuestionSchema = z.object({
 title: z.string().max(130).min(5),
 explanation: z.string().min(100),
 tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
