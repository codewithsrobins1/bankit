import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { operations } from './data';
import { columns } from './columns';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    }
})

export const OperationsTable = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList 
                    items={operations}
                    columns={columns}
                    selectionMode={0}    
                />
            </div>
        </div>
    )
}
