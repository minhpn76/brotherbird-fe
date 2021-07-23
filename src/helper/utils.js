export const covertPad2 = (number) => {
    return (number < 10 ? '0' : '') + number
}

export const typeActionKind = {
    SELECT: 'SELECT',
    QUANTITY: 'QUANTITY',
}

export const caculatedItem = ({kindProduct, payload}) => {
    const {item, type, e} = payload;
    let newArray = []
    console.log('item', item);
    console.log('kindProduct', kindProduct);
    kindProduct.forEach(kind => {
        if (kind.id !== item.id) {
            newArray.push(kind)
        } else {
            newArray.push({
                ...kind,
                quanlity: type === typeActionKind.QUANTITY ? + e.target.value : 1,
                selected: type === typeActionKind.SELECT ? e.target.checked : false
            })
        }
    })
    return newArray
}
