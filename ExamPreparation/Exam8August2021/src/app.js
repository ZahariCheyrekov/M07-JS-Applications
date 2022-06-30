import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleaware.js';

page(authMiddleware);
page(navigationMiddleware);

page('/', () => console.log('Home'));

page.start();