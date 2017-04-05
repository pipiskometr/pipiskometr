import React, { Component, PropTypes } from 'react';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

import RanksHeader from './RanksHeader';
import Ranks from './Ranks';

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle {...restProps} />
    </Tooltip>
  );
};

export default class Content extends Component {
    render() {
        return (
        <div>
            <div>
            <p>Percentile:</p>
            <Slider value={this.props.value} onChange={this.props.onPercentileChange} min={0} max={100} step={0.01} handle={handle} />
            </div>
            <RanksHeader/>
            <Ranks data={this.props.data} percentile={this.props.value}/>
        </div>
    )
    }
}
