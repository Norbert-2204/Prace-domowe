const Button = ({ onClick, children, style, className }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
export default Button;
