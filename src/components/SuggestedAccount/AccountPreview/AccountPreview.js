import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1683705600&x-signature=CnrOC0nQ9qzFl%2FsKIXDlzYgR0PA%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>Kayler</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Trần Ngọc Quý</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>10M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>1M </strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
