import { Input } from 'src/components/input';
import { useHistory } from 'react-router-dom';
import { object, string, SchemaOf } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'src/components/button';
import { AuthContainer, HeadingOne, HeadingTwo, InputWrapper, ButtonWrapper } from './auth.style';

export interface ILoginData {
    email: string;
    password: string;
}

const Login = () => {
    const history = useHistory();
    const schema: SchemaOf<ILoginData> = object().shape({
        email: string().required('email field is required').email('invalid email'),
        password: string().required('password field is required'),
    });

    const { register, errors, handleSubmit } = useForm<ILoginData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    return (
        <AuthContainer>
            <HeadingOne>Welcome back to Prospa</HeadingOne>
            <HeadingTwo>An account with powerful , personalised tools all in one place</HeadingTwo>
            <form
                onSubmit={handleSubmit(() => {
                    history.push('/open-account');
                })}
            >
                <InputWrapper>
                    <Input
                        error={errors.email?.message}
                        ref={register}
                        name="email"
                        label="Email address"
                        id="email"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        error={errors.password?.message}
                        ref={register}
                        name="password"
                        label="Enter password"
                        id="password"
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button fullWidth>Next</Button>
                </ButtonWrapper>
            </form>
        </AuthContainer>
    );
};

export default Login;
