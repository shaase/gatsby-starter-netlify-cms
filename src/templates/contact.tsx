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
  const contacts: Contacts = { ...frontmatter };

  return (
    <Layout>
      <ContactTemplate contacts={contacts} />
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
        corporateAffairs {
          name
          title
          email
          photo
        }
        accountManagers {
          name
          title
          photo
          region
        }
        media {
          name
          title
          email
          photo
        }
      }
    }
  }
`;
