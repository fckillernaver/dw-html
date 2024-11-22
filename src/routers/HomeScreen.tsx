import { Link } from "react-router-dom";

const As = ["html", "css", "javaScript"];
const HomeScreen = () => {
  return (
    <div className="mapWrapper">
      {As.map((a, i) => (
        <Link to={a} key={i} className="link">
          {a}
        </Link>
      ))}
    </div>
  );
};

export default HomeScreen;
