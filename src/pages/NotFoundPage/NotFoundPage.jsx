import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.title}>Cannot found this page</h1>
      <Link to="/">To home page</Link>
    </div>
  );
};

export default NotFoundPage;
