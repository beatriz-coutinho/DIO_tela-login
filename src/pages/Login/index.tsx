import { useForm } from "react-hook-form";
import Input from "../../components/Input";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IformLogin } from "./types";
import Button from "../../components/Button";

const schema = yup.object({
  email: yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Campo obrigatório')
}).required();

const Login = () => {
  
  const {
    control,
    formState: { errors, isValid }
  } = useForm<IformLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange'
  });

  console.log(isValid);

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input 
            name="email"
            type="email" 
            placeholder="Email" 
            control={control} 
            errorMessage={errors?.email?.message} 
          />
          <Spacing />
          <Input 
            name="password" 
            type="password"
            placeholder="Senha" 
            control={control}
            errorMessage={errors?.password?.message} 
          />
          <Spacing />
          <Button title="Cadastrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
