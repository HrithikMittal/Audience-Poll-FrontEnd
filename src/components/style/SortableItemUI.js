import React from "react";
import getBaseItemStyle from "./getBaseItemStyle";

const SortableItemUI = props => {
  const {
    isDisabled,
    isActive,
    style,
    attributes,
    dataItem,
    forwardRef
  } = props;
  const classNames = ["col-xs-12 col-sm-12"];

  if (isDisabled) {
    classNames.push("k-state-disabled");
  }

  return (
    <div
      ref={forwardRef}
      {...attributes}
      style={{
        ...getBaseItemStyle(isActive),
        ...style
      }}
      className={classNames.join(" ")}
    >
      {dataItem.name}
    </div>
  );
};

export default SortableItemUI;
