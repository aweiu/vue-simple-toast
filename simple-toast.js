'use strict';

var vue = require('vue');

var Toast = require('./SimpleToast.vue');

/**
 * Created by aweiu on 16/10/31.
 */
var toast;
var index = 0;
function SimpleToast() {
  if (!toast) {
    toast = new (vue.extend(Toast))().$mount();
    toast.$appendTo(document.body);
  }
  this.index = index++;
}
SimpleToast.prototype.show = function (type, content, closeDelay) {
  toast.addRecord(type, content, closeDelay, this.index);
};
SimpleToast.prototype.hide = function () {
  toast.removeRecord(this.index);
};
module.exports = SimpleToast;