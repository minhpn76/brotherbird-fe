export const covertPad2 = (number) => {
    return (number < 10 ? '0' : '') + number
}

export const typeActionKind = {
    SELECT: 'SELECT',
    QUANTITY: 'QUANTITY',
}
