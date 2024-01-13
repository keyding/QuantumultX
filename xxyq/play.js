/*************************************

[rewrite_local]

^https?:\/\/fastapi\.ukids\.cn\/coreapp\/play\/video\/V9\/online url script-response-body https://raw.githubusercontent.com/keyding/QuantumultX/main/xxyq/play.js

[mitm] 

hostname = fastapi.ukids.cn

************************************/

const body = JSON.parse($response.body)

// body.data.playType = 1
// body.data.preview = false
// body.data.previewDur = null
// body.data.playAuth = '0123456789'
body.data.previewDur = 60

$done({ body: JSON.stringify(body) })