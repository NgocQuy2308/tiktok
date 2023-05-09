import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';

import UserItem from './UserItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <UserItem />
            <UserItem />
            <UserItem />
            <p className={cx('more-btn')}>Xem tất cả</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
