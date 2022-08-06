import { navigationTemplate } from '../templates/navigationTemplate.js';

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
} 