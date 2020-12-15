import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import { navigationStyles } from './styles';

const links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#01bf71',
                        }
                    }
                }
            },
            {
                name: 'Logout',
                url: '/',
                key: 'key2',
                iconProps: {
                    iconName: 'Settings',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#01bf71',
                        }
                    }
                }
            },
        ]
    }
]

export const Navigation = () => {
    initializeIcons();

    return (
        <Nav 
            groups={links}
            selectedKey='key1'
            styles={navigationStyles}
        />
    )
}

