import React from "react";
import { graphql } from "gatsby";
import { Show, ShowMarkdown, LinkDic } from "../types";
import Layout from "../components/Layout";
import ShowComponent from "../components/Show";

const linkDic: LinkDic = {};

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
  data: ShowMarkdown;
}

const ShowPage: React.FC<PageProps> = ({ data }: PageProps) => {
  const { allLinks, show } = data;

  allLinks.edges.forEach((node) => {
    const { title, label, url } = node.node.frontmatter;
    linkDic[title] = { title, label, url };
  });

  const { title, links: stringLinks } = show.frontmatter;
  const links = stringLinks.map((l) => linkDic[l]);

  return <Layout>{<ShowTemplate show={{ title, links }} />}</Layout>;
};

export default ShowPage;

// GRAPHQL
export const pageQuery = graphql`
  query ShowTemplate($slug: String! = "/asco") {
    allLinks: allMarkdownRemark(
      filter: { frontmatter: { url: { ne: null } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            label
            url
          }
        }
      }
    }
    show: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        links
      }
    }
  }
`;
