import React from "react";
import { Helmet } from "react-helmet";
import {
  academicProfile,
  certifications,
  contactForm,
  contactPageData,
  greeting,
  seo,
  socialMediaLinks,
} from "../../portfolio.js";

const email = (contactForm.bookChatMailto || "")
  .replace(/^mailto:/, "")
  .split("?")[0];

/** schema.org Person. Built once at module load; it never varies per page. */
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: greeting.title,
  url: seo.og.url,
  image: academicProfile.headshotUrl,
  email: email || undefined,
  jobTitle: academicProfile.role,
  description: seo.description,
  knowsAbout: academicProfile.researchInterests,
  sameAs: socialMediaLinks
    .filter((m) => /^https?:/.test(m.link))
    .map((m) => m.link),
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: academicProfile.institution,
    url: academicProfile.institutionUrl,
  },
  worksFor: {
    "@type": "ResearchOrganization",
    name: `${academicProfile.lab}, ${academicProfile.institution}`,
    url: academicProfile.labUrl,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: contactPageData.addressSection.locality,
    addressRegion: contactPageData.addressSection.region,
    addressCountry: contactPageData.addressSection.country,
  },
  hasCredential: certifications.certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    description: c.subtitle,
    url: c.certificate_link || undefined,
  })),
};

export default function Seo({ title, description }) {
  const pageTitle = title ? `${title} | ${greeting.title}` : seo.title;
  const pageDesc = description || seo.description;

  return (
    <Helmet>
      <html lang="en" />
      <body className="signal-body" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={greeting.title} />
      <meta name="theme-color" content="#0a0c10" />
      <meta name="color-scheme" content="dark" />

      <meta property="og:site_name" content={greeting.title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:type" content={seo.og.type} />
      <meta property="og:url" content={seo.og.url} />
      <meta property="og:image" content={seo.og.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={seo.og.image} />

      <script type="application/ld+json">{JSON.stringify(personLd)}</script>
    </Helmet>
  );
}
