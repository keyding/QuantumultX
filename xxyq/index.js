/*************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zxhdmx.js

[mitm] 

hostname = api.revenuecat.com

************************************/
const raw = {
  "success" : true,
  "data" : {
    "children" : [
      {
        "gender" : 1,
        "chdAgeDays" : -1,
        "nowMonths" : null,
        "avatarUrl" : "https://static.ukids.cn/userphoto/avatarDefault@3x.png",
        "birthday" : null,
        "nickName" : "宝贝",
        "chdId" : "3956938"
      }
    ],
    "couponsStats" : {
      "giftCardHasNew" : 0,
      "giftCardNum" : 0,
      "giftPackNum" : 0,
      "giftPackTotalNum" : 0,
      "couponsNum" : 0,
      "couponsHasNew" : 0
    },
    "child" : {
      "gender" : 1,
      "chdAgeDays" : -1,
      "nowMonths" : null,
      "avatarUrl" : "https://static.ukids.cn/userphoto/avatarDefault@3x.png",
      "birthday" : null,
      "nickName" : "宝贝",
      "chdId" : "3956938"
    },
    "attrs" : {

    },
    "setting" : {
      "settingInfo" : "{\"workdayEndTime\":\"08:00\",\"filterLang\":0,\"canSettingPlay\":false,\"workdayStartTime\":\"22:00\",\"updateSundayEndTime\":\"次日07:00\",\"sundayEndTime\":\"07:00\",\"dayPlayGameDuration\":\"0\",\"parentPwd\":\"\",\"canSettingPlayTime\":true,\"isSkipFilmHead\":false,\"allowSwitchSubtitle\":0,\"courseApplyAge\":0,\"canLookAt4G\":false,\"updateSundayStartTime\":\"今日22:30\",\"bigFilmLang\":2,\"updateWorkdayEndTime\":\"次日08:00\",\"sundayStartTime\":\"22:30\",\"updateWorkdayStartTime\":\"今日22:00\",\"witchDuration\":\"30\",\"everyTimeWatchDuration\":\"0\",\"updateWitchDuration\":\"30\",\"canPlayAt4G\":false,\"subtitle\":1,\"okidoEnglishMode\":false,\"isPriorityEnglish\":false,\"parentPwdEnable\":false}"
    },
    "attrExtend" : null,
    "user" : {
      "rgtDays" : 1,
      "vip" : 0,
      "svip" : 0,
      "mine" : null,
      "mobile" : "18801080246",
      "svipEnd" : null,
      "vipEndReal" : null,
      "svipTotal" : 0,
      "type" : 0,
      "typeReal" : 0,
      "svipType" : 0,
      "binds" : null,
      "vipEnd" : null,
      "utag" : "1f96643d266437f0a666e57f48c0bbbc",
      "vipEffect" : 0,
      "vipReal" : 0,
      "vipTotal" : 0,
      "svipEffect" : 0
    }
  },
  "curtime" : 1705069970053,
  "error" : null,
  "page" : null
}


const body = JSON.parse($response.body);

body.data.children[0].nickName = body.data.child.nickName = "Caven's baby 🌟";

$done({ body: JSON.stringify(body) });