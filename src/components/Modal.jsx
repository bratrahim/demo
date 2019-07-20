import React from 'react';
import { func, number } from 'prop-types'
import Button from './Button';
import styles from './Modal.scss';

const Modal = ({content, onClose}) => <div className={styles.base}>
    <div className={styles.content}>
        Result: {content}
        <Button onClick={onClose} className={styles.button}>Ok</Button>
    </div>
</div>

Modal.propTypes = {
    content: number,
    onClose: func
}

export default Modal;