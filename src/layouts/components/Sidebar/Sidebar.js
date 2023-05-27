import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import config from '~/config';
import { HomeIcon, HomeActiveIcon, GroupUserIcon, GroupUserActiveIcon, LiveActiveIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount/SuggestedAccount';
import Trending from '~/components/Trending/Trending';


const cx = classNames.bind(styles);

    function Sidebar () {

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem title="Đang Follow" icon={<GroupUserIcon />} activeIcon={<GroupUserActiveIcon />} to={config.routes.following} />
                <MenuItem title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
                <SuggestedAccount label="Tài khoản được đề xuất"  />
                <SuggestedAccount label="Tài khoản đang follwing" />
            <Trending />
            <Trending />
            <Trending />
        </aside>
    );
}

export default Sidebar;
