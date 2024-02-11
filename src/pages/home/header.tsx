import { Flex, Space, Typography, Tooltip, Button, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './home.module.css';

export default function Header() {
    return (
        <Flex
            justify='space-between'
            align='center'
        >
            <Space className={styles.margin}>
                <Button>Logo</Button>
                <Typography.Title level={3}>阳山县森林资源管理系统</Typography.Title>
            </Space>
            <Space className={styles.margin} wrap>
                <Tooltip title="Overview">
                    <Button>区域概况</Button>
                </Tooltip>
                <Tooltip title="Map">
                    <Button>林草地图</Button>
                </Tooltip>
                <Tooltip title="Monitor">
                    <Button>森林资源</Button>
                </Tooltip>
                <Badge dot>
                    <Avatar
                        shape='square'
                        icon={<UserOutlined />}
                    />
                </Badge>
            </Space>
        </Flex>
    )
}