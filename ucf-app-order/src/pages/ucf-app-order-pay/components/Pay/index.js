import React, { Component } from 'react';
import { actions } from 'mirrorx';
import './index.less';

class Pay extends Component {
    render() {
        return (
            <div className="pay-wrap">
                Hello,Pay <button onClick={() => actions.pay.loadData({ ucf: 'ucf' })}>Actions</button>
            </div>
        );
    }
}

export default Pay;
