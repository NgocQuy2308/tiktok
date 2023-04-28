import PropTypes from 'prop-types';
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({ data, onClick }) {
    const classes = cx('menu-items', {
        separate: data.separate
    })
    return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick} href={data.href} >
        {data.title}
    </Button>
        );
}

MenuItem.prototype = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;