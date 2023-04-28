import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    upload = false,
    disabled,
    rounded,
    className,
    children,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listeners
    if (disabled) {
        Object.keys(disabled).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        upload,
        rounded,
        disabled,
        leftIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.prototype = {
    to  : PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    upload: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    onClick : PropTypes.func,

}

export default Button;
