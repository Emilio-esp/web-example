const getElementDOM = (node) => {
    return document.querySelector(node)
}
const getAllElementDOM = (node) => {
    return document.querySelectorAll(node)
}

const assingEventDOM = ( node, event,  callback ) => {
    node.addEventListener(event, (e) => callback(e))
}

export {
    getElementDOM,
    getAllElementDOM,
    assingEventDOM
}