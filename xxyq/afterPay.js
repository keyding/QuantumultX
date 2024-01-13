/*************************************

[rewrite_local]

^https?:\/\/prod\.ukids\.cn\/uch5\/afterPayVipEnd url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/afterPay.js

[mitm] 

hostname = prod.ukids.cn

************************************/

const body = JSON.parse($response.body)
body.data.afterPayVipEnd = body.data.afterPaySvipEnd = '2099-12-31'
$done({ body: JSON.stringify(body) })