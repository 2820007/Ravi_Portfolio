import { Helmet } from "react-helmet-async";
import { personalData } from "../data/personalData";

export default function SEO({
  title = `${personalData.name} | ${personalData.role}`,
  description = personalData.tagline,
  path = "/",
}) {
  const siteUrl = "https://ravikumar-dev.vercel.app";
  const url = `${siteUrl}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.role,
    url: siteUrl,
    sameAs: Object.values(personalData.socials),
    email: personalData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalData.location,
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content={personalData.name} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={`${personalData.name} Portfolio`} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
