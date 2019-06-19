import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex) // 使用vuex状态管理工具
let store = new Vuex.Store({ // 创建一个store
  state: {
    carPanelData: [], // 购物车数据
    receiveInfo: [
      {
        'name': '上官飘逸',
        'phone': '1381111111',
        'areaCode': '010',
        'landLine': '110000',
        'province': '四川市',
        'cityId': '110100',
        'city': '市辖区',
        'countyId': '110106',
        'county': '江湖区',
        'add': '上地十街国际西6号楼319室',
        'default': true
      },
      {
        'name': '梦随心非',
        'phone': '1381111111',
        'areaCode': '010',
        'landLine': '110000',
        'province': '东莞市',
        'cityId': '110100',
        'city': '市辖区',
        'countyId': '110106',
        'county': '宛城区',
        'add': '上地十街国际西6号楼319室',
        'default': false
      },
    ],
    maxOff: false, // 单间商品是否为最大数量
    carShow: false, // 显示购物车
    carTimer: null // 计时器
  },
  getters: {
    totleCount (state) { // 购物车数量
      let count = 0 // 初始数量
      state.carPanelData.forEach((goods) => { // 循环购物车数据
        count += goods.count // 数量增加，点多少数量就加多少
      })
      return count // 返回数量
    },
    totlePrice (state) { // 总价格
      let price = 0 // 初始价格
      state.carPanelData.forEach((goods) => { // 循环购物车数据
        price += goods.price * goods.count // 总价格计算
      })
      return price // 返回价格
    },
    allChecked (state) { // 全选
      let allChecked = true // 状态默认为true
      state.carPanelData.forEach((goods) => { // 遍历数据
        if (!goods.checked) { // 如果一个没选中
          allChecked = false // 全选状态为flase
        }
      })
      return allChecked // 返回全选状态
    },
    checkedCount (state) { // 选中数量
      let count = 0 // 数量默认为0
      // eslint-disable-next-line no-undef
      state.carPanelData.forEach((goods) => { // 遍历商品
        if (goods.checked) { // 如果选中
          count += goods.count // 加当前商品的购买数量
        }
      })
      return count // 返回件数
    },
    checkedPrice (state) { // 选中价格
      let price = 0 // 默认是0
      state.carPanelData.forEach((goods) => { // 遍历商品数据
        if (goods.checked) { // 如果选中商品
          price += goods.count * goods.price // 加当前商品数量*单价
        }
      })
      return price // 返回价格
    },
    checkedGoods (state) { // 选中的商品
      let checkGoods = [] // 声明一个空数组
      state.carPanelData.forEach((goods)=>{ // 遍历商品
        if(goods.checked) // 如果商品为选中状态
        {
          checkGoods.push(goods) // 把商品添加到数组
        }
      })
      return checkGoods // 返回数组
    }
  },
  mutations: {
    addCarPanelData (state, data) { // 加入购物车
      let bOff = true // 声明一个bool值状态
      state.carPanelData.forEach((goods) => { // 循环购物车中的数据
        if (goods.sku_id === data.info.sku_id) { // 如果当前加入商品id等于购物车原有商品id
          goods.count += data.count // 那就计算数量
          bOff = false // bool状态为flase
          if (goods.count > goods.limit_num) { // 加入单种商品数量大于最大数量
            goods.count -= data.count
            state.maxOff = true // 最大值状态为true
            return // 返回
          }
          state.carShow = true // 显示购物车形态
        }
      })
      if (bOff) {
        let goodsData = data.info // 如果以上不存在
        Vue.set(goodsData, 'count', data.count) // 设置数量为1
        Vue.set(goodsData, 'checked', true) // 默认选中状态
        state.carPanelData.push(goodsData) // 添加到购物车
        state.carShow = true // 显示购物车状态
      }
    },
    delCarPanelData (state, id) { // 删除数据
      state.carPanelData.forEach((goods, index) => { // 循环数据
        if (goods.sku_id === id) { // 当商品跟传进来的id相等
          state.carPanelData.splice(index, 1) // 删除一个商品数量
        }
      })
    },
    plusCarPanelData (state, id) { // 在清单增加商品数量
      state.carPanelData.forEach((goods, index) => { // 循环数据
        if (goods.sku_id === id) { // 判断id
          if (goods.count >= goods.limit_num) return
          goods.count++ // 数量自增
        }
      })
    },
    subCarPanelData (state, id) { // 在清单减小商品数量
      state.carPanelData.forEach((goods, index) => { // 循环数据
        if (goods.sku_id === id) { // 判断id是否全等
          if (goods.count <= 1) return // 数量小于1 返回
          goods.count-- // 数量-1
        }
      })
    },
    checkGoods (state, id) { // 选中商品
      state.carPanelData.forEach((goods, index) => { // 遍历商品数据
        if (goods.sku_id === id) { // 判断id是否全等
          goods.checked = !goods.checked // 如果是当前，就取反
        }
      })
    },
    allCheckGoods (state, allChecked) { // 全选商品
      state.carPanelData.forEach((goods, index) => {
        goods.checked = !allChecked
      })
    },
    delCheckGoods (state) { // 删除选中的商品
      let i = state.carPanelData.length // 当前长度
      while (i--) // 从后往前遍历
      // eslint-disable-next-line brace-style
      {
        if (state.carPanelData[i].checked) // 如果选中
        // eslint-disable-next-line brace-style
        {
          state.carPanelData.splice(i, 1)
        }
      }
      state.carPanelData.forEach((goods, index) => { // 遍历数据
        if (goods.checked) { // 选中状态
          state.carPanelData.splice(index, 1) // 删除当前索引的一种商品
        }
      })
    },
    closePrompt (state) {
      state.maxOff = false // 关闭警告栏方法
    },
    showCar (state) { // 显示购物车状态
      clearTimeout(state.carTimer) // 清除定时器
      state.carShow = true
    },
    hideCar (state) {
      state.carTimer = setTimeout(() => { // 开启定时器
        state.carShow = false
      }, 500)
    }
  }
})
export default store // 暴露出去让外界可以拿到
