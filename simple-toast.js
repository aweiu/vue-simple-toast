'use strict';

var vue = require('vue');

var Toast = require('./SimpleToast.vue');

/**
 * Created by aweiu on 16/10/31.
 */
var toast;
var index = 0;
function SimpleToast(zIndex) {
  if (!toast) toast = new (vue.extend(Toast))().$mount().$appendTo(document.body);
  this.index = index++;
  this.zIndex = zIndex;
}
SimpleToast.prototype.show = function (type, content, closeDelay) {
  toast.addRecord(this.index, closeDelay, { type: type, content: content, zIndex: this.zIndex });
};
SimpleToast.prototype.hide = function () {
  toast.removeRecord(this.index);
};
module.exports = window._vueSimpleToast || (window._vueSimpleToast = SimpleToast);