import * as userService from '../services/userService.js';

export const authGuard = (ctx, next) => {
    ctx.user = userService.getUser();
    next();
}