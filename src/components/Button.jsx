function Button({ className, handleClick, text, icon }) {
  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center justify-center gap-2`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
