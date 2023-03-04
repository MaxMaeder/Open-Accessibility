import React, { createRef } from "react";

import { sendMsg } from "../util/tabMessaging";

export default function TestingForm() {
  const actionRef = createRef();
  const valueRef = createRef();

  return (
    <form
      class={
        "border-slate-800 border-4 rounded-xl h-32 text-black font-medium p-2"
      }
    >
      <div class={"w-50"}>
        <label htmlFor="action">Action</label>
        <input id="action" class={"bg-gray-100"} type="text" ref={actionRef} />
        <label htmlFor="value">Value</label>
        <input id="value" class={"bg-gray-100"} type="text" ref={valueRef} />
        <button
          type="submit"
          onClick={() => {
            sendMsg({
              action: actionRef.current.value,
              value: parseInt(valueRef.current.value),
            });
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
