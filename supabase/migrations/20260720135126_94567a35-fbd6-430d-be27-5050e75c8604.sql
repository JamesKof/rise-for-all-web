
-- Volunteer signups
CREATE TABLE public.volunteer_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  interest text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.volunteer_signups TO anon, authenticated;
GRANT ALL ON public.volunteer_signups TO service_role;
ALTER TABLE public.volunteer_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit volunteer signup" ON public.volunteer_signups FOR INSERT TO anon, authenticated WITH CHECK (
  length(name) BETWEEN 1 AND 120 AND length(email) BETWEEN 3 AND 255 AND length(phone) BETWEEN 5 AND 40
);

-- Contact messages
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact message" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (
  length(name) BETWEEN 1 AND 120 AND length(email) BETWEEN 3 AND 255 AND length(message) BETWEEN 1 AND 5000
);

-- Newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (
  length(email) BETWEEN 3 AND 255
);

-- Donations (records of donation intents / callbacks)
CREATE TABLE public.donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text,
  donor_email text,
  donor_phone text,
  amount_ghs numeric(12,2) NOT NULL,
  frequency text NOT NULL DEFAULT 'once',
  message text,
  hubtel_checkout_id text,
  hubtel_client_reference text UNIQUE,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.donations TO anon, authenticated;
GRANT ALL ON public.donations TO service_role;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can initiate a donation" ON public.donations FOR INSERT TO anon, authenticated WITH CHECK (
  amount_ghs >= 1 AND amount_ghs <= 1000000
);
