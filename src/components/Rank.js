import React from 'react';
import _ from 'lodash';

export const Rank = ({ data, percentile }) => {

const numberAvailable = 'percentileToNumber' in data;
const divisionAvailable = 'percentileToDivision' in data || 'numberToDivision' in data;

let numberBottom = 0;
let numberTop = 0;
let division;

console.log(data);



if ('percentileToNumber' in data) {
    const percentileToNumberKeys = _.keys(data.percentileToNumber).map(key => +key).sort((a,b) => a-b);
    for (const key of percentileToNumberKeys) {
        if (percentile <= +key) {
            numberTop = Math.floor(data.percentileToNumber[key]);
            break;
        }
        numberBottom = Math.floor(data.percentileToNumber[key]);
    }
    if (numberBottom > numberTop) {
        numberTop = 'Infinity';
    }
}


if ('percentileToDivision' in data) {
    let divisionName = data.percentileToDivision[_.keys(data.percentileToDivision)[0]];
    for (const key in data.percentileToDivision) {
        if (percentile <= +key) {
            break;
        }
        divisionName = data.percentileToDivision[key];
    }
    division = data.divisionData[divisionName];
}

if ('numberToDivision' in data) {
    let divisionName = data.numberToDivision[_.keys(data.numberToDivision)[0]];
    for (const key in data.numberToDivision) {
        if (numberBottom <= +key) {
            break;
        }
        divisionName = data.numberToDivision[key];
    }
    division = data.divisionData[divisionName];
}


return (
    <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
        }}>
        <img
            style={{
                width: 50,
            }}
            src={data.image}
        />
        <span
            style={{ width: 200, marginLeft: 20 }}
            >{data.visibleName}</span>
        <span
            style={{ width: 200, marginLeft: 20}}>
            { numberAvailable  && `${numberBottom} - ${numberTop}`}
        </span>
        <div
            style={{ width: 200, marginLeft: 20, display: 'flex', alignItems: 'center' }}
        >
            { divisionAvailable &&
                <img style={{ width: 50 }} src={division.image} />
            }
            { divisionAvailable &&
                <span style={{ marginLeft: 20 }}>{division.visibleName}</span>
            }
        </div>
    </div>
);
};

export default Rank;
