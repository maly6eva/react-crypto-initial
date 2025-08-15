import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;


const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#7365cb',
};
export const AppSidder = () => {
    return (
        <Sider width="25%" style={siderStyle}>
            Sider
        </Sider>
    );
};

