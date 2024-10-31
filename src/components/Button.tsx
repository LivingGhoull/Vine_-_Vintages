interface Props {
  children: string
}

function Button({children} : Props) {
  return (
    <button type="button" className="call_to_action">
      {children}
    </button>
  );
}

export default Button