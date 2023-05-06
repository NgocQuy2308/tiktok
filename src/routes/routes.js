import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';
import Feedback from '~/pages/Feedback';


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.feedback, component: Feedback},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
