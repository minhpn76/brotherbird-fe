import { cloneDeep } from "lodash";

export const covertPad2 = (number) => {
    return (number < 10 ? '0' : '') + number
}

export const typeActionKind = {
    SELECT: 'SELECT',
    QUANTITY: 'QUANTITY',
}

export const caculatedItem = ({ payload}) => {
    const {item, type, e} = payload;
    let objectNew = cloneDeep(item)
    if (type === typeActionKind.QUANTITY) {
        objectNew['quanlity'] = + e.target.value
    }
    if (type === typeActionKind.SELECT) {
        objectNew['selected'] = e.target.checked
    }

    return objectNew
}
