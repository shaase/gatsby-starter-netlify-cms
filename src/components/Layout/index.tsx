import React from "react";
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../SiteMetadata";
import "./index.css";

interface Props {
  children?: React.ReactNode;
}

const TemplateWrapper: React.FC<Props> = ({ children }: Props) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
