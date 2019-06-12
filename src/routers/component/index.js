import Router from 'koa-router';
import { getComponentController } from '../../controllers/component/index';

const componentRouter = new Router({
    prefix: `/component`
});

componentRouter
    .get('/item', getComponentController);

export default componentRouter;
