import Router from 'koa-router';

const VERSION = 'v1';

const router = new Router({
    prefix: `/api/xc-server-share/${VERSION}`
});

router
    .get('/', async (ctx, next) => {
        return '123';
	// todo
});
    
export default router;
