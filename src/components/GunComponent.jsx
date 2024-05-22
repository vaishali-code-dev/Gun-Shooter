import React from "react";
import Bullet from "./Bullet";
import { useState } from "react";
import { debounceFn, throttleFn } from "../utils";
import { useCallback } from "react";
import { useRef } from "react";

const Gun = ({ index }) => {
  const [clickCount, setclickCount] = useState(0);
  const bgClickCount = useRef(0);

  const handleClickCount = () => {
    if (index === 0) {
      setclickCount((prev) => prev + 1);
    } else {
      setclickCount(bgClickCount.current);
    }
  };

  const debounceFnc = useCallback(debounceFn(handleClickCount), []);
  const throttleFnc = useCallback(throttleFn(handleClickCount), []);

  const handleMultipleClickCount = () => {
    if (index === 0) {
      handleClickCount();
    } else if (index === 1) {
      bgClickCount.current += 1;
      debounceFnc();
    } else if (index === 2) {
      bgClickCount.current += 1;
      throttleFnc();
    }
  };
  return (
    <div className="flex">
      <div className="gun-wrapper" onClick={handleMultipleClickCount}>
        <div className="empty"></div>
      </div>
      {/* {Array(clickCount)
        .fill("")
        .map((item, index) => ( */}
      {/* <Bullet key={index} clickCount={clickCount} /> */}
      {/* ))} */}
      <Bullet clickCount={clickCount} />
    </div>
  );
};

export default Gun;
