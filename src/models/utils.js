import { getCollection } from './index';
import { transformIds } from './transform';
/**
 * 返回分页数据
 * @param {object} option
 * list 当前页面数据
 * page 当前页码
 * count 当前页数据数量
 * total 总数据数量
 * totalCount 总页数
 */
export const getPageContent = async (option) => {
    const { collectionName, page, count, params } = option;
    console.log(collectionName, page, count, params);
    const totalList = await getCollection(collectionName).find(...params).toArray();
    const total = totalList.length;
    const totalPage = Math.ceil(total / count);
    const start = (page - 1) * count;
    const list = await getCollection(collectionName)
        .find(...params)
        .sort({
            date: -1
        })
        .skip(Number(start))
        .limit(Number(count))
        .toArray()
        .then(transformIds);
    return (
        {
            total,
            totalPage,
            page: Number(page),
            count: Number(count),
            list
        }
    );
};
