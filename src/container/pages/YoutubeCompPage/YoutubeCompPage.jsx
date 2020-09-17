import React, { Component, Fragment } from 'react'
import YouTubeComp from '../../../component/YutubeComponent/YouTubeComponent'
import { connect } from 'react-redux'

//*CONTEXT API
import { RootContetx, RootContex } from '../../Home/Home'
import globalProvider, { GlobalConsumer } from '../../../context/context'
class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <h1>Halaman Youtube Component</h1>
                <hr />
                <YouTubeComp
                    time="6.77" title="Content 1" desc="Ditotnton 400rb Kali" />
                <YouTubeComp
                    time="3.54" title="Content 2" desc="Ditotnton 400rb Kali" />
                <YouTubeComp
                    time="7.87" title="Content 3" desc="Ditotnton 400rb Kali" />
                <YouTubeComp />
                <hr />
                {/* REDUX */}
                {/* <p>Total Order: {this.props.order}</p> */}
                {/* CONTEXT API */}
                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>

        )
    }
}
const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}
//* REDUX
// export default connect(mapStateToProps)(YoutubeCompPage);
//*CONTEXT API
export default GlobalConsumer(YoutubeCompPage);
