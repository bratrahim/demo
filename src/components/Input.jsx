import React, { useState } from 'react';
import { idGen } from './../helpers.js';
import styles from './Input.scss';

const getId = idGen('input');

const Input = ({label, message, ...props}) => {
    const [id] = useState(() => getId());
    return (
        <div className={styles.base}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input id={id} className={styles.input} type="text" {...props}></input>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
}

export default Input;
