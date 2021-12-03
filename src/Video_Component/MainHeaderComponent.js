import React from "react";
import { Badge, Divider, Avatar, Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
class MainHeaderComponent extends React.Component {
    render() {
        const menu = (
            <Menu className="csi-dropdown-logout-menu-09334D">
                <div className="csi-logout-details-0835F">
                    <Avatar size={25} icon={<UserOutlined />} />
                    <span className="csi-user-title-0876UT">Ramesh Malviya</span>
                </div>
                <Menu.Item>
                    <a className="csi-flex-align-center-0852GD" target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="#a5a5a5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span>Setting</span>
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a className="csi-flex-align-center-0852GD" target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="#a5a5a5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg>
                        <span>Logout</span>
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="csi-header-component-w-100-top-0737Y">
                <span className="csi-logo-text-0716L">LOGO</span>
                <div className="csi-flex-box-align-center-0726FA">
                    <div>
                        <Badge status="success" />
                        <span>Active</span>
                    </div>
                    <Divider type="vertical" />
                    <div>
                        <Button type="primary" size="small">Dropdown</Button>
                    </div>
                    <Divider type="vertical" />
                    <div>
                        <Dropdown overlay={menu} trigger="click" placement="bottomRight">
                            <Avatar size={25} className="csi-logout-avatar-button-0845PB" icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeaderComponent;