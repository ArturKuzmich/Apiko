export function getByKeyword(photoList, keyword) {
    const search = keyword;

    if (!search.length) {
        return photoList;
    } else {
        return photoList.filter(item => {
            if (item.name.toLowerCase().indexOf(search) > -1) return item;
        });
    }
}


export function getByName(photoList, name) {
    if (name.length === 0) {
        return photoList;
    } else {
        return photoList.filter(item => {
            if (name.toLowerCase().includes(item.name.toLowerCase())) {
                return item;
            }
        });
    }
}