import React from 'react';
import { Layout } from 'antd';
import {AppHeader} from "./componemt/layout/AppHeader.jsx";
import {AppSidder} from "./componemt/layout/AppSidder.jsx";
import {AppContent} from "./componemt/layout/AppContent.jsx";



export default function App() {
    return (
        <Layout>
         <AppHeader />
            <Layout>
               <AppSidder />
                <AppContent/>
            </Layout>
        </Layout>
    )

}
