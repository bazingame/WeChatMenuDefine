<?php
error_reporting(0);
$JC = new Jsoncreat();
$param = $JC->translate();

class Jsoncreat{
    public function translate(){
        $param = $this->getParam();
        if($param[0]>0){
            $data = $this->postDataToArr($param[0]);
            $jsonRes = $this->dataToWeixinJson($data,$param[0],$param[1]);
            print_r($jsonRes);
        }else{
            print_r("什么也没有！");
        }
    }
    //获取一级菜单二级菜单的数目
    public function getParam(){
        $First = $_GET['First'];
        $Sec = $_GET['Second'];
        $Second = Array( substr($Sec , 0 ,1)-1,substr($Sec , 1 ,1)-1,substr($Sec , 2 ,1)-1,);
        $param = array($First,$Second);
        return $param;
    }
//将post过来的数据存入data数组
    public function postDataToArr($First)
    {
        $nameArr = array('type', 'name', 'key');
        for ($i = 0; $i < $First + 1; $i++) {
            for ($j = 0; $j < 7; $j++) {
                for ($n = 0; $n < 3; $n++) {
                    $name = $i . $j . $nameArr[$n];
                    if (isset($_POST[$name])) {
                        if ($_POST[$name] == 'view') {                  //type 为view时，key修改为url
                            $name = $i . $j;
                            $data[$i][$j]['type'] = $_POST[$name . 'type'];
                            $data[$i][$j]['name'] = $_POST[$name . 'name'];
                            $data[$i][$j]['url'] = $_POST[$name . 'key'];
                            break;
                        } else {
                            $data[$i][$j][$nameArr[$n]] = $_POST[$name];
                        }
                    }
                }
            }
        }
        return $data;
    }
//    print_r($data);

//按照微信格式将data数组转换
    public function dataToWeixinJson($data, $First, $Second)
    {
        $res = array();
        for ($i = 0; $i < $First; $i++) {
            if ($data[$i + 1][0]['type'] != 'son') {
                $res[$i] = $data[$i + 1][0];
            } else {
                $sub_button = array();
                for ($j = 0; $j < $Second[$i]; $j++) {
                    $sub_button[$j] = $data[$i + 1][$j + 1];
                }
                $res[$i] = array(
                    "name" => $data[$i + 1][0]['name'],
                    "sub_button" => $sub_button,
                );
            }
        }
        $res = array(
            "button" => $res,
        );
//转换为json格式
        $jsonRes = json_encode($res,JSON_UNESCAPED_UNICODE);
        return $jsonRes;
    }
}


?>