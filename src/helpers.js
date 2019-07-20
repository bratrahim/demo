export const idGen = (prefix) => {
    let i = 0;
    return () => `${prefix}-${i++}`;
};