/*************************************

[rewrite_local]

^https?:\/\/fastapi\.ukids\.cn\/ucapp\/sync$ url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/index.js

[mitm] 

hostname = fastapi.ukids.cn

************************************/

const body = JSON.parse($response.body);

body.data.children[0].nickName = body.data.child.nickName = "Caven's baby 🌟";
body.data.user.vip = body.data.user.svip = body.data.user.vipReal = body.data.user.svipType = 1
body.data.user.vipEnd = body.data.user.svipEnd = body.data.user.vipEndReal = '2099-12-31'
body.data.user.vipTotal = body.data.user.vipEffect = body.data.user.svipEffect = body.data.user.svipTotal = 3600
body.data.user.type = body.data.user.typeReal = 2


$done({ body: JSON.stringify(body) });