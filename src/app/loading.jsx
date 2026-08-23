import "@/styles/loading.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <span className="main-loader">Load ng</span>
      <span className="progress-loader"></span>
    </div>
  );
};

export default Loader;
