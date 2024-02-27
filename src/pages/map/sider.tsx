import React from 'react';
import { Layout, Menu } from 'antd';
import { FolderOpenFilled } from '@ant-design/icons';
import styles from './map.module.css';

const items = [
    {
        key: 'subnav1',
        icon: React.createElement(FolderOpenFilled),
        label: '遥感影像',
        children: [
            {
                key: 'nav-rs-1',
                label: '遥感影像2020',
                path: '/nav-rs-1'
            },
            {
                key: 'nav-rs-2',
                label: '遥感影像2021',
                path: '/nav-rs-2'
            }
        ]
    },
    {
        key: 'subnav2',
        icon: React.createElement(FolderOpenFilled),
        label: '归一化植被系数',
        children: [
            {
                key: 'nav-ndvi-1',
                label: 'NDVI 2015',
                path: '/nav-ndvi-1'
            },
            {
                key: 'nav-ndvi-2',
                label: 'NDVI 2018',
                path: '/nav-ndvi-2'
            },
            {
                key: 'nav-ndvi-3',
                label: 'NDVI 2021',
                path: '/nav-ndvi-3'
            },
            {
                key: 'nav-ndvi-4',
                label: 'NDVI 2023',
                path: '/nav-ndvi-4'
            },
        ]
    },
    {
        key: 'subnav3',
        icon: React.createElement(FolderOpenFilled),
        label: '行政区划',
        path: '/nav-3',
        children: [
            {
                key: 'nav-boundary-1',
                label: '村界',
                path: '/nav-boundary-1'
            },
            {
                key: 'nav-boundary-2',
                label: '乡界',
                path: '/nav-boundary-2'
            },
            {
                key: 'nav-boundary-3',
                label: '县界',
                path: '/nav-boundary-3'
            },
            {
                key: 'nav-boundary-4',
                label: '市界',
                path: '/nav-boundary-4'
            },
            {
                key: 'nav-boundary-5',
                label: '省界',
                path: '/nav-boundary-5'
            }
        ]
    }
]

const Sider = () => {
    return (
        <Layout.Sider className={styles.sider}>
            <Menu
                mode='inline'
                defaultOpenKeys={['subnav1', 'subnav2', 'subnav3']}
                defaultSelectedKeys={['nav-rs-1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items}
            />
        </Layout.Sider>
    );
}

export default Sider;