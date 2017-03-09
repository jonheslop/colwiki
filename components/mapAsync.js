import React from 'react'
import Loading from './loading'

export default class extends React.Component {
    state = {
        component: null
    }
    componentDidMount() {
        // load component on mount
        require.ensure([], (require) => {
            // !IMPORTANT! we can not use here something like:
            //    require(this.props.path).default;
            // because webpack cannot  statically analyse such imports
            // so we should explicitly import required module
            const Map = require('./map').default;
            this.setState({
                component: Map
            });
        });
    }
    render() {
        if (this.state.component) {
            return <this.state.component/>
        }
        return (<Loading />);
    }
}
