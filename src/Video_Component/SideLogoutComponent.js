import React from 'react';
import { Typography, Progress } from 'antd';
import logout from '../img/logout.svg';
import { Avatar, Badge, Card } from 'antd';
import { AntDesignOutlined, PlusCircleTwoTone, BellOutlined, MailTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons';
const { Text, Title } = Typography;

class SideLogoutComponent extends React.Component {
    render() {
        return (
            <div style={{ padding: '16px', height: '100%' }}>
                <div className="csi-flex-justify-content-sb">
                    <Text strong>Logout</Text>
                    <img src={logout} style={{ width: '20px', cursor: 'pointer' }} />
                </div>
                <div className="csi-user-profile-upload-3030">
                    <Badge count={<PlusCircleTwoTone offset={[100, 100]} style={{ fontSize: '20px', color: '#f5222d' }} />}>
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            icon={<AntDesignOutlined />}
                        />
                    </Badge>
                    <div className="csi-loger-user-details">
                        <Title style={{ marginBottom: '0px' }} level={5}>Anna Morrison</Title>
                        <Text type="secondary">Student</Text>
                    </div>
                    <div className="csi-flex-gap-alignment-dis-4040">
                        <div className="ranging-control-interaction-details-6959">
                            <Text className="ranging-title-304F345" strong>B2</Text>
                            <div className="csi-gap-fd-5464f">
                                <Text strong>English</Text>
                                <Text style={{ fontSize: "12px" }} type="secondary">High Inttermediate</Text>
                            </div>
                            <Progress style={{ flex: '1' }} percent={60} size="small" />
                        </div>
                        <div className="ranging-control-interaction-details-6959">
                            <Text className="ranging-title-304F345" strong>B2</Text>
                            <div className="csi-gap-fd-5464f">
                                <Text strong>Spanish</Text>
                                <Text style={{ fontSize: "12px" }} type="secondary">Advantage</Text>
                            </div>
                            <Progress style={{ flex: '1' }} percent={60} size="small" />
                        </div>
                        <Card size="small" className="csi-reminder-card-interaction-1243" title="Reminders"
                            extra={<Badge offset={[-4, 3]} dot>
                                <BellOutlined style={{ fontSize: 16 }} />
                            </Badge>}>
                            <div className="csi-reminders-time-details-schedule-566G">
                                <div className="csi-card-remainerder-1-30304">
                                    <ExclamationCircleTwoTone twoToneColor="#ff606d" />
                                </div>
                                <div className="csi-flex-d-404FDS">
                                    <Text strong>Eng - Vocabulary test</Text>
                                    <Text type="secondary">24 Sep 2021, Friday</Text>
                                </div>
                            </div>
                            <div className="csi-reminders-time-details-schedule-566G">
                                <div className="csi-card-remainerder-2-30304">
                                    <MailTwoTone twoToneColor="#7592f5" />
                                </div>
                                <div className="csi-flex-d-404FDS">
                                    <Text strong>Eng - Send grammar homework</Text>
                                    <Text type="secondary">24 Sep 2021, Friday</Text>
                                </div>
                            </div>
                            <div className="csi-reminders-time-details-schedule-566G">
                                <div className="csi-card-remainerder-3-30304">
                                    <MailTwoTone twoToneColor="#ff606d" />
                                </div>
                                <div className="csi-flex-d-404FDS">
                                    <Text strong>Spanish - Send essey</Text>
                                    <Text type="secondary">24 Sep 2021, Friday</Text>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideLogoutComponent;