import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const volunteerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Enter a valid phone").max(40),
  interest: z.string().trim().max(500).optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Please write a short message").max(5000),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});

export const donationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Enter a valid phone").max(40),
  amount: z.number().min(1, "Minimum GHS 1").max(1000000),
  frequency: z.enum(["once", "monthly"]),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export type VolunteerInput = z.infer<typeof volunteerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type DonationInput = z.infer<typeof donationSchema>;

export async function submitVolunteer(input: VolunteerInput) {
  const { error } = await supabase.from("volunteer_signups").insert({
    name: input.name,
    email: input.email,
    phone: input.phone,
    interest: input.interest || null,
  });
  if (error) throw new Error(error.message);
}

export async function submitContact(input: ContactInput) {
  const { error } = await supabase.from("contact_messages").insert(input);
  if (error) throw new Error(error.message);
}

export async function subscribeNewsletter(input: NewsletterInput) {
  const { error } = await supabase.from("newsletter_subscribers").insert(input);
  if (error && !/duplicate|unique/i.test(error.message)) throw new Error(error.message);
}