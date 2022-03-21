import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  description?: string;
  creator?: string;
  lang?: string;
  title?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, title, image, url }) => {
  const metaDescription = description || "";
  const currentTitle = title || "Reform Starter";
  const currentImage = image || "";
  const currentURL = url || "";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={currentTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: currentTitle,
        },
        {
          property: "og:image",
          content: currentImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: currentURL,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: currentImage,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: currentTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, minimal-ui",
        },
      ]}
    />
  );
};

export default SEO;
