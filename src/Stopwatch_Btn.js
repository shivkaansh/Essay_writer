import React from 'react';

function Stopwatch_Btn(props) {
    return (
        <div>
            {(props.status === 0) ?
                <button className="stopwatch-btn btn btn-outline-info"
                    onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1) ?
                <div>
                    <button className="stopwatch-btn btn btn-outline-danger"
                        onClick={props.stop}>Stop</button>
                    <button className="stopwatch-btn btn btn-outline-warning"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }

            {(props.status === 2) ?
                <div>
                    <button className="stopwatch-btn btn btn-outline-info"
                        onClick={props.resume}>Resume</button>
                    <button className="stopwatch-btn btn btn-outline-warning"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }

        </div>
    );
}

export default Stopwatch_Btn;