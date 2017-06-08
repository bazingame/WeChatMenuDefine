var i = 1;
var Firstnum = 0;
var iarr = new Array();
iarr[0]=iarr[1]=iarr[2] = 0;
function add_First(){
    for(temp=0;temp<3;temp++){      //防止i超过3
        if (iarr[temp]++ == 0){
            i = temp+1;
            break;
        }
        i=4;
    }
    if(i<=3) {
        Firstnum++;
        var idno = 'over'+i;
        var obj = document.getElementById("over");
        var Content = "<tr id="+idno+"><td><button type='button' class='btn btn-warning btn-xs' onclick=' add_Second"+i+"() '>添加二级菜单</button></div></td><td><span class='label label-success'>一级"+i+"菜单类型</span><select name='"+i+"0type' class='form-control'><option value='son'>弹出（二级菜单）</option><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='"+i+"0name' value='' class='form-control'></td><td><span>值</span><input type='text'  class='form-control' name='"+i+"0key'></td><td><button id = 'Bigbutton"+i+"' type='button' class='btn btn-danger btn-sm' onclick='RemoveFirst(this,this.id)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("beforeBegin", Content);
    }else{
        alert("一级菜单最多三个！");
    }
}
var m = new Array();
m[0]=m[1]=m[2]=1;
function add_Second1(){
    if(m[0]<=5) {
        var idon ='over1';
        var obj = document.getElementById(idon);
        var Content = "<tr ><td></td><td><span class='label label-info'>二级"+m[0]+"菜单类型</span><select name='1"+m[0]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' class='form-control' name='1"+m[0]+"name' value=''></td><td><span>值</span><input type='text' name='1"+m[0]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond(this,1)'>删除</button></td></tr>";
//                    Content = '11';
        obj.insertAdjacentHTML("afterEnd", Content);
        m[0]++;
    }else{
        alert("二级菜单最多五个！");
    }
}
function add_Second2(){
    if(m[1]<=5) {
        var idon ='over2';
        var obj = document.getElementById(idon);
        var Content = "<tr><td></td><td><span class='label label-info'>二级"+m[1]+"菜单类型</span><select name='2"+m[1]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='2"+m[1]+"name' class='form-control' value=''></td><td><span>值</span><input type='text' name='2"+m[1]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond(this,2)'>删除</button></td></tr>";
//                    Content = '11';
        obj.insertAdjacentHTML("afterEnd", Content);
        m[1]++;
    }else{
        alert("二级菜单最多五个！");
    }
}
function add_Second3(){
    if(m[2]<=5) {
        var idon ='over3';
        var obj = document.getElementById(idon);
        var Content = "<tr><td></td><td><span class='label label-info'>二级"+m[2]+"菜单类型</span><select name='3"+m[2]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='3"+m[2]+"name' class='form-control' value=''></td><td><span>值</span><input type='text' name='3"+m[2]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond(this,3)'>删除</button></td></tr>";
//                    Content = '11';
        obj.insertAdjacentHTML("afterEnd", Content);
        m[2]++;
    }else{
        alert("二级菜单最多五个！");
    }
}

function RemoveFirst(id,longid) {
    nnum = longid.charAt(longid.length-1);//nnum即为tr的i
    // alert(nnum);
    // for(var w=0;w<m[nnum-1];w++){                    //未完成部分，删除一级菜单的同时删除二级菜单
    //     alert(m[nnum-1]);
    //      RemoveSecond(id.parentNode.parentNode,nnum);
    // }
    id.parentNode.parentNode.parentNode.removeChild(id.parentNode.parentNode);
    /*flag_id = 'over'+nnum;
    flag_id.parentNode.removeChild(flag_id);*/
    iarr[nnum-1]=0;
    Firstnum--;
}

function RemoveSecond(id,num){
    id.parentNode.parentNode.parentNode.removeChild(id.parentNode.parentNode);
    m[num-1]--;
}

function tijiaoTonew() {
    var form = document.getElementById('main-form');
    form.action = 'jsoncreat.php?First='+Firstnum+'&Second='+m[0]+m[1]+m[2];
    form.submit();
}

// function ModelOneHide(){
//     // var target = document.getElementById('target1');
//     // target.style.display = "hidden";
//     alert("11");
// }

/*function ModelTwoHide(){
    var target = document.getElementById('target2');
    target.style.display = "hidden";
}*/

// function testqqq() {
//     alert("1213");
//
// }
function tijiao(){
    var form = new FormData(document.getElementById("main-form"));
    $.ajax({
        url:'jsoncreat.php?First='+Firstnum+'&Second='+m[0]+m[1]+m[2] ,
        type:"post",
        data:form,
        cache: false,
        processData: false,
        contentType: false,
        success:function(data){
            document.getElementById("result-data").innerHTML =data;
        },
        error:function(e){
            document.getElementById("result-data").innerHTML =e;
        }
    });
}

/*-----------------------------------------导入模式-----------------------------------------------*/
var i_t = 1;            //为了与生成代码模式相区别，变量后统一价上后缀'_t'
var Firstnum_t = 0;
var iarr_t = new Array();
iarr_t[0]=iarr_t[1]=iarr_t[2] = 0;

function tijiaoinfo(){
    var AppId = document.getElementById("AppId").value;
    var AppSecret = document.getElementById("AppSecret").value;
    if(AppId=='' || AppSecret==''){
        alert('*为必填手段！');
    }else {
        // alert(AppId);
        $.ajax({
            url: 'getOldMenu.php?AppId=' + AppId + '&AppSecret=' + AppSecret,
            type: "GET",
            data: '',
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                // alert(data);
                var jsonObj = JSON.parse(data);
                if (jsonObj.errcode == '41001') {
                    alert('AppId或AppSecret输入错误');
                } else{
                    printOldMenu(jsonObj);
                }
            },
            error: function (e) {
                alert('信息填写错误');
            }
        });
    }
}

function printOldMenu(jsonObj) {
    // alert(jsonObj.menu.button.length);
    var FirstButNum = jsonObj.menu.button.length;               //获取一级菜单个数
    var SecondButNum = new Array(3);
    SecondButNum[0] = SecondButNum[1] = SecondButNum[2] = 0;

    for (var i = 0;i < FirstButNum;i++){                        //获取二级菜单个数保存在数组中
        isSecond = getJsonLength(jsonObj.menu.button[i]);
        if(isSecond == '2'){
            SecondButNum[i] = jsonObj.menu.button[i].sub_button.length;
        }else{
            SecondButNum[i] = 0;
        }
    }

    //输出已知菜单
    for(var i = 0;i<FirstButNum;i++){
        //输出一级菜单
        print_First_t(jsonObj.menu.button[i],SecondButNum[i],i);
        for(var j = 0;j<SecondButNum[i];j++){
            //输出二级菜单
            switch (i) {
                case 0:
                    print_Second_t1(jsonObj.menu.button[i].sub_button[j]);
                    break;
                case 1:
                    print_Second_t2(jsonObj.menu.button[i].sub_button[j]);
                    break;
                case 2:
                    print_Second_t3(jsonObj.menu.button[i].sub_button[j]);
                    break
                default:
                    break;
            }
        }
    }

}

function print_First_t(FirstBut,SonNum,Num){        //根据获得的数据输出一级菜单
    var FirstType,FirstKey;
    if(SonNum != 0 ){
         FirstType = 0;  //弹出菜单
         FirstKey = '';
    }else if(FirstBut.type =='click' ){
        FirstType = 1;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='view' ){
        FirstType = 2;             //Selected = 'Selected
        FirstKey = FirstBut.url;
    }else if(FirstBut.type =='location_select' ){
        FirstType = 3;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='pic_weixin' ){
        FirstType = 4;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='pic_photo_or_album' ){
        FirstType = 5;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='pic_sysphoto' ){
        FirstType = 6;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='scancode_push' ){
        FirstType = 7;
        FirstKey = FirstBut.key;
    }else if(FirstBut.type =='scancode_waitmsg' ){
        FirstType = 8;
        FirstKey = FirstBut.key;
    }else{
        FirstKey = FirstBut.key;
    }
    iarr_t[Num] = 1;
    Firstnum_t++;
    var idno = 'over_t'+i_t;
    var obj = document.getElementById("over_t");
    var Content = "<tr id="+idno+"><td><button type='button' class='btn btn-warning btn-xs' onclick=' add_Second_t"+i_t+"() '>添加二级菜单</button></div></td><td><span class='label label-success'>一级"+i_t+"菜单类型</span><select name='"+i_t+"0type' id = '"+i_t+"0type' class='form-control'><option value='son'>弹出（二级菜单）</option><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='"+i_t+"0name' value='"+FirstBut.name+"' class='form-control'></td><td><span>值</span><input type='text'  class='form-control' name='"+i_t+"0key' value='"+FirstKey+"'></td><td><button id = 'Bigbutton"+i_t+"' type='button' class='btn btn-danger btn-sm' onclick='RemoveFirst_t(this,this.id)'>删除</button></td></tr>";
    obj.insertAdjacentHTML("beforeBegin", Content);
    setType(i_t+'0type',FirstType);
    i_t++;
}


var m_t = new Array();
m_t[0]=m_t[1]=m_t[2]=1;         //二级菜单计数
function  print_Second_t1(SecondBut) {
    var SecondType,SecondKey;
    if(SecondBut.type =='click' ){
        SecondType = 0;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='view' ){
        SecondType = 1;             //Selected = 'Selected
        SecondKey = SecondBut.url;
    }else if(SecondBut.type =='location_select' ){
        SecondType = 2;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_weixin' ){
        SecondType = 3;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_photo_or_album' ){
        SecondType = 4;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_sysphoto' ){
        SecondType = 5;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_push' ){
        SecondType = 6;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_waitmsg' ){
        SecondType = 7;
        SecondKey = SecondBut.key;
    }else {
        SecondKey = SecondBut.key;
    }//根据获得的数据输出二级菜单
        var idon ='over_t1';
        var obj = document.getElementById(idon);
        var Content = "<tr ><td></td><td><span class='label label-info'>二级"+m_t[0]+"菜单类型</span><select name='1"+m_t[0]+"type' id = '1"+m_t[0]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select ></td><td><span>名称</span><input type='text' class='form-control' name='1"+m_t[0]+"name' value="+SecondBut.name+"></td><td><span>值</span><input type='text' name='1"+m_t[0]+"key' class='form-control' value="+SecondKey+"></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,1)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("afterEnd", Content);
        setType('1'+m_t[0]+'type',SecondType);
        m_t[0]++;
}

function  print_Second_t2(SecondBut) {
    var SecondType,SecondKey;
    if(SecondBut.type =='click' ){
        SecondType = 0;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='view' ){
        SecondType = 1;             //Selected = 'Selected
        SecondKey = SecondBut.url;
    }else if(SecondBut.type =='location_select' ){
        SecondType = 2;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_weixin' ){
        SecondType = 3;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_photo_or_album' ){
        SecondType = 4;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_sysphoto' ){
        SecondType = 5;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_push' ){
        SecondType = 6;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_waitmsg' ){
        SecondType = 7;
        SecondKey = SecondBut.key;
    }else {
        SecondKey = SecondBut.key;
    }//根据获得的数据输出二级菜单
    var idon ='over_t2';
    var obj = document.getElementById(idon);
    var Content = "<tr ><td></td><td><span class='label label-info'>二级"+m_t[1]+"菜单类型</span><select name='2"+m_t[1]+"type' id = '2"+m_t[1]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' class='form-control' name='2"+m_t[1]+"name' value="+SecondBut.name+"></td><td><span>值</span><input type='text' name='2"+m_t[1]+"key' class='form-control' value="+SecondKey+"></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,2)'>删除</button></td></tr>";
    obj.insertAdjacentHTML("afterEnd", Content);
    setType('2'+m_t[1]+'type',SecondType);
    m_t[1]++;
}

function  print_Second_t3(SecondBut) {
    var FirstType,SecondKey;
    if(SecondBut.type =='click' ){
        SecondType = 0;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='view' ){
        SecondType = 1;             //Selected = 'Selected
        SecondKey = SecondBut.url;
    }else if(SecondBut.type =='location_select' ){
        SecondType = 2;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_weixin' ){
        SecondType = 3;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_photo_or_album' ){
        SecondType = 4;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='pic_sysphoto' ){
        SecondType = 5;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_push' ){
        SecondType = 6;
        SecondKey = SecondBut.key;
    }else if(SecondBut.type =='scancode_waitmsg' ){
        SecondType = 7;
        SecondKey = SecondBut.key;
    }else {
        SecondKey = SecondBut.key;
    }//根据获得的数据输出二级菜单
    var idon ='over_t3';
    var obj = document.getElementById(idon);
    var Content = "<tr ><td></td><td><span class='label label-info'>二级"+m_t[2]+"菜单类型</span><select name='3"+m_t[2]+"type' id = '3"+m_t[2]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' class='form-control' name='3"+m_t[2]+"name' value="+SecondBut.name+"></td><td><span>值</span><input type='text' name='3"+m_t[2]+"key' class='form-control' value="+SecondKey+"></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,3)'>删除</button></td></tr>";
    obj.insertAdjacentHTML("afterEnd", Content);
    setType('3'+m_t[2]+'type',SecondType);
    m_t[2]++;
}

function setType(id,type) {
    document.getElementById(id).options[type].selected = 'true';
}

function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength
}



function add_First_t(){
    for(temp=0;temp<3;temp++){      //防止i超过3
        if (iarr_t[temp]++ == 0){
            i_t = temp+1;
            break;
        }
        i_t=4;
    }
    if(i_t<=3) {
        Firstnum_t++;
        var idno = 'over_t'+i_t;
        var obj = document.getElementById("over_t");
        var Content = "<tr id="+idno+"><td><button type='button' class='btn btn-warning btn-xs' onclick=' add_Second_t"+i_t+"() '>添加二级菜单</button></div></td><td><span class='label label-success'>一级"+i_t+"菜单类型</span><select name='"+i_t+"0type' class='form-control'><option value='son'>弹出（二级菜单）</option><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='"+i_t+"0name' value='' class='form-control'></td><td><span>值</span><input type='text'  class='form-control' name='"+i_t+"0key'></td><td><button id = 'Bigbutton"+i_t+"' type='button' class='btn btn-danger btn-sm' onclick='RemoveFirst_t(this,this.id)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("beforeBegin", Content);
    }else{
        alert("一级菜单最多三个！");
    }
    // alert(i_t);

}

function add_Second_t1(){
    if(m_t[0]<=5) {
        var idon ='over_t1';
        var obj = document.getElementById(idon);
        var Content = "<tr ><td></td><td><span class='label label-info'>二级"+m_t[0]+"菜单类型</span><select name='1"+m_t[0]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' class='form-control' name='1"+m_t[0]+"name' ></td><td><span>值</span><input type='text' name='1"+m_t[0]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,1)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("afterEnd", Content);
        m_t[0]++;
    }else{
        alert("二级菜单最多五个！");
    }
}
function add_Second_t2(){
    if(m_t[1]<=5) {
        var idon ='over_t2';
        var obj = document.getElementById(idon);
        var Content = "<tr><td></td><td><span class='label label-info'>二级"+m_t[1]+"菜单类型</span><select name='2"+m_t[1]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='2"+m_t[1]+"name' class='form-control' ></td><td><span>值</span><input type='text' name='2"+m_t[1]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,2)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("afterEnd", Content);
        m_t[1]++;
    }else{
        alert("二级菜单最多五个！");
    }
}
function add_Second_t3(){
    if(m_t[2]<=5) {
        var idon ='over_t3';
        var obj = document.getElementById(idon);
        var Content = "<tr><td></td><td><span class='label label-info'>二级"+m_t[2]+"菜单类型</span><select name='3"+m_t[2]+"type' class='form-control'><option value='click'>事件</option><option value='view'>跳转</option><option value='location_select'>发送位置</option><option value='pic_weixin'>微信相册发图</option><option value='pic_photo_or_album'>拍照或者相册发图</option><option value='pic_sysphoto'>系统拍照发图</option><option value='scancode_push'>扫码推事件</option><option value='scancode_waitmsg'>扫码带提示</option></select></td><td><span>名称</span><input type='text' name='3"+m_t[2]+"name' class='form-control' ></td><td><span>值</span><input type='text' name='3"+m_t[2]+"key' class='form-control'></td><td><button type='button' class='btn btn-danger btn-sm' onclick='RemoveSecond_t(this,3)'>删除</button></td></tr>";
        obj.insertAdjacentHTML("afterEnd", Content);
        m_t[2]++;
    }else{
        alert("二级菜单最多五个！");
    }
}


function RemoveFirst_t(id,longid) {
    nnum = longid.charAt(longid.length-1);//nnum即为tr的i
    // alert(nnum);
    // for(var w=0;w<m[nnum-1];w++){                    //未完成部分，删除一级菜单的同时删除二级菜单
    //     alert(m[nnum-1]);
    //      RemoveSecond(id.parentNode.parentNode,nnum);
    // }
    id.parentNode.parentNode.parentNode.removeChild(id.parentNode.parentNode);
    /*flag_id = 'over'+nnum;
     flag_id.parentNode.removeChild(flag_id);*/
    iarr_t[nnum-1]=0;
    Firstnum_t--;
}


function RemoveSecond_t(id,num){
    id.parentNode.parentNode.parentNode.removeChild(id.parentNode.parentNode);
    m_t[num-1]--;
}

function CreatToWeiXin(){
    var form = new FormData(document.getElementById("second-form"));
    var userAppId =document.getElementById('AppId').value;
    var userAppSecret =document.getElementById('AppSecret').value;
    if(userAppId=='' || userAppSecret==''){
        alert('*为必填手段！');
    }else {
        $.ajax({
            url: 'jsoncreat.php?First=' + Firstnum_t + '&Second=' + m_t[0] + m_t[1] + m_t[2],
            type: "post",
            data: form,
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                sendToWeiXin(data, userAppId, userAppSecret);
                // alert(data);
            },
            error: function (e) {
            }
        });
    }
}

function sendToWeiXin(data,userAppId,userAppSecret) {
    $.ajax({
        url:'creatNewMenu.php?AppId='+userAppId+'&AppSecret='+userAppSecret,
        type:"post",
        data:data,
        cache: false,
        processData: false,
        contentType: false,
        success:function(res){
            // document.write(res);
            // document.getElementById('temptemp').innerHTML += res;
            alert(res);
        },
        error:function(e){
        }
    });
}

