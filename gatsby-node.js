const _ = require("lodash");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              slug
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

    const { edges } = result.data.allMarkdownRemark;
    edges.forEach((edge) => {
      const { node } = edge;
      const { id, frontmatter } = node;
      const { slug, templateKey, links } = frontmatter;
      const template = `src/templates/${templateKey}.tsx`;
      const context = { id, slug };

      createPage({
        path: slug,
        links,
        component: path.resolve(template),
        context: { id, slug },
      });
    });
  });
};
