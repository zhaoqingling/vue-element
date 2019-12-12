// ajax 请求
import $http from 'axios'
export async function testDemo ({commit}, data) {
  let result = {
    code: 0,
    data: []
  }
  // 拼接请求url
  let url = '/bigdata/qos';
  await(
    // $http.post(url, data).then(res=>{
    
    // }).catch(res=>{
    //   result.data.push('ben')
    // })
    $http.get(url).then(res=>{
      
      console.log('000',res);
      alert(123)
    }).catch(res=>{

    })
  )
  console.log('123',result)
  return result;
}
// $http.get('/user?Id=12345').then(res=>{

// }).catch(res=>{

// })