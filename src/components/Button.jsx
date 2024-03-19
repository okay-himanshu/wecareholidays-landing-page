function Button({ className, handleClick, text }) {
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
