const getBaseItemStyle = isActive => ({
  height: 70,
  lineHeight: "68px",
  fontSize: "16px",
  textAlign: "center",
  outline: "none",
  border: "1px solid",
  cursor: "move",
  display: "inline-block",
  background: isActive ? "#27aceb" : "#bfe7f9",
  color: isActive ? "#fff" : "#1494d0",
  borderColor: isActive ? "#27aceb" : "#fff"
});

export default getBaseItemStyle;
