import React from 'react';
import { Result } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const App = () => {
    return (
        <Result icon={
            <Loading3QuartersOutlined spin style={{ position: 'fixed', top: '47%', left: '47%', fontSize: '50px', color: '#BA2133' }} />
        } />
    );
}

export default App;