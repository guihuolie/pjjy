const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



function Regular(str, reg) {
  if (reg.test(str))
    return true;
  return false;
}

//是否为中文
function IsChinese(str) {
  var reg = /^[\u0391-\uFFE5]+$/;
  return Regular(str, reg);
}
//去左右空格;
function trim(s) {
  return s.replace(/(^\s*)|(\s*$)/g, "");
}

//删除搜藏
function delete_sc_array(product_id) {
  var init_sc_data = (wx.getStorageSync('sc_data') || [])
  init_sc_data = removeArray(init_sc_data, product_id)
  wx.setStorageSync('sc_data', init_sc_data);
  wx.setStorageSync('product_id_' + product_id, false);
  console.log('sc_state---' + wx.getStorageSync('product_id_' + product_id));
  console.log(wx.getStorageSync('sc_data'));
}

//添加搜藏
function add_sc_array(product_id) {
  var init_sc_data = (wx.getStorageSync('sc_data') || [])
  init_sc_data = addArray(init_sc_data,product_id);
  wx.setStorageSync('sc_data', init_sc_data);
  wx.setStorageSync('product_id_' + product_id, true);
  console.log('sc_state---' + wx.getStorageSync('product_id_' + product_id));
  console.log(wx.getStorageSync('sc_data'));
}

//从数组中删除数据
function removeArray(list,e){
  for (var i = 0; i < list.length; i++) {
    if (list[i] == e) {
      list.splice(i, 1);
      return list;
    }
  } 

  return list;
}

//向数组中添加数据
function addArray(list, e) {
  for(var a in list){
    if (e == a){ 
      return list;
    }
  }
  list.push(e);
  return list;
}

//最下面一定要加上你自定义的方法（作用：将模块接口暴露出来），否则会报错：util.trim is not a function;
module.exports = {
  IsChinese: IsChinese,
  trim: trim,
  delete_sc_array: delete_sc_array,
  add_sc_array: add_sc_array
}
