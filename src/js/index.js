//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faClock} />


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendario">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="cinco">{props.cinco % 10}</div>
            <div className="cuatro">{props.cuatro % 10}</div>
            <div className="tres">{props.tres % 10}</div>
            <div className="dos">{props.dos % 10}</div>
            <div className="uno">{props.uno % 10}</div>
        </div>
    )
}

SimpleCounter.propTypes = {
    uno: PropTypes.number,
    dos: PropTypes.number,
    tres: PropTypes.number,
    cuatro: PropTypes.number,
    cinco: PropTypes.number
}

let counter = 0;
setInterval(function() {
    const cinco = Math.floor(counter/10000);
    const cuatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dos = Math.floor(counter/10);
    const uno = Math.floor(counter/1);
    console.log(uno, dos, tres, cuatro);
    counter ++;
    ReactDOM.render(<SimpleCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco}/>, document.querySelector("#app"));
},1000);

//render your react application

