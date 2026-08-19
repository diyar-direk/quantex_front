import "./style.css";
const MainTitle = ({ children, subTitle, ...props }) => {
  return (
    <div className="main-title center flex-direction" {...props}>
      <h2>{children}</h2>
      {subTitle && <h1> {subTitle} </h1>}
    </div>
  );
};

export default MainTitle;
