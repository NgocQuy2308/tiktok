import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { useEffect, useState } from 'react';
import * as users from '~/services/user';
import UserItem from './UserItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    const [userValue, setUserValue] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await users.user();
            setUserValue(result);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {userValue.map((result) => (
                <UserItem key={result.id} data={result} />
            ))}
            <p className={cx('more-btn')}>Xem tất cả</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
