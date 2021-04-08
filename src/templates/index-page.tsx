import React from "react";
import { graphql } from "gatsby";
import { Show, MarkdownData } from "../types";
import Layout from "../components/Layout";
import ShowComponent from "../components/Show";

// TEMPLATE
interface TemplateProps {
  show: Show;
}

export const IndexPageTemplate: React.FC<TemplateProps> = ({
  show,
}: TemplateProps) => {
  return <ShowComponent show={show} />;
};

// PAGE
interface PageProps {
  data: MarkdownData<Show>;
}

const IndexPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { title, links } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPageTemplate show={{ title, links }} />
    </Layout>
  );
};

export default IndexPage;

// GRAPHQL
export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        slug
        title
        links
      }
    }
  }
`;
