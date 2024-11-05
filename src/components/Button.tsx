interface Props {
  children: string
}

function Hero_Button({children} : Props) {
  return (
    <button type="button" className="call_to_action-hero">
      {children}
    </button>
  );
}

function Button({children} : Props) {
  return (
    <button type="button" className="call_to_action">
      {children}
    </button>
  );
}

export {Hero_Button, Button}