import page from '../node_modules/page/page.mjs';

page('/', () => console.log('Home'));

page.start();