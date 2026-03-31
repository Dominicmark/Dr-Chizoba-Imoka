import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "Afrocentric education, Dr. Chizoba Imoka, African history, inclusive learning, education policy, decolonize education", 
  type = "website", 
  image = "https://lh3.googleusercontent.com/pw/AP1GczOpEtbrprTYv3ykDiNNcPisVd6bZ9-R63LbneZHrD1kZrVj33lnixeUascUSlK5KY7ZxVlY37WDsDhzJtcIlxH9NFiOSQRRbiu_HdV93afkrl5cO1iD9h6c3VUKVgABSeoF9SZ77WQaA5jP-5H2q0quPg=w1200-h630-s-no-gm?authuser=0", 
  url = "https://drchizobaimoka.com" 
}: SEOProps) {
  const siteTitle = `${title} | Dr. Chizoba Imoka`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dr. Chizoba Imoka" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
