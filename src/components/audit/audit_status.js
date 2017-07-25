import React, {
	Component
} from 'react'
import {
	List,
	NavBar
} from 'antd-mobile'
import "./audit_status.less";
import photo_url from 'img/logo.png';
const Item = List.Item
export default class AuditStatus extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<NavBar mode="dark">
					<span style={{position:"absolute",left:"30px"}}>></span>
					认证状态

				</NavBar>
				<List>
					<Item wrap>		
						<img src={photo_url} alt="" className="photo_url"/>
						<p className="text_p">李盼盼</p>
						<p className="text_p"><span>审核中</span></p>
					</Item>
					<Item extra="李胖胖"><span style={{color:"#999",lineHeight:"2.5"}}>医生姓名</span></Item>
					<Item extra="15812580110"><span style={{color:"#999",lineHeight:"2.5"}}>医生电话</span></Item>
					<Item extra="审核中"><span style={{color:"#999",lineHeight:"2.5"}}>证件审核</span></Item>
				</List>
			</div>
		)
	}
}