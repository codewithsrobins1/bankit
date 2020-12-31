import React from 'react';
import { Navigation } from '../components/Dashboard/Navigation/Navigation';
import 'office-ui-fabric-react/dist/css/fabric.css';
import '../components/Dashboard/styles.css';
import { CardSection } from '../components/Dashboard/Cards/CardSection';
import { OperationsTable } from '../components/Dashboard/OperationsTable/OperationsTable';
import { WelcomeMessage } from '../components/Dashboard/WelcomeMessage/WelcomeMessage';

export const Dashboard = () => {
    return (
        <div className="root">
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm-1 ms-xl1">
                        <Navigation />
                    </div>
                    <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
                        <div className="ms-Grid-row">
                            <WelcomeMessage />
                        </div>
                        <div className="ms-Grid-row">
                            <CardSection />
                        </div>
                        <div className="ms-Grid-row">
                            <OperationsTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
