import SvgIcon from '~/components/SvgIcon';
import {
    iconEmail,
    iconEmbed,
    iconFacebookShare,
    iconLine,
    iconLink,
    iconLinkedIn,
    iconPinterest,
    iconPlaneShare,
    iconTelegram,
    iconTwitter,
    iconWhatsApp,
} from '~/components/SvgIcon/iconsRepo';

const shares = [
    {
        title: 'Nhúng',
        icon: <SvgIcon icon={iconEmbed} />,
    },
    {
        title: 'Gửi đến bạn bè',
        icon: <SvgIcon icon={iconPlaneShare} />,
    },
    {
        title: 'Share To Facebook',
        icon: <SvgIcon icon={iconFacebookShare} />,
        href: 'https://facebook.com',
    },
    {
        title: 'Share To WhatsApp',
        icon: <SvgIcon icon={iconWhatsApp} />,
        href: 'https://wa.me',
    },
    {
        title: 'Sao chép liên kết',
        icon: <SvgIcon icon={iconLink} />,
    },
    {
        title: 'Share To Twitter',
        icon: <SvgIcon icon={iconTwitter} />,
        href: 'https://twitter.com',
    },
    {
        title: 'Share To LinkedIn',
        icon: <SvgIcon icon={iconLinkedIn} />,
        href: 'https://www.linkedin.com',
    },
    {
        title: 'Share To Telegram',
        icon: <SvgIcon icon={iconTelegram} />,
        href: 'https://t.me',
    },
    {
        title: 'Share To Email',
        icon: <SvgIcon icon={iconEmail} />,
        href: 'mailto:',
    },
    {
        title: 'Share To Line',
        icon: <SvgIcon icon={iconLine} />,
        href: 'https://lineit.line.me',
    },
    {
        title: 'Share To Pinterest',
        icon: <SvgIcon icon={iconPinterest} />,
        href: 'https://pinterest.com',
    },
] ;

export default shares;
