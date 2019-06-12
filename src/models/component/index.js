import { getCollection } from '../index';
import { ObjectId } from 'mongodb';
import { getPageContent } from '../utils';

const collectionName = 'components';

export const getComponent = (page = 1, count = 10, params = {}) => {
    // console.log(start, count, params)
    return getPageContent({
        collectionName,
        page,
        count,
        params,
    });
};

export const getComponentById = (id) => {
    if (id.length < 24) {
        throw new Error('找不到该组件！');
    }
    return getComponent({
        _id: ObjectId(id)
    });
};

export const getComponentByName = (page, count, params) => {
    let reg = new RegExp(params.name);
    const op = {
        name: reg,
    };
    return getPageContent({
        collectionName,
        page,
        count,
        op
    });
};

export const createComponent = (params) => {
    return getCollection(collectionName)
        .insertOne(params);
};

export const updateComponent = (id, params) => {
    return getCollection(collectionName)
        .findOneAndUpdate(
            {
                _id: ObjectId(id)
            },
            {
                $set: params
            }
        );
};