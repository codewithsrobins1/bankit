import React from 'react';
import { Navigation } from '../components/Dashboard/Navigation/Navigation';
import 'office-ui-fabric-react/dist/css/fabric.css';
import '../components/Dashboard/styles.css';

export const Dashboard = () => {
    return (
        <div className="root">
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm-1 ms-xl1">
                        <Navigation />
                    </div>
                </div>
            </div>
        </div>
    )
}
