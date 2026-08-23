import "@/styles/not-found.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href={"/"}>back home</Link>
    </div>
  );
};

export default NotFound;
