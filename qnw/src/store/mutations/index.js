/**
 * Created by jiaoshuai on 2019/6/3.
 */

export default{
  muCity(state,newCity){
    state.city = newCity
    try{
      localStorage.setItem('city',newCity)
    }catch (e){}
  }
}
