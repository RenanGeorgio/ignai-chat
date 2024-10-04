type OwnerTypes = { 
  lastItem: boolean 
  isDark: boolean 
};

function timelineItem(theme: any, ownerState: OwnerTypes) {
  const { borders } = theme;
  const { lastItem, isDark } = ownerState;

  const { borderWidth, borderColor } = borders;

  return {
    "&:after": {
      content: !lastItem && "''",
      position: "absolute",
      top: "2rem",
      left: "17px",
      height: "100%",
      opacity: isDark ? 0.1 : 1,
      borderRight: `${borderWidth[2]} solid ${borderColor}`,
    },
  };
}

export default timelineItem;