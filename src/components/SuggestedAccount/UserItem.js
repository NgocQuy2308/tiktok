import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
 
import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccount.module.scss';

const cx = classNames.bind(styles);


function UserItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                offset={[0, -10]}
                delay={[800, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('user-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1683705600&x-signature=CnrOC0nQ9qzFl%2FsKIXDlzYgR0PA%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>Kayler</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Trần Ngọc Quý</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default UserItem;
