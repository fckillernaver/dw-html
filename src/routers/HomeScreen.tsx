import React, { useMemo } from "react";
import { CodeBox } from "../components";
import { Link } from "react-router-dom";

interface Item {
  title: string;
  tag: (text: string) => React.ReactNode;
}
const HomeScreen = () => {
  const items = useMemo<Item[]>(
    () => [
      { title: "<p/>", tag: (text) => <p>{text}</p> },
      { title: "<strong/> ", tag: (text) => <strong>{text}</strong> },
      { title: "<b/> ", tag: (text) => <b>{text}</b> },
      { title: "<em/> ", tag: (text) => <em>{text}</em> },
      {
        title: "<i/> ",
        tag: (text) => <i>{text}</i>,
      },
      {
        title: "<blockquote/> ",
        tag: (text) => <blockquote>{text}</blockquote>,
      },
      {
        title: "<small/> ",
        tag: (text) => <small>{text}</small>,
      },
      {
        title: "<abbr/> ",
        tag: (text) => <abbr>{text}</abbr>,
      },
      {
        title: "<del/> ",
        tag: (text) => <del>{text}</del>,
      },
      {
        title: "<ins/> ",
        tag: (text) => <ins>{text}</ins>,
      },
      {
        title: "<mark/> ",
        tag: (text) => <mark>{text}</mark>,
      },
      {
        title: "<small/> ",
        tag: (text) => <small>{text}</small>,
      },
      {
        title: "<sub/> ",
        tag: (text) => <sub>{text}</sub>,
      },
      {
        title: "<sup/> ",
        tag: (text) => <sup>{text}</sup>,
      },
    ],
    []
  );

  const anchors = ["1", "2", "3", "4", "5"];

  return (
    <div>
      <title>DW-Data-visualization</title>
      <h1>HomeScreen</h1>
      <CodeBox>
        <code>this is a source code</code>
        <hr />
        <h1>Title</h1>
        <h2>Title</h2>
        <h3>Title</h3>
        <h4>Title</h4>
        <h5>Title</h5>
        <h6>Title</h6>
        <hr />
        <p>Title</p>
        <hr />
        <div className="tag container">
          {items.map((item, i) => (
            <div className="tag item" key={i}>
              <h3>{item.title}</h3>

              {item.tag(
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolore illum enim corporis deserunt aliquam saepe eum! Laudantium fuga natus fugit dolores maiores. Optio tempore at ratione assumenda, vel reiciendis."
              )}
            </div>
          ))}
        </div>
        <figure>
          <figcaption>random img downloaded from google</figcaption>
          <img src={url} alt="random img" width={500} />
          <figcaption>random img downloaded from google</figcaption>
        </figure>
        {anchors.map((a, i) => (
          <div key={i} style={{ height: "100vh", width: "100%" }}>
            <a href={`#${a}`} id={a}>
              anchor id {a}
            </a>
            <div>
              {anchors.map(
                (aa, ii) => i !== ii && <a href={`#${aa}`}>to {aa}</a>
              )}
              <a href={`#${anchors[0]}`}>back to top</a>
            </div>
          </div>
        ))}
        {/* <table>
          <caption>random title</caption>
          <colgroup>
            <col />
            <col style={{ width: 200 }} />
            <col style={{ backgroundColor: "white" }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ border: "1px solid" }}>title1</th>
              <th>title2</th>
              <th>title3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
            <tr>
              <td>item1</td>
              <td>item2</td>
              <td>item3</td>
            </tr>
          </tbody>
        </table> */}
      </CodeBox>
      <Link to={"/html"}>HTML</Link>
    </div>
  );
};

export default HomeScreen;

const url =
  "data:image/jpeg;base64,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";
