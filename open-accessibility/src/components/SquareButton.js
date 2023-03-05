import { useLayoutEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

export default function SquareButton(props) {
  // const [enabled, setEnabled] = useState(false);
  const [height, setHeight] = useState("h-42");
  const [marginTop, setMarginTop] = useState("mt-1");
  const titleRef = useRef(null);

  // Check if the title text breaks into a new line
  useLayoutEffect(() => {
    if (titleRef.current) {
      if (titleRef.current.clientHeight <= 25) {
        // alert(titleRef.current.clientHeight)
        setHeight("h-42");
        setMarginTop("mt-4");
      }
    }
  }, [titleRef]);

  return (
    <motion.div
      className={
        "border-slate-800 border-4 rounded-xl " +
        height +
        " text-black font-medium p-2" +
        ((typeof props.enabledState === "boolean" &&
          props.enabledState === true) ||
        (typeof props.enabledState === "number" && props.enabledState !== -1)
          ? " bg-slate-700 text-white"
          : "")
      }
      onClick={() => {
        props.onClick();
      }}
      whileHover={{ scale: 1.1 }}
    >
      <p ref={titleRef}>{props.text}</p>
      {props.icon}
      <p
        class={
          "border-2 rounded-full " +
          marginTop +
          (typeof props.enabledState === "number" ? " visible" : " hidden")
        }
      >
        {typeof props.enabledState === "number"
          ? props.enabledState >= 0
            ? props.enabledState + 1
            : "off"
          : ""}
      </p>
    </motion.div>
  );
}
