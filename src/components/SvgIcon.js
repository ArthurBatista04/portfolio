import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default function (props) {
  const { icon } = props;
  return (
    <SvgIcon viewBox={icon.viewbox} width={icon.width} height={icon.height}>
      <path d={icon.path} />
    </SvgIcon>
  );
}
