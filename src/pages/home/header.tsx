import { Flex, Space, Typography, Tooltip, Button, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

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
                    <Button>
                        <Link to={`/`}>
                            区域概况
                        </Link>
                    </Button>
                </Tooltip>
                <Tooltip title="Map">
                    <Button>
                        <Link to={`map`}>
                            林草地图
                        </Link>
                    </Button>
                </Tooltip>
                <Tooltip title="Monitor">
                    <Button>
                        <Link to={`monitor`}>
                            森林资源
                        </Link>
                    </Button>
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