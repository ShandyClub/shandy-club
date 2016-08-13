/**
  * @desc Utils - general utility functions
*/

export const immutableToggle = (set, value) => set.includes(value) ? set.delete(value) : set.push(value)
