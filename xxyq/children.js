/*************************************

[rewrite_local]

^https?:\/\/fastapi\.ukids\.cn\/ucapp\/children$ url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/children.js

[mitm] 

hostname = fastapi.ukids.cn

************************************/

const body = JSON.parse($response.body)

body.data[0].nickName = "Caven's baby 🌟"

$done({ body: JSON.stringify(body) })