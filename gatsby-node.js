const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              links
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const shows = result.data.allMarkdownRemark.edges;
    shows.forEach((edge) => {
      const { node } = edge;
      const { id, frontmatter } = node;
      const slug = edge.node.fields.slug;
      const template = `src/templates/${String(frontmatter.templateKey)}.tsx`;

      createPage({
        path: edge.node.fields.slug,
        links: edge.node.frontmatter.links,
        component: path.resolve(template),
        // additional data can be passed via context
        context: { id, slug },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value });
  }
};
