/*************************************

[rewrite_local]

^https?:\/\/fastapi\.ukids\.cn\/ucapp\/sync$ url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/index.js

[mitm] 

hostname = fastapi.ukids.cn

************************************/

const body = JSON.parse($response.body);

body.data.children[0].nickName = body.data.child.nickName = "Caven's baby 🌟";
body.data.user.vip = body.data.user.svip = 1

$done({ body: JSON.stringify(body) });