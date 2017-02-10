/**
  * @desc Typographic utilities
*/

const stacks = {
  primary: '\'Karla\', helvetica, sans-serif',
  secondary: 'Lato, helvetica, sans-serif',
}

const getFontFamily = (stack='primary') => ({ 'font-family': stacks[stack] })

export default {
  ff: getFontFamily,
}
