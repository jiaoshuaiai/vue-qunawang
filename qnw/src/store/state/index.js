/**
 * Created by jiaoshuai on 2019/6/3.
 */
  

  //用户关闭浏览器存储或开启隐身模式，loca不可用，这时候浏览器会抛出异常，代码就无法运行
  // 所以外层包裹 try  catch
let defaCity = '城市1'

try{
  if(localStorage.getItem('city')){
    defaCity = localStorage.getItem('city')
  }
}catch (e){}
 

export default{
  // city:'城市1'
  city:  defaCity
}
