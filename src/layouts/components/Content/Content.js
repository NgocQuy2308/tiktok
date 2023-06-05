import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon, SaveIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import Interact from './Interact/Interact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useEffect, useState, useRef } from 'react'
import useElementOnScreen from '~/components/useElementOnScreen/useElementOnScreen';

const cx = classNames.bind(styles);

function Content({ data, user }) {
    const [isActive, setIsActive] = useState(false);

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();
    const options = {
        root: null,
        rootMargin: '-10px',
        threshold: 0.5
    }
    const isVisible = useElementOnScreen(options, videoRef)
    // // const onVideoClick = () => {
    // //   if (playing) {
    // //     videoRef.current.pause();
    // //     setPlaying(!playing);
    // //   } else {
    // //     videoRef.current.play();
    // //     setPlaying(!playing);
    // //   }
    // // };
    useEffect(() => {
      if (isVisible) {
        if (!playing) {        
          videoRef.current.play();
          setPlaying(true)
        }
      }
      else {
        if (playing) {        
          videoRef.current.pause();
          setPlaying(false)
        }
      }
    }, [isVisible])

    const activeState = () => {
        // 👇️ toggle isActive state on click
        setIsActive((current) => !current);
    };

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
                        <video key={data.id} className={cx('video')} controls loop preload="true" ref={videoRef} src={data.file_url} muted>
                        </video>
                        <div className={cx('action-video')}>
                            <Interact
                                Icon={<HeartIcon className={cx('icon')} />}
                                isActive={isActive}
                                onActive={activeState}
                            >
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
