import * as authService from '../services/authService.js';

export const authMidlleware = (ctx, next) => {
    ctx.user = authService.getUser();
    next();
}