import React from 'react';
import Button from './Button';
import styles from './Modal.scss';

const Modal = ({content = 'ok', onClose}) => <div className={styles.base}>
    <div className={styles.content}>
        Result: {content}
        <Button onClick={onClose} className={styles.button}>Ok</Button>
    </div>
</div>

export default Modal;