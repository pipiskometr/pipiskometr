import React from 'react';
import _ from 'lodash';
import Rank from './Rank';

export const Ranks = ({ data, percentile }) =>
    <div>
        {
            _.values(data).map((d) => <Rank key={d.name} data={d} percentile={percentile} />)
        }
    </div>
export default Ranks;
