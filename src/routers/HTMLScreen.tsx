import { Link, Outlet } from "react-router-dom";

const HTMLScreen = () => {
  const tags = ["texts"];
  return (
    <>
      <div>
        {tags.map((tag, i) => (
          <Link key={i} to={`${tag}`}>
            {`< ${tag} />`}
          </Link>
        ))}
      </div>
      {/* <div id="tag"> */}
      <Outlet />
      {/* </div> */}
    </>
  );
};

export default HTMLScreen;
