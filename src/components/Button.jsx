import React from 'react';
import c from 'classnames/bind';
import styles from './Button.scss';

const cn = c.bind(styles);

const Button = ({disabled, className, ...props}) => (
    <button className={cn(styles.base, {disabled}, className)} disabled={disabled} {...props} />
)

export default Button;
