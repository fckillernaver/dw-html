import { useCallback, useEffect, useRef, useState } from "react";

const VScreen = () => {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const hoverOnOriginal = useCallback(() => {
    if (ref.current) {
      const vid = ref.current!;
      if (vid) {
        vid.oncanplay;
      }
    }
  }, [ref]);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getScroll = () => setScroll(window.scrollY);
      getScroll();
      window.addEventListener("scroll", getScroll);
      return () => {
        window.removeEventListener("scroll", getScroll);
      };
    }
  }, []);
  const div = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const toFooter = useCallback(() => {
    const fullHeight = container.current?.clientHeight!;
    const footer = div.current?.clientHeight!;
    const top = fullHeight - footer;
    window.scrollTo({ behavior: "instant", top });
  }, [container, div]);

  const toTop = useCallback(
    () => window.scrollTo({ behavior: "smooth", top: 0 }),
    []
  );
  useEffect(() => {
    console.log(div.current?.clientHeight);
  }, []);

  useEffect(() => {
    const fullHeight = container.current?.clientHeight;
    const screenHeight = window.innerHeight;

    if (fullHeight) {
      const total = scroll + screenHeight;
      if (total >= fullHeight) {
        console.log("all read");
      }
    }
  }, [container, scroll, div]);
  return (
    <>
      <div ref={container}>
        <div style={{ height: "100vh" }}>
          div1
          <button onClick={toFooter}>Footer</button>
        </div>
        <div style={{ height: "100vh" }}>div1</div>
        <div style={{ height: "100vh" }}>div1</div>
        <div style={{ height: "100vh" }}>div1</div>
        <button onClick={toTop}>toTop</button>
        <div
          style={{ width: 300, margin: "auto", position: "relative" }}
          ref={div}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o_Ahgu1-zj4?si=drrjpNLMFbnOrlwW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy={"strict-origin-when-cross-origin"}
            allowFullScreen
            ref={ref}
            onMouseEnter={hoverOnOriginal}
          ></iframe>
          {/* <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o_Ahgu1-zj4?si=drrjpNLMFbnOrlwW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy={"strict-origin-when-cross-origin"}
          allowFullScreen
        ></iframe>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default VScreen;
