import React from 'react';
import { SignIn } from '../components/SignIn/SignIn';
import { ScrollToTop } from '../components/helpers/ScrollToTop';

export const SignInPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SignIn />
        </div>
    )
}