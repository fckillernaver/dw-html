import { useMemo, useState } from "react";
import { CodeBox } from "../../components";

interface Item {
  title: string;
  tag: (text: string) => React.ReactNode;
}
const TextsScreen = () => {
  const [title, setTitle] = useState("Type Here...");
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
        tag: (text) => (
          <mark style={{ backgroundColor: "royalblue", color: "var()" }}>
            {text}
          </mark>
        ),
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

  return (
    <div>
      <title>Tags of Texts</title>
      <CodeBox>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h4>{"<code />"}</h4>
        <code>this is a source </code>
        <hr />
        <h1>
          {"<h1 />"}: {title}
        </h1>
        <h2>
          {"<h2 />"}: {title}
        </h2>
        <h3>
          {"<h3 />"}: {title}
        </h3>
        <h4>
          {"<h4 />"}: {title}
        </h4>
        <h5>
          {"<h5 />"}: {title}
        </h5>
        <h6>
          {"<h6 />"}: {title}
        </h6>
        <hr />
        <p>
          {"<p />"}: {title} is Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Incidunt dicta ad temporibus quos magnam, iure
          maxime distinctio dolor officiis ullam. Aperiam cumque temporibus
          repellendus, distinctio quibusdam quam error voluptate maxime.
        </p>
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
      </CodeBox>
    </div>
  );
};

export default TextsScreen;
