import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
 
import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccount.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);


function UserItem({ data }) {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}/>
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
                        src={data.avatar || images.noImage}
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.first_name} {data.last_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default UserItem;
