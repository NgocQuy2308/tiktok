import classNames from 'classnames/bind';
// import { useState } from 'react';
import styles from './Interact.module.scss';

const cx = classNames.bind(styles);

function Interact({ children, Icon, onActive, isActive }) {
    // const [isActive, setIsActive] = useState(false);

    // const activeState = () => {
    //     // 👇️ toggle isActive state on click
    //     setIsActive((current) => !current);
    // };

    return (
        <button className={cx('wrapper')} onClick={onActive}>
            <span className={isActive ? cx('react-active') : cx('react')}>{Icon}</span>
            <p className={cx('label')}>{isActive ? children + 1 : children}</p>
        </button>
    );
}

export default Interact;
