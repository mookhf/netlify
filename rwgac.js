/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

let r = {
	"code": "0000",
	"msg": null,
	"data": {
		"bannerList": [],
		"commendList": [],
		"cateList": null,
		"appPageList": {
			"pageNo": 1,
			"pageSize": 20,
			"totalCount": 7,
			"pageCount": 1,
			"list": [{
				"id": 3,
				"categoryId": 3,
				"categoryName": "音乐",
				"appName": "via浏览器",
				"appPackage": "mark.via",
				"appProvider": "北京酷我科技有限公司",
				"appDesc": "酷我在线音乐播放器，百万歌曲免费在线试听，正版音乐免费下载，最新最全的歌曲搜索，歌词，试听和下载服务，即时更新的全球音乐排行榜，播放更流畅，音质更完美。",
				"appIntro": "酷我在线音乐播放器，百万歌曲免费在线试听，正版音乐免费下载。",
				"logoFileId": "20190320172316945TbRKmWRhHa",
				"logoUrl": "http://appdownload.gacicv.com/group2/M00/00/00/CvhAWFySBoWAd41VAAAeNWfOsPU820.png",
				"latestVersion": "4.3.0.8",
				"downloads": 28695,
				"installs": 28744,
				"uninstalls": 2134,
				"createTime": 1553073801000,
				"updateTime": 1601564574000,
				"vId": 48,
				"pkgSize": 528288,
				"pkgHash": "3b6632dfe34c488aeb5da29736963db903507fa921ec43b9902756bf667ec52c",
				"pkgUrl": "https://xxfire.netlify.app/vai.apk",
				"verFlag": "4.3.0.8",
				"verNum": 4308,
				"releaseTime": 1569859200000,
				"isPay": false,
				"buyPrice": null,
				"payStatus": null
			}]
		}
	},
	"success": true
}
let body = JSON.stringify(r);
console.log(body);
$done(body);