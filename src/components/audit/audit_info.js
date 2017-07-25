import React, {
    Component
} from 'react';
import {
    NavBar,
    InputItem,
    Button,
    List
} from 'antd-mobile';
import {
    title
} from 'conf/index.js';
import './audit.less';
export default class AuditPhone extends Component {
    render() {
        const Item = List.Item;
        return (
            <div className="audit_info_page">
            <NavBar className="base_color nav">{title.audit}</NavBar>
            <div className="main">
                <div className="title">
                    <p className="blue">认证后，可开通问诊等服务</p>
                    <p className="remark">请务必填写真实信息，你的信息我们将严格保密</p>
                </div>
                <div className="form">
                        <Item>
                            <InputItem placeholder="请输入真实姓名"/>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入您所在的医院(点击选择)"/>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入科室名称"/>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入科室电话"/>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入医师执业证书编号(15位数字)"/>
                        </Item>
                        <Item>
                            <div className="certificate">
                                <div className="update">
                                    <div className="line row"></div>
                                    <div className="line coll"></div>
                                </div>
                                <div className="content">
                                    <p className="bold">上传医师执业证书或手持工牌照</p>
                                    <span className="dashed">请确保图片内容清晰可见</span>
                                </div>
                            </div>
                        </Item>
                </div>
                <div className="example">
                    <div className="border">
                        <span className="example_span">示例：</span>
                        <div className="handle">
                            <div className="img"></div>
                            <p>手持工牌照</p>
                        </div>
                        <span>或</span>
                        <div className="photo">
                            <div className="img"></div>
                            <p>医师执业证书</p>
                        </div>
                    </div>
                    <p className="notice">我已同意<span>《e血液病服务条款》</span></p>
                </div>
                <Button type="primary" className="next base_color">下一步</Button>
            </div>
        </div>
        )
    }
}