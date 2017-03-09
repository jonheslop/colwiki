import React from 'react'
import 'isomorphic-fetch'
import Loading from './loading'

export default class extends React.Component {
    state = {
        component: false
    }
    componentDidMount() {
        const Map = require('./map');
        this.setState({
            component: true
        })
    }
    render() {
        if ( this.state.component ) {
            return (
                <div>
                    <Loading title="Loaded!" />
                    <Map bounds={ this.props.fitBounds } segments={ this.props.segments } />
                </div>
            )
        }

        return (
            <Loading />
        )
    }
}
