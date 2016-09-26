module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "function-calc-no-unspaced-operator": null,
    "selector-pseudo-class-no-unknown": [ true, { ignorePseudoClasses: [ "global" ] } ],
    "string-quotes": "single",
  },
  "ignoreFiles": [
    "../app/client/css/shared/reset.css"
  ]
}
