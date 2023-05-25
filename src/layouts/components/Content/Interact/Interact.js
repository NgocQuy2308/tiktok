import classNames from 'classnames/bind';
import styles from './Interact.module.scss';

const cx = classNames.bind(styles);

function Interact({ children, Icon}) {

    return (
        <button className={cx('wrapper')} >
            <span className={cx('react')}>{Icon}</span>
            <p className={cx('label')}>{children}</p>
        </button>
    );
}

export default Interact;
