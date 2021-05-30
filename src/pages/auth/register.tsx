import { Input } from 'src/components/input';
import { object, string, SchemaOf } from 'yup';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'src/components/button';
import { AuthContainer, HeadingOne, HeadingTwo, InputWrapper, ButtonWrapper } from './auth.style';

export interface IRegisterData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
}

const Register = () => {
    const history = useHistory();
    const schema: SchemaOf<IRegisterData> = object().shape({
        email: string().required('email field is required').email('invalid email'),
        firstName: string().required('first name field is required'),
        lastName: string().required('last name field is required'),
        mobile: string().required('last name field is required'),
    });

    const { register, errors, handleSubmit } = useForm<IRegisterData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    return (
        <AuthContainer>
            <HeadingOne>Create your account</HeadingOne>
            <HeadingTwo>A short description about account types</HeadingTwo>
            <form
                onSubmit={handleSubmit(() => {
                    history.push('/login');
                })}
            >
                <InputWrapper>
                    <Input
                        error={errors.firstName?.message}
                        ref={register}
                        name="firstName"
                        label="First name"
                        id="firstName"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        error={errors.lastName?.message}
                        ref={register}
                        name="lastName"
                        label="Last name"
                        id="firstName"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        error={errors.mobile?.message}
                        ref={register}
                        name="mobile"
                        label="Mobile number"
                        id="mobile-number"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        error={errors.email?.message}
                        ref={register}
                        name="email"
                        label="Email address"
                        id="email"
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button fullWidth>Next</Button>
                </ButtonWrapper>
            </form>
        </AuthContainer>
    );
};

export default Register;
