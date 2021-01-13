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
} from './SignUpElements'

export const SignUp = () => {
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
                            <FormH1>Sign up for an account</FormH1>
                                <FormLabel htmlFor='fullName'>Full Name</FormLabel>
                                <FormInput type="text" required />
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <FormInput type="email" required />
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <FormInput type="password" required />
                                <FormLabel htmlFor="passwordConfirmation">Confirm Password</FormLabel>
                                <FormInput type="password" required />
                                <FormButton type='submit' onClick={handleSubmit}>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};