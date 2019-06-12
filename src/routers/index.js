import Router from 'koa-router';
import componentRouter from './component/index';
const VERSION = 'v1';

const router = new Router({
    prefix: `/api/xc-server-share/${VERSION}`
});

router.
    use(componentRouter.routes());


export default router;
