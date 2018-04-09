let url = getApp().globalData.servsers;
const api = {
    // 菜品分类列表
    foodcatlist: url + '/food_cat/getList',
    // 获取一条分类
    foodcat: url + "/food_cat/getRow",
    // 设置菜单分类内容
    foodset: url + '/food_cat/setData',
    // 获取菜品列表（菜单）
    foodlist: url + '/food/getList',
    // 获取一条菜品详细信息
    food: url + '/food/getRow',
    // 获取餐位列表
    seat1: url + '/seat/getUsableSeat',
    // 获取一条餐位的详细信息
    seat2: url + '/seat/getRow',
    // 获取当前用户购物车内所有菜品
    cart1: url + '/cart/getList',
    // 加入购物车或减少购物车数量
    cart2: url + '/cart/setData',
    // 清除购物车
    cart3: url + '/cart/clearData',
    // 提交到订单
    cart4: url + '/cart/submit',
    // 在原来的购物车上添加菜品数量
    cart5: url + '/cart/addData',
    // 在原来的购物车上减少菜品数量
    cart6: url + '/cart/reduceData',
    // 获取当前用户的订单
    order1: url + '/order/getList',
    // 获取一条订单所有信息
    order2: url + '/order/getRow',
    // 加菜
    order3: url + '/order/addData',
    // 退菜
    order4: url + '/order/backData',
    // 清除未支付的订单
    order5: url + '/order/clearData',
    // 删除已完成的订单
    order6: url + '/order/delData',
    // 确认使用
    order7: url + '/order/confirm',
    // 获取售后订单
    order8: url + '/order/getAfter',
    // 退款原因、分类
    order9: url + '/order/getCause',
    // 申请退款
    order10: url + '/order/drawBack',
    // 退款详情
    order11:url + '/order/backDetail',
    // 获取用户信息
    user: url + '/index/getUserInfo',
    // 获取所有反馈类型
    msg1: url + '/mixed/getMessageType',
    // 留言反馈
    msg2: url + '/mixed/setMessage'
}
module.exports = api;