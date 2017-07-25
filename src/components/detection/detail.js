import React, {
	Component
} from 'react';
import {
	List,
	NavBar
} from 'antd-mobile';
import './detail.less';
import hospital_logo from 'img/logo.png';
const Item = List.Item
export default class ItemDtetail extends Component {
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
					检测详情

				</NavBar>
				<div className="item_header">
					<img src={hospital_logo} alt="" style={{float:"left",marginLeft:"30px",marginTop:"30px"}}/>
					<div style={{marginLeft:"240px"}}>
						<span>北京协和医院</span>
						<span>骨髓细胞学会诊</span>
					</div>
				</div>
				<List>

					<Item wrap><strong className="item_strong">临床意义：</strong><p className="item_p">1.师傅舒服撒地方的是对方身份沙发上地方；2.师傅师傅师傅地方撒发顺丰我国的sdffasfs</p></Item>
					<Item wrap><strong className="item_strong">报告时间：</strong><p className="item_p">2-4个工作日</p></Item>
					<Item wrap><strong className="item_strong">检测价格：</strong><p className="item_p"><span style={{color: "red"}}>￥154.54</span></p></Item>
					<Item wrap><strong className="item_strong">标本要求：</strong><p className="item_p">但发撒发生地方</p></Item>
					<Item wrap><strong className="item_strong">报告解读：</strong><p className="item_p"><a href="#" style={{textDecoration:"underline"}}>查看PDF报告</a></p></Item>


				</List>
			</div>
		)
	}
}