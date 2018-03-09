import TipsComponent from './vue-tips.vue'

let Tips={}
//必须install
Tips.install=function(Vue,options){
  var opt={}
  for(let key in options){
    opt[key]=options[key]
  }
  Vue.prototype.$tips=function(option){

    if(typeof option=='object'){
      for(let key in option){
        opt[key]=option[key]
      }
    }

    //extand继承,实例
    const TipsController=Vue.extend(TipsComponent)
    //mount挂载，得到新实例
    var instance=new TipsController().$mount(document.createElement("div"))

    document.body.appendChild(instance.$el)
  }
  Vue.prototype.$tips['show']=function(option){
    Vue.prototype.$tips(option);
  }
}

if(window.Vue){
  Vue.use(Tips)
}

export default Tips