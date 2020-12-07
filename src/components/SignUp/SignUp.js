import React from 'react'
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
                                <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};