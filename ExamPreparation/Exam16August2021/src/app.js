import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { catalogPage } from './views/catalogView.js';
import { createPage } from './views/createView.js';
import { detailsPage } from './views/detailsView.js';
import { editPage } from './views/editView.js';
import { homePage } from './views/homeView.js';
import { loginPage } from './views/loginView.js';
import { registerPage } from './views/registerView.js';

import { logout } from './services/userService.js'
import { addSession } from './middlewares/session.js';

page(addSession);
page(addRender);

page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout);

page.start();

function onLogout() {
    logout();
    page.redirect('/');
}