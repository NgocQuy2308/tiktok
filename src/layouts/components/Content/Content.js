import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon, SaveIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import video from '~/assets/Video';
import Interact from './Interact/Interact';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9d9505b3b89096928e37f883abb28f44~c5_100x100.jpeg?x-expires=1683705600&x-signature=CnrOC0nQ9qzFl%2FsKIXDlzYgR0PA%3D"
                    alt=""
                />
                <div className={cx('main-content')}>
                    <div className={cx('info-content')}>
                        <div className={cx('user')}>
                            <h2 className={cx('user-name')}>Kayler</h2>
                            <span className={cx('nick-name')}>Trần Ngọc Quý</span>
                        </div>
                        <Button className={cx('follow-btn')} outline>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span className={cx('text-video')}>Tiền có mua được hạnh phúc</span>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                            <a className={cx('hashtag-video')} href="/">
                                <strong className={cx('label')}>#mackedoi</strong>
                            </a>
                        </div>
                        <div className={cx('music')}>
                            <a href="/">
                                <MusicIcon />
                                Mơ
                            </a>
                        </div>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <video className={cx('video')} controls>
                            <source src={video.testVideo} />
                        </video>
                        <div className={cx('action-video')}>
                            <Interact Icon={<HeartIcon className={cx('icon')}/>}>213k</Interact>
                            <Interact Icon={<CommentIcon className={cx('icon')}/>}>23k</Interact>
                            <Interact Icon={<SaveIcon className={cx('icon')}/>}>21k</Interact>
                            <Interact Icon={<ShareIcon className={cx('icon')}/>}>2136</Interact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
