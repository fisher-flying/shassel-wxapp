let rp = require('request-promise')
let options = {
  method: 'POST',
  uri: `http://test.shasselclub.com/club-user-center/api/v1/newsInfo/getIndexBottom`
}
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(options)
    .then(res => {
      return res
    }).catch(err => {
      console.log(err)
    })
}