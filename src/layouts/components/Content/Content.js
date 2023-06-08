import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon, SaveIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import Interact from './Interact/Interact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useState, memo, forwardRef } from 'react';
import Video from '~/components/Video/Video';
import VideoShare from '~/components/Shares/Shares';

const cx = classNames.bind(styles);

const Content = forwardRef(({ videoId, videoInfo, isInView }, ref) => {
    const {
        user: { avatar: avatarUrl, nickname: userName, first_name: firstName, last_name: lastName, tick },
        description,
        music: musicInfo,
        likes_count: likesCount,
        comments_count: commentsCount,
        shares_count: sharesCount,
        meta: {
            video: { resolution_x: videoWidth, resolution_y: videoHeight },
        },
    } = videoInfo;

    const directionVideoClass = videoWidth - videoHeight < 0 ? 'vertical' : 'horizontal';

    const [isLike, setIsLike] = useState(false);
    const [isSave, setIsSave] = useState(false);

    const likeState = () => {
        setIsLike((current) => !current);
    };

    const saveState = () => {
        setIsSave((current) => !current);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img className={cx('avatar')} src={avatarUrl || images.noImage} alt="avatar" />
                <div className={cx('main-content')}>
                    <div className={cx('info-content')}>
                        <div className={cx('user')}>
                            <h2 className={cx('user-name')}>
                                {userName}
                                {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </h2>
                            <span className={cx('nick-name')}>
                                {firstName} {lastName}
                            </span>
                        </div>
                        <Button className={cx('follow-btn')} outline>
                            Follow
                        </Button>
                        <div className={cx('video-desc')}>
                            <span className={cx('text-video')}>{description}</span>
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
                                {musicInfo || `Nhạc nền - ${firstName} ${lastName}`}
                            </a>
                        </div>
                    </div>
                    <div className={cx('video-wrapper', directionVideoClass)}>
                        <Video videoId={videoId} videoInfo={videoInfo} isInView={isInView} />
                        <div className={cx('action-video')}>
                            <Interact
                                Icon={<HeartIcon className={cx('icon')} />}
                                isActive={isLike}
                                onActive={likeState}
                            >
                                {likesCount}
                            </Interact>
                            <Interact Icon={<CommentIcon className={cx('icon')} />}>{commentsCount}</Interact>
                            <Interact Icon={<SaveIcon className={cx('icon')} />} isActive={isSave} onActive={saveState}>
                                {sharesCount}
                            </Interact>
                            <VideoShare>
                                <label className={cx('interactive-item')}>
                                    <button className={cx('item-icon')}>
                                        <ShareIcon className={cx('icon')} />
                                    </button>
                                    <p className={cx('item-count')}>{sharesCount}</p>
                                </label>
                            </VideoShare>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default memo(Content);
