import React, { Component, Fragment } from 'react'
import '../LifeCycleComp/LifeCycleComp.css'
import { connect } from 'react-redux'

//*CONTEXT API
import { RootContetx, RootContex } from '../../Home/Home'
import { GlobalConsumer } from '../../../context/context'
class LifeCycleComp extends Component {
    render() {
        return (
            <Fragment>
                <h1>Halaman LifeCycleComp</h1>
                <hr />
                <button className="btn">Componet Buttom</button>
                <hr />
                {/* REDUX */}
                {/* <p>Total Order : {this.props.order}</p> */}
                {/* CONTEXT API */}
                <p>Total Order : {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}
// const mapStateToProps = state => {
//     return {

//         order: state.totalOrder
//     }
// }
//* REDUX
// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
