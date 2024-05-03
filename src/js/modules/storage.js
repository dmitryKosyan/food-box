export const getLocalData = (name) => JSON.parse(localStorage.getItem(name)) || [];
export const setLocalData = (name, value) => localStorage.setItem(name, JSON.stringify(value));