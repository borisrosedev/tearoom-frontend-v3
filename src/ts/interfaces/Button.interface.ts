export default interface ButtonInterface {
  id: string;
  type?: "button" | "submit" | "reset";
  placeholder?: string;
  classNames?: string;
}
