export function filterKeys(object: any, keys: any[]) {
    Object.keys(object)
        .forEach(key => {
            if (keys.indexOf(key) === -1)
                delete object[key];
        });

    return object;
}

export function removeKeys(object: any, keys: any[]) {
    Object.keys(object)
        .forEach(key => {
            if (keys.indexOf(key) !== -1)
                delete object[key];
        });

    return object;
}