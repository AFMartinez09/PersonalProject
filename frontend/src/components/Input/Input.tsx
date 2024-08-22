import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import Styles from '../../styles/Input.module.css'

type inputTypeData = "text" | "password" | "email" | "number";

type Props = {
  children: ReactNode;
  type: inputTypeData;
  name: string;
};

const Input = ({ children, type, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input 
        {...register(name)}
        type={type} 
        name={name}
      />
      {error?.message && <div className={Styles.mistake}>{error?.message}</div>}
    </>
  );
};

export default Input;
