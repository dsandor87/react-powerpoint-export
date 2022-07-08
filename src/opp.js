import React from "react";
import pptxgen from "pptxgenjs";

function opp() {
  let pptx = new pptxgen();
  let slide = pptx.addSlide();

  const ppt = slide.addText("React Demo!", {
    x: 1,
    y: 1,
    w: 10,
    fontSize: 36,
    fill: { color: "F1F1F1" },
    align: "center",
  });

  pptx.writeFile({ fileName: "react-demo.pptx" });
  return (
    <div>
      <ppt />
    </div>
  );
}

export default opp;
