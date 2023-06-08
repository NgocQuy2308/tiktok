import { useEffect, useRef, useState } from 'react';
import * as videoContent from '~/services/video';
import Content from '~/layouts/components/Content/Content';
import VideoContext from '~/components/Context/VideoContext';
import { InView } from 'react-intersection-observer';
import SvgIcon from '~/components/SvgIcon/SvgIcon';
import TiktokLoading from '~/components/TiktokLoading';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';


const cx = classNames.bind(styles);

function Home() {
    const [videoValue, setVideoValue] = useState([]);
    const [page, setPage] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(true);

    const inViewArr = useRef([]);
    const pageRandom = useRef([]);

    const contextValue = {
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        inViewArr: inViewArr.current,
    };

    useEffect(() => {
        if (page < 1) return;

        const fetchApi = async () => {
            const result = await videoContent.video(page);
            // random video in list result
            result.sort(() => Math.random() - 0.5);

            setVideoValue([...videoValue, ...result]);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = pageRandom.current;
        let page;

        if (randomList.length >= countPage) {
            randomList.length === countPage && randomList.push(max);
            page = ++randomList[randomList.length - 1];

            return page;
        }

        do {
            page = Math.floor(Math.random() * countPage + min);
        } while (randomList.includes(page));

        randomList.push(page);

        return page;
    };

    return (
        <VideoContext value={contextValue}>
            <div>
                {videoValue.map((video, index) => {
                    return (
                        <InView key={index} threshold={0.8}>
                            {({ inView, ref: observeRef }) => (
                                <Content ref={observeRef} isInView={inView} videoInfo={video} videoId={index} />
                            )}
                        </InView>
                    );
                })}
                 <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}>
                    <SvgIcon className={cx('auto-load-more')} icon={<TiktokLoading />} />
                </InView>
            </div>
        </VideoContext>
    );
}

export default Home;
