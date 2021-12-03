import React from "react";
import { Input, Button } from 'antd';
import { SmileOutlined, PaperClipOutlined, SendOutlined } from '@ant-design/icons';

class FooterChatComponent extends React.Component {

    render() {
        return (
            <div className="csi-d-flex-gap-footer-chat-box-0328U">
                <Input
                    className="csi-send-box-chat-interaction-0331CI"
                    placeholder="Write here..."
                    prefix={<PaperClipOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                    suffix={
                        <SmileOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }
                />
                <Button type="primary" shape="circle" icon={<SendOutlined />} />
            </div>
        )
    }

}
export default FooterChatComponent;