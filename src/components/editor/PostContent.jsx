import "./content.css";
const PostContent = ({ content }) => {
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostContent;
