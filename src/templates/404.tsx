import React from "react";
import { graphql } from "gatsby";
import { NotFound404, MarkdownData } from "../types";
import Layout from "../components/Layout";
import Component from "../components/NotFound404";

// TEMPLATE
interface TemplateProps {
  title: string;
  description: string;
}

export const NotFoundTemplate: React.FC<TemplateProps> = ({
  title,
  description,
}: TemplateProps) => {
  return <Component title={title} description={description} />;
};

// PAGE
interface PageProps {
  data: MarkdownData<NotFound404>;
}

const NotFoundPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { title, description } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <NotFoundTemplate title={title} description={description} />
    </Layout>
  );
};

export default NotFoundPage;

// GRAPHQL
export const pageQuery = graphql`
  query NotFoundTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "404" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
