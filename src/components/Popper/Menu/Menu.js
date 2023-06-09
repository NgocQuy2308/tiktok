import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [nav, setNav] = useState([{ data: items }]);

    const current = nav[nav.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setNav((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setNav((prev) => prev.slice(0, prev.length - 1));
    }

    const handleRestMenu = () => {
        setNav((prev) => prev.slice(0, 1))
    }

    return (
        <Tippy
            offset={[10, 10]}
            delay={[0, 600]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {nav.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBack}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={handleRestMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children : PropTypes.node.isRequired,
    items : PropTypes.array,
    hideOnClick : PropTypes.bool,
    onChange : PropTypes.func,
}

export default Menu;
