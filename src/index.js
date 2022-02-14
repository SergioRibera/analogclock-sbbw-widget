import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-clock/dist/Clock.css';

const App = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    return (
        <div>
            <Clock className="clock" value={time}/>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
