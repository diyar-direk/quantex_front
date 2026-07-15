import "./style.css";
const MainTitle = ({ children, subTitle }) => {
  return (
    <div className="main-title center flex-direction">
      <h2>{children}</h2>
      {subTitle && <h1> {subTitle} </h1>}
    </div>
  );
};

export default MainTitle;
