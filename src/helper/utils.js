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

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

export const validatePhonenumber = (inputtxt) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }
