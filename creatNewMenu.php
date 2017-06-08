<?php
    error_reporting(0);
$jsoncode = file_get_contents("php://input");
    $RN = new Renew();
    $RN->CreatNewMenu($jsoncode);

class Renew{
    function CreatNewMenu($jsoncode){
        $access_token = $this->getAccessToken($_GET['AppId'],$_GET['AppSecret']);
        $url ='https://api.weixin.qq.com/cgi-bin/menu/create?access_token='.$access_token;
        $res = $this->http_curl($url,'post','arr',$jsoncode);
        if($res['errmsg']=='ok'){
            print_r("成功！请登录微信查看！");
        }else{
            include "error.php";
            $errcode = 'err'.$res['errcode'];
            $errmsg = $errArr[$errcode];
            print_r($errmsg);
        }
//        print_r($res['errmsg']);
    }

    function getAccessToken($AppId, $AppSecret)
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $AppId . '&secret=' . $AppSecret;
        $res = $this->http_curl($url, 'get','arr');
        $access_token = $res['access_token'];
        return $access_token;
//        print_r($res);
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