import React from 'react';
import './AppInfo.css';

const AppInfo = ({count, incr}) => {
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {incr}</h2>
        </div>
    );
};

export default AppInfo;