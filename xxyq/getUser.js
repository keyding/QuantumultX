/*************************************

[rewrite_local]

^https?:\/\/fastapi\.ukids\.cn\/ucapp\/getUser$ url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/getUser.js

[mitm] 

hostname = fastapi.ukids.cn

************************************/

const body = JSON.parse($response.body)

body.data.vip = body.data.svip = body.data.vipReal = body.data.svipType = body.data.vipReal = 1
body.data.vipEnd = body.data.svipEnd = body.data.vipEndReal = '2099-12-31'
body.data.vipTotal = body.data.vipEffect = body.data.svipEffect = body.data.svipTotal = 3600
body.data.type = body.data.typeReal = 2


$done({ body: JSON.stringify(body) })