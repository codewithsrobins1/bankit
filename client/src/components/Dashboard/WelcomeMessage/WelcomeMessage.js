import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { container, header } from  './styles';

export const WelcomeMessage = () => {
    return (
        <div style={container}>
            <h1 style={header}>Welcome, Sean</h1>
        </div>
    )
};
