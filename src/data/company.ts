interface CompanyInfo {
  brandName: string;
  legalName: string;
  email: string;
  location: string;
  city: string;
  country: string;
  siteUrl: string;
  description: string;
}

export const company = {
  brandName: 'Natscale',
  legalName: 'Natscale LLP',
  email: 'support@natscalellp.com',
  location: 'Amritsar, India',
  city: 'Amritsar',
  country: 'India',
  siteUrl: 'https://natscalellp.com',
  description:
    'Natscale LLP is a software development consultancy based in Amritsar, India. We help businesses build and improve custom software.',
} as const satisfies CompanyInfo;

export function emailLink(subject?: string): string {
  const base = `mailto:${company.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
