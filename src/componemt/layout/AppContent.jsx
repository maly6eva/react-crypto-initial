import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;


const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#aa7eda',
};

export const AppContent = () => {
    return (
        <Content style={contentStyle}>Content</Content>
    );
};

