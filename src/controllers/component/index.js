
import { getComponent } from '../../models/component/index';
export async function getComponentController(context, next) {
    const { page, count} = context.request.query;
    const list = await getComponent(page, count);
    context.body = { list };
    next();
}