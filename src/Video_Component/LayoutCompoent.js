import React from "react";
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import FooterChatComponent from "./FooterChatComponent";
import { Drawer } from 'antd';
import ChatComponent from "./ChatComponent";
import MainHeaderComponent from './MainHeaderComponent';
import DashboardLayout from "./DashboardLayout";
import SideLogoutComponent from './SideLogoutComponent';

const { Header, Content, Sider } = Layout;

class LayoutCompoent extends React.Component {
    state = {
        collapsed: true,
        visible: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };



    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        const { collapsed } = this.state;

        return (
            <Layout className="csi-main-layout-video-call-0440" style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Classes
                        </Menu.Item>
                        <Menu.Item key="3" onClick={this.showDrawer} icon={<WechatOutlined />}>
                            Chat
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Drawer title="CHAT" placement="right"
                    className="csi-chat-drawer-box-interaction-0523"
                    width="380px"
                    footer={<FooterChatComponent />}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <ChatComponent />
                </Drawer>
                <Layout className="site-layout">
                    <Content>
                        <DashboardLayout />
                    </Content>
                    <Sider className="csi-right-side-bar-logout-component-4949" width="340">
                        <div className="custom-scrollbar-dashboard-0135">
                            <SideLogoutComponent />
                        </div>
                    </Sider>
                </Layout>
            </Layout>
        );
    }


}

export default LayoutCompoent;