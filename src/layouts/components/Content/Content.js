import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon, SaveIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import Interact from './Interact/Interact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Content({ data, user }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img className={cx('avatar')} src={user.avatar || images.noImage} alt="avatar" />
                <div className={cx('main-content')}>
                    <div className={cx('info-content')}>
                        <div className={cx('user')}>
                            <h2 className={cx('user-name')}>
                                {user.nickname}
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </h2>
                            <span className={cx('nick-name')}>
                                {user.first_name} {user.last_name}
                            </span>
                        </div>
                        <Button className={cx('follow-btn')} outline>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span className={cx('text-video')}>{data.description}</span>
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
                                {data.music}
                            </a>
                        </div>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <video key={data.id} className={cx('video')} controls loop muted playsInline>
                            <source src={data.file_url} />
                        </video>
                        <div className={cx('action-video')}>
                            <Interact Icon={<HeartIcon className={cx('icon')} />} Active>
                                {data.likes_count}
                            </Interact>
                            <Interact Icon={<CommentIcon className={cx('icon')} />}>{data.comments_count}</Interact>
                            <Interact Icon={<SaveIcon className={cx('icon')} />}>{data.shares_count}</Interact>
                            <Interact Icon={<ShareIcon className={cx('icon')} />}>{data.shares_count}</Interact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
