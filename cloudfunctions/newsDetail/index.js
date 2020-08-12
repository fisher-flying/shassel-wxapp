let rp = require('request-promise')
let options = {
  method: 'POST',
  json: true,
  uri: `http://test.shasselclub.com/club-user-center/api/v1/memberRights/get`
}

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, context)
  return rp(options)
    .then(res => {
      console.log(77,res)
      return res
    }).catch(err => {
      console.log(22,err)
    })
}