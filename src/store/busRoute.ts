import {getRouteByCity} from '../api'
import router from '@/router';
export const state = {
    cityBusRoute:{}
  };
  export const actions = {
  
  }
  export const mutations = {
    getCityBusRoute(state:any,cityName:string){  //取得縣市所有公車路線，(資料減肥:一開始只需要公車路線RouteName.ZH_tw就好了?!)
        if(!state.cityBusRoute[cityName]){
            console.log(`請求${cityName}資料`)
            getRouteByCity(cityName)?.then(res=>{
                state.cityBusRoute[cityName] = res.data.sort((a:any,b:any)=>{
                  return Number(a.RouteID) > Number(b.RouteID) ? 1:-1
                })
                console.log(state.cityBusRoute)
            }).catch((e:any)=>{
              console.log(e)
              // router.go(0)
            })
        }
       }
  };
  export const getters = {
    
  }
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
  };