/**
  * @desc Typographic utilities
*/

const stacks = {
  primary: '\'Open Sans\', helvetica, sans-serif',
  secondary: 'Lato, helvetica, sans-serif',
}

const getFontFamily = (stack='primary') => ({ 'font-family': stacks[stack] })

export default {
  ff: getFontFamily,
}
