import React from "react";

const CodeBox = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return <div className={`${props.className} code`} {...props} />;
};

export default CodeBox;
