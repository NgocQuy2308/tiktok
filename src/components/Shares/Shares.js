import PropTypes from 'prop-types';
import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './VideoShares.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import config from '~/config';
import SvgIcon from '~/components/SvgIcon';
import { iconArrowToBot } from '~/components/SvgIcon/iconsRepo';

const cx = classNames.bind(styles);

function VideoShare({ children }) {
    const [showFullList, setShowFullList] = useState(false);

    const shareList = config.shares;

    const currentList = showFullList ? shareList : shareList.slice(0, 5);

    const handleShowFull = () => {
        return setShowFullList(true);
    };

    const handleShowLess = () => {
        return setShowFullList(false);
    };

    const handleRenderItem = (attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('popper')}>
                <div className={cx('arrow-popper')} data-popper-arrow />
                <div className={cx('list')}>
                    {currentList.map((share, index) => (
                        <Button
                            key={index}
                            large
                            className={cx('item')}
                            leftIcon={<SvgIcon icon={share.icon} />}
                            href={share.href}
                            target={share.href && '_blank'}
                        >
                            {share.title}
                        </Button>
                    ))}
                    {shareList.length > 5 && !showFullList && (
                        <div className={cx('see-more-btn')} onClick={handleShowFull}>
                            <SvgIcon icon={iconArrowToBot} size={24} />
                        </div>
                    )}
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <TippyHeadless
            interactive
            placement="top-start"
            offset={[-24, 4]}
            delay={[0, 400]}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            onHidden={handleShowLess}
            render={handleRenderItem}
        >
            {children}
        </TippyHeadless>
    );
}

VideoShare.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VideoShare;