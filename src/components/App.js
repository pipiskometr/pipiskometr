import React, { Component, PropTypes } from 'react';
import Content from './Content';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    render() {
        return (
        <div>
            <h1>Pipiskometr</h1>
            <Content data={this.props.data} value={this.state.value} onPercentileChange={(value) => this.setState({ value })}/>,
        </div>
    );
    }
}
