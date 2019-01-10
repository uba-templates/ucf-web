import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class Pay extends Component {
    render() {
        return (
            <div className="pay-wrap">
                Hello,Pay <Button colors="success" onClick={() => actions.pay.loadData({ ucf: 'ucf' })}>Actions</Button>
            </div>
        );
    }
}

export default Pay;
