import React from "react";
import { graphql } from "gatsby";
import { NotFound404, MarkdownData } from "../types";
import Layout from "../components/Layout";
import Component from "../components/NotFound404";

// TEMPLATE
interface TemplateProps {
  title: string;
  message: string;
}

export const NotFoundTemplate: React.FC<TemplateProps> = ({
  title,
  message,
}: TemplateProps) => {
  return <Component title={title} message={message} />;
};

// PAGE
interface PageProps {
  data: MarkdownData<NotFound404>;
}

const NotFoundPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { title, message } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <NotFoundTemplate title={title} message={message} />
    </Layout>
  );
};

export default NotFoundPage;

// GRAPHQL
export const pageQuery = graphql`
  query NotFoundTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "NotFound404" } }) {
      frontmatter {
        title
        message
      }
    }
  }
`;
