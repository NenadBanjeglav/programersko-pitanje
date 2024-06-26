import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(3).max(130),
  explanation: z.string().min(50),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(50),
});

export const ProfileSchema = z.object({
  name: z.string().min(5).max(50),
  username: z.string().min(5).max(50),
  bio: z.string().optional(),
  portfolioWebsite: z.string().optional(),
  location: z.string().optional(),
});
