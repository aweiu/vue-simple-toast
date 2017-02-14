# vue-simple-toast
vue仿微信弹窗小组件

## 安装
```
npm install vue-simple-toast
```
## 使用
**VUE版本：1.x** <br>
**必须在vue-cli生成的webpack模板环境中使用**
```
import Toast from 'vue-simple-toast'
// 实例化
var toast = new Toast()
// 显示一个加载画面
toast.show('loading', '正在加载数据')
// 关闭加载画面
toast.hide()
```
![image](https://github.com/aweiu/vue-simple-toast/raw/master/example.png)
## 支持的toast图标类型
* loading 正在加载
* warning 警告
* success 成功

## 实例化
```
new Toast(zIndex)
```
zIndex: 对应Toast实例节点的style.zIndex。默认：100

## 方法
### show(type, content, closeDelay)
显示一条toast
* type：toast图标类型
* content：toast文字内容
* closeDelay：自动关闭toast的时间（0：不自动关闭） 单位：毫秒；默认：1500

## 常见问题
### 为什么不用vue组件的数据响应方式来显示toast，而是用传统的方法调用?
toast这种组件，显示时机和地方一般都是不确定的，也就是说它不应该直接，始终存在于你的实际业务页面中，它应该是独立的。任何地方都可以调用，需要它的时候再在dom中插入它

### 如果我实例化了多个Toast，dom中会不会插入多个Toast标签?
不会，甚至不同的npm模块生成的实例都会共用。组件会自己维护一个队列来实现多个Toast实例之间的显示和关闭互不影响，同时只会显示最后一个还没有被关闭的Toast

