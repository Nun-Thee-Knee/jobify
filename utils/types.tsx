import * as z from 'zod';

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = 'pending',
  Interview = 'interview',
  Declined = 'declined',
}

export enum JobMode {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Internship = 'internship',
}
// Enums in TypeScript are a special type that allows you to define a set of named constants. They can be numeric or string-based.

export const createAndEditJobSchema = z.object({
    position: z.string().min(2, {
        message: "Position must be atleast be of 2 characters"
    }),
    company: z.string().min(2, {
        message: "Company must be atleast be of 2 characters"
    }),
    location: z.string().min(2, {
        message: "Location must be atleast be of 2 characters"
    }),
    status: z.nativeEnum(JobStatus),
    mode: z.nativeEnum(JobMode),
})

export type createAndEditJobType = z.infer<typeof createAndEditJobSchema>;