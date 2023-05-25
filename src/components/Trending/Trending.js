import classNames from "classnames/bind";
import styles from './Trending.module.scss'
// import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
import { MusicIcon, TagIcon } from "../Icons";


const cx = classNames.bind(styles);

function Trending() {
    return ( 
        <div className={cx('wrapper')}>
            <h2 className={cx('header')}>
                Khám phá
            </h2>
            <ul className={cx('Trending-list')}>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <TagIcon />
                            <p className={cx('label')}>suthatla</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <TagIcon />
                            <p className={cx('label')}>mackedoi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <TagIcon />
                            <p className={cx('label')}>sansangthaydoi</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <MusicIcon />
                            <p className={cx('label')}>Yêu Đơn Phương Là Gì</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <MusicIcon />
                            <p className={cx('label')}>Anh Yêu Vội Thế Remix DJ Thái Hoàng đánh nhảy xập xình</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div className={cx('Trending-item')}>
                            <MusicIcon />
                            <p className={cx('label')}>Vui Lắm Nha </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
     );
}

export default Trending;