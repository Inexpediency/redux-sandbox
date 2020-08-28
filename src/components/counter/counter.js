import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

const Counter = ({ counterValue, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{ counterValue }</h2>
            <button onClick={dec} className="btn btn-primary btn-lg">
                DEC
            </button>
            <button onClick={inc} className="btn btn-primary btn-lg">
                INC
            </button>
            <button onClick={rnd} className="btn btn-primary btn-lg">
                RND
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counterValue: state
    }
}

export default connect(mapStateToProps, actions)(Counter)
