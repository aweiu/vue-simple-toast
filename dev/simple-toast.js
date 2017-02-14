/**
 * Created by aweiu on 16/10/31.
 */
import vue from 'vue'
import Toast from './SimpleToast.vue'
var toast
var index = 0
function SimpleToast (zIndex) {
  if (!toast) toast = new (vue.extend(Toast))().$mount().$appendTo(document.body)
  this.index = index++
  this.zIndex = zIndex
}
SimpleToast.prototype.show = function (type, content, closeDelay) {
  toast.addRecord(this.index, closeDelay, {type, content, zIndex: this.zIndex})
}
SimpleToast.prototype.hide = function () {
  toast.removeRecord(this.index)
}
export default window._vueSimpleToast || (window._vueSimpleToast = SimpleToast)
