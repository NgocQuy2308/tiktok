import classNames from 'classnames/bind';
import styles from './Save.module.scss';

const cx = classNames.bind(styles);

function Save({ children, Icon, isActive, onActive }) {

    return (
        <button className={cx('wrapper')} onClick={onActive}>
            <span className={isActive ? cx('react-active') : cx('react')}>{Icon}</span>
            <p className={cx('label')}>{isActive ? children + 1 : children}</p>
        </button>
    );
}

export default Save;
