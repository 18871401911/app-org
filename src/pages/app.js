import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
//跳转组件
import ItemDtetail from 'components/detection/detail.js'
import AuditStatus from 'components/audit/audit_status.js'
import AuditPhone from 'components/audit/phone.js';
import AuditInfo from 'components/audit/audit_info.js';
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
ReactDOM.render((

    <Router history={hashHistory}>
        <Route path="/" component={ItemDtetail} />
        <Route path="/auditStatus" component={AuditStatus} />
        <Route path="/a" component={AuditPhone} />
        <Route path="/b" component={AuditInfo} />
    </Router>
), document.getElementById("root"));