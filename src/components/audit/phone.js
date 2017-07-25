import React, {Component} from 'react';
import {NavBar, InputItem, Button} from 'antd-mobile';
import {
    title
} from 'conf/index.js';
import './audit.less';
export default class AuditInfo extends Component{
    render(){
        return (
        <div className="audit_phone_page">
            <NavBar className="base_color nav">{title.audit}</NavBar>
            <div className="main">
                <div className="audit_phone_form">
                    <div className="audit_input">
                        <InputItem className="input_item" placeholder="请输入手机号" />
                        <a className="phone_icon"></a>
                    </div>
                    <div className="audit_input">
                        <InputItem className="input_item" placeholder="请输入验证码" />
                        <a className="verfiy_icon"></a>
                    <Button className="verfiy_btn" size="small" type="ghost"><span>获取验证码</span></Button>
                    </div>
                </div>
                <Button className="next base_color" type="primary" size="small">下一步</Button>
            </div>
        </div>
        )
    }
}
