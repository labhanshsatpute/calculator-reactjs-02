import React from 'react';
import Keypad from './Keypad';
import Display from './Display';

const SimpleCalculator =()=> {
    return (
        <React.Fragment>
            <div className="card calculatorCard bg-dark">
                <div className="card-body p-1">
                    <Keypad/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SimpleCalculator;