import React from "react";
import { Link, Outlet } from "react-router-dom";

const HTMLScreen = () => {
  const tags = ["div", "header", "footer"];
  return (
    <>
      <div id="tag">
        <Outlet />
      </div>
      <div style={{}}>
        {tags.map((tag, i) => (
          <Link key={i} to={`/html/${tag}`}>
            {`< ${tag} />`}
          </Link>
        ))}
      </div>
    </>
  );
};

export default HTMLScreen;
