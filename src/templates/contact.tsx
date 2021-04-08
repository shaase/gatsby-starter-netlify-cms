import React from "react";
import { graphql } from "gatsby";
import { Contacts, MarkdownData } from "../types";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

// TEMPLATE
interface TemplateProps {
  contacts: Contacts;
}

export const ContactTemplate: React.FC<TemplateProps> = ({
  contacts,
}: TemplateProps) => {
  return <Contact contacts={contacts} />;
};

// PAGE
interface PageProps {
  data: MarkdownData<Contacts>;
}

const ContactPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactTemplate contacts={frontmatter} />
    </Layout>
  );
};

export default ContactPage;

// GRAPHQL
export const pageQuery = graphql`
  query ContactTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        title
        contacts
      }
    }
  }
`;
