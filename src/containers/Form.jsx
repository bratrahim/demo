import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getData } from './../stateFunc.js';
import Input from './../components/Input';
import Button from './../components/Button';
import styles from './Form.scss';7

const isAlphanum = input => (input.length >= 1 && input.length <= 10 && input.match(/^[a-z0-9]+$/));
const message = 'Invalid input'

const Form = ({invalidInput, loading, onSubmit}) => {
    const [inputVal, setInputVal] = useState('');
    const handleClick = () => onSubmit(inputVal);
    const handleChange = (e) => setInputVal(e.target.value);

    const valid = isAlphanum(inputVal);
    return (
        <div className={styles.base}>
            <div className={styles.container}>
                <Input
                    label="Enter a value:"
                    onChange={handleChange}
                    value={inputVal}
                    type="text"
                    message={!valid && inputVal.length? message : undefined}
                    />
                <div className={styles.loading}>{loading && 'loading ...'}</div>
                <Button disabled={!valid || loading} onClick={handleClick}>Send</Button>
                {invalidInput && "invalid input"}
                
            </div>
        </div>)
};

const mapDispatch = dispatch => ({onSubmit: text => {dispatch(getData(text))}});

export default connect(null, mapDispatch)(Form);