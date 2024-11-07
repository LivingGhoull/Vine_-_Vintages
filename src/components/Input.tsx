
interface Props {
  children: string;
  placeholder: string;


}

function Input({children, placeholder}: Props) {
  return (
    <div className="input">
      <label htmlFor="">{children}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input