import mirror, { connect } from 'mirrorx';
import Home from './components/Home';
import Pay from './components/Pay';
import model from './model'

mirror.model(model);
// 数据和组件UI关联、绑定
export const ConnectedPay = connect(state => state.pay)(Pay);
export const ConnectedHome = connect(state => state.pay)(Home);
