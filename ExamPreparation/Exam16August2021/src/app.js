import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { catalogPage } from './views/catalogView.js';
import { homePage } from './views/homeView.js';
import { loginPage } from './views/loginView.js';
import { registerPage } from './views/registerView.js';

page(addRender);

page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);

page.start();