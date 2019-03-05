export const promisifyFlush = (flush) => () => new Promise(resolve => flush(resolve));
const onEvent = (eventName) => (element, shouldResolve) => new Promise((resolve, reject) => {
    element.addEventListener(eventName, (event) => shouldResolve ? resolve(event) : reject(event));
});
export const onExmgRadioGroupChanged = onEvent('exmg-radio-group-changed');
