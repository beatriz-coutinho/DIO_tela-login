import { Control } from "react-hook-form"
import { IformLogin } from "../../pages/Login/types"

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IformLogin, any>
    name: "email" | "password";
    errorMessage?: string
}