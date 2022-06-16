import React, { useState } from 'react';
import FormatedTime from '../FormatedTime/FormatedTime';
import Button from '../Buttons/Button';
import styles from './Logic.module.scss';

const Logic = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() =>{
        let interval = null;

        if(isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 100);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className={styles.container}>
            <FormatedTime time={time} />
            <Button 
            handleStart={handleStart} 
            handlePause={handlePause} 
            handleReset={handleReset} />
        </div>
    );
}

export default Logic;