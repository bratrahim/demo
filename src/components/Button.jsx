import React from 'react';;
import { bool, string, } from 'prop-types'
import c from 'classnames/bind';
import styles from './Button.scss';

const cn = c.bind(styles);

const Button = ({disabled, className, ...props}) => (
    <button className={cn(styles.base, {disabled}, className)} disabled={disabled} {...props} />
);

Button.propTypes = {
    disabled: bool,
    className: string
};

export default Button;
