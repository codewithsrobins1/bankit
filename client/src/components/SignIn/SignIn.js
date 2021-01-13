import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, 
    FormContent, 
    Icon, 
    FormWrap, 
    Form, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    Text 
} from './SignInElements'

export const SignIn = () => {
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`/dashboard`)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">BankIt</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type="email" required />
                                <FormLabel htmlFor="for">Password</FormLabel>
                                <FormInput type="password" required />
                                <FormButton type='submit' onClick={handleSubmit}>Continue</FormButton>
                                <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};