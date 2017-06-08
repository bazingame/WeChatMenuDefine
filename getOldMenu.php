<?php
error_reporting(0);
$MN = new Menu();
if (isset($_GET['AppId'])&& isset($_GET['AppSecret'])){
    $access_token = $MN->getAccessToken($_GET['AppId'],$_GET['AppSecret']);
    $oldMenu = $MN->getOldMenu($access_token);
    print_r($oldMenu);
}else{
    echo "请填写完整";
}

class Menu{

    function getAccessToken($AppId, $AppSecret)
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $AppId . '&secret=' . $AppSecret;
        $res = $this->http_curl($url, 'get','arr');
        $access_token = $res['access_token'];
        return $access_token;
//        print_r($res);
    }

    //获得json数据，返回格式为json
    function getOldMenu($access_token){
        $url = 'https://api.weixin.qq.com/cgi-bin/menu/get?access_token='.$access_token;
        $menuJson = $this->http_curl($url,'get','json');
        $menuArr = json_decode($menuJson,TRUE);
//        $menuArr = $menuArr['button'];
//        $menuJson = json_encode($menuArr,JSON_UNESCAPED_UNICODE);
        return $menuJson;
    }

//CURL采集工具
    function http_curl($url, $type = 'get', $res = 'json', $arr = '')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 跳过证书检查
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);  // 从证书中检查SSL加密算法是否存在
        if ($method = 'post') {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $arr);
        }
        $CurlRes = curl_exec($ch);
        if (curl_errno($ch)) {
            var_dump(curl_error($ch));
        }
        curl_close($ch);

        if ($res == 'json') {        //默认为json 填写其他则为数组
            return $CurlRes;
        } else {
            return json_decode($CurlRes, true);
        }
    }


}