import { hexMD5 } from "utils.js"

const appKey = 'ShasselClub'
const appSecret = 'teTRSiWVpzaypk6aXSsuaC0N04MOu/sqIO+FnqxPDS9GLS3EGCGAgyPfWb051w74LHFt4NV3MmrC8MEgfkPn1r2obxh0Dvzt9whBM2UB93rKwxDKnhE6QUzuGqFKPkjhuzY784umafmDywThQjO2AXsrcNjoDwJ/50MHma/Ev01A5hAsgR3hDsESLmkMJH7/pZ9ACd0auXZafjPQjsVDhsHZdBnm5ydfwGLOMFtLydVTmGr2ec6JG82zOOif2YVe+SSRLjlTmW+H1sqwYHNQwxo/LIvMPFRXRj5KR87pX4UcHt9wTLSXXak1X7DkFd0JOYMhChibrT3Aqu33WR+0pg=='

function getSign(params) {
  if (typeof params == "string") {
    return paramsStrSort(params);
  } else if (typeof params == "object") {
    var arr = [];
    for (var i in params) {
      arr.push((i + "=" + params[i]));
    }
    return paramsStrSort(arr.join(("&")));
  } else {
    console.log('error params')
  }
}
function paramsStrSort(params) {
  var url = params + "&appKey=" + appKey + '&appSecret=' + appSecret;
  var urlStr = url.split("&").sort().join("&");
  console.log(urlStr)
  return hexMD5(urlStr);
}

exports.getSign = getSign
exports.paramsStrSort = paramsStrSort

