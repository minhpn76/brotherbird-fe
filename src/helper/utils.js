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
    kindProduct.forEach(kind => {
        if (kind.id !== item.id) {
            newArray.push(kind)
        } else {
            newArray.push({
                id: kind.id,
                name: kind.name,
                quanlity: type === typeActionKind.QUANTITY ? + e.target.value : kind.quanlity,
                price: kind.price,
                image: kind.image,
                selected: type === typeActionKind.SELECT ? e.target.checked : kind.selected
            })
        }
    })
    return newArray
}
