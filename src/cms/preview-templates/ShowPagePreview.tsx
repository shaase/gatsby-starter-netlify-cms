import React from "react";
import ShowTemplate from "../../templates/show";

const ShowPagePreview = ({ entry, widgetFor }) => (
  <ShowTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

// AboutPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// };

export default ShowPagePreview;
