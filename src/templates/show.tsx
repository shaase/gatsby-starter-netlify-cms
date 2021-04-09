import React from "react";
import { graphql } from "gatsby";
import { Show, MarkdownData } from "../types";
import Layout from "../components/Layout";
import ShowComponent from "../components/Show";

// TEMPLATE
interface TemplateProps {
  show: Show;
}

export const ShowTemplate: React.FC<TemplateProps> = ({
  show,
}: TemplateProps) => {
  return <ShowComponent show={show} />;
};

// PAGE
interface PageProps {
  data: MarkdownData<Show>;
}

const ShowPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { title, links } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <ShowTemplate show={{ title, links }} />
    </Layout>
  );
};

export default ShowPage;

// GRAPHQL
export const pageQuery = graphql`
  query ShowTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        links
      }
    }
  }
`;
