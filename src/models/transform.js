export function transformId(object) {
    if (!object) {
        return Promise.resolve(null);
    }
    const { _id } = object;
    return Promise.resolve({
        id: _id
    });
}

export function transformIds(array) {
    return Promise.resolve(array.map((object) => {
        console.log(object);
        const { _id } = object;
        return {
            id: _id,
        };
    }));
}
