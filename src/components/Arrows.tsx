import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/*
Inspired by https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-scroll-one-item-6hn8q
*/

function Arrow({
  orientation,
  disabled,
  onClick
}: {
  orientation: string;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    
  <IconButton onClick={onClick} disabled={disabled} style={{background: "black", color:"white", borderRadius: "10px"}}>
    {orientation === "left" ? <ChevronLeftIcon /> : orientation === "right" && <ChevronRightIcon />}
  </IconButton>)
}

export function LeftArrow() {
  const {
    getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, "smooth", "start");
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler} orientation="left" />
  );
}

export function RightArrow() {
  const {
    getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, "smooth", "end");
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler} orientation="right" />
  );
}
