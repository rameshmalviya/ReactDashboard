import React from 'react';
import { Typography } from 'antd';
import { Button, Card, Row, Col, List, Progress } from 'antd';
import { SearchOutlined, SwapRightOutlined } from '@ant-design/icons';
import WelcomeImg from '../img/myImages-removebg-preview.png';
import logout from '../img/logout.svg';
const { Text } = Typography;

class DashboardLayout extends React.Component {
    render() {
        return (
            <div className="csi-main-layout-fn-3030 ">
                <div className="csi-flex-box-justify-content-0439">
                    <span className="csi-bold-color-text-3030">Dashboard</span>
                    <div className="csi-flex-justify-space-between-20202">
                        <Text strong>20 Dec. 2021</Text>
                        <Button className="dashboard-button-search-393939" icon={<SearchOutlined />} />
                        <img src={logout} style={{ width: '20px', cursor: 'pointer' }} />
                    </div>
                </div>
                <Card className="csi-card-dashboard-bg-3030">
                    <div style={{ width: '100%' }} className="csi-flex-diraction-0403-33FF">
                        <Text className="csi-custom-text-red-3030">Welcome back Anna!</Text>
                        <span className="csi-text-color-welecome-303030ddd">You'vr learned 80% of your goal this week! keep it up and improve your results!</span>
                    </div>
                    <div className="csi-flex-justify-content-center-3030D">
                        <img src={WelcomeImg} />
                    </div>
                </Card>
                <Row className="csi-flex-box-responsive-diraction-4040DS" gutter={[10, 10]} style={{ marginTop: '10px' }}>
                    <Col className="csi-responsive-movie-col-12-330" span={12} >
                        <Card className="result-card-info-44040" style={{ borderRadius: '10px', border: 'none' }} title="Latest results" extra={<a href="#">More <SwapRightOutlined /></a>}>
                            <List>
                                <List.Item >
                                    <Row style={{ width: '100%' }}>
                                        <Col span={8} style={{ whiteSpace: 'nowrap' }}><b>Unit 5</b> - Technology</Col>
                                        <Col span={8} offset={8}>
                                            <Progress percent={25} strokeColor="#fe616f" />
                                        </Col>
                                    </Row>
                                </List.Item>
                                <List.Item>
                                    <Row style={{ width: '100%' }}>
                                        <Col span={8} style={{ whiteSpace: 'nowrap' }}><b>Unit 5</b> - Technology</Col>
                                        <Col span={8} offset={8}>
                                            <Progress percent={44} />
                                        </Col>
                                    </Row>
                                </List.Item>
                                <List.Item>
                                    <Row style={{ width: '100%' }}>
                                        <Col span={8} style={{ whiteSpace: 'nowrap' }}><b>Unit 5</b> - Technology</Col>
                                        <Col span={8} offset={8}>
                                            <Progress percent={70} status="active" />
                                        </Col>
                                    </Row>
                                </List.Item>
                                <List.Item>
                                    <Row style={{ width: '100%' }}>
                                        <Col span={8} style={{ whiteSpace: 'nowrap' }}><b>Unit 5</b> - Technology</Col>
                                        <Col span={8} offset={8}>
                                            <Progress percent={15} strokeColor="#fe616f" />
                                        </Col>
                                    </Row>
                                </List.Item>
                                <List.Item>
                                    <Row style={{ width: '100%' }}>
                                        <Col span={8} style={{ whiteSpace: 'nowrap' }}><b>Unit 5</b> - Technology</Col>
                                        <Col span={8} offset={8}>
                                            <Progress percent={76} />
                                        </Col>
                                    </Row>
                                </List.Item>
                            </List>
                        </Card>
                    </Col>
                    <Col className="csi-responsive-movie-col-12-330" span={12} >
                        <Card className="result-card-info-44040" style={{ borderRadius: '10px', border: 'none' }} title="Time spent on learing" extra={<a href="#">last week <SwapRightOutlined />
                        </a>}>
                            <List>
                                <List.Item>
                                    <Progress percent={60} success={{ percent: 30 }} />
                                </List.Item>
                                <List.Item>
                                    <Progress percent={40} success={{ percent: 10 }} />
                                </List.Item>
                                <List.Item>
                                    <Progress percent={30} success={{ percent: 34 }} />
                                </List.Item>
                                <List.Item>
                                    <Progress percent={45} success={{ percent: 12 }} />
                                </List.Item>
                                <List.Item>
                                    <Progress percent={10} success={{ percent: 34 }} />
                                </List.Item>
                            </List>
                        </Card>
                    </Col>
                </Row>
                <Card title="Your Courses" size="small" className="csi-transparent-bg-4040R" extra={<a href="#">More <SwapRightOutlined /></a>}>
                    <Row className="csi-flex-box-responsive-diraction-4040DS" gutter={[10, 10]}>
                        <Col className="csi-responsive-movie-col-12-330" span={8}>
                            <Card className="csi-card-1-0724">
                                <div className="step-1-for-card-3030">B2</div>
                                <div className="step-2-for-card-3030">
                                    <span>Business English</span>
                                    <span>Grammar</span>
                                </div>
                                <SwapRightOutlined className="csi-icon-position-fixed-34949" />
                            </Card>
                        </Col>
                        <Col className="csi-responsive-movie-col-12-330" span={8}>
                            <Card className="csi-card-2-0724">
                                <div className="step-1-for-card-3030">B2</div>
                                <div className="step-2-for-card-3030">
                                    <span>Business English</span>
                                    <span>Phrasal verbs</span>
                                </div>
                                <SwapRightOutlined className="csi-icon-position-fixed-34949" />
                            </Card>
                        </Col>
                        <Col className="csi-responsive-movie-col-12-330" span={8}>
                            <Card className="csi-card-3-0724">
                                <div className="step-1-for-card-3030">B2</div>
                                <div className="step-2-for-card-3030">
                                    <span>Business Spanish</span>
                                    <span>Vocabulary</span>
                                </div>
                                <SwapRightOutlined className="csi-icon-position-fixed-34949" />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default DashboardLayout;