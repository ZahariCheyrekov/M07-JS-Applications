export const homeHandler = (ctx, next) => {
    ctx.user ? ctx.page.redirect('/all-memes') : '';
    next();
}