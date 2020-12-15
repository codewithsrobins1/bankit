import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { container, icon, styles } from  './styles';
import { cardInfo } from './data'

export const CardSection = () => {
    initializeIcons();

    return (
        <div style={container}>
            {cardInfo.map((card) => (
                <div className="s-Grid-col ms-sm3 ms-xl3">
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                <Text styles={styles.header}>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.amount}>{card.amount}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{card.percentage}</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            ))}
        </div>
    )
};
