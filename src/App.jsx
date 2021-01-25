import React, { useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SimpleCalculator from './components/SimpleCalculator';
import Navbar from './components/Navbar';

const App =()=> {

    return (
        <React.Fragment>
            <Navbar/>
            <main>
                <section className="d-flex justify-content-center align-items-center">
                    <SimpleCalculator/>
                </section>
            </main>
        </React.Fragment>
    );
}

export default App;
