<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/index.css">
        <script src="./main.js"></script>
        <script src="./json.js"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
        <script>

        </script>

    </head>

<body>
    <div class="container">
        <div class="page-header" >
            <h1 >
                微信自定义菜单生成器 <small>WeChat Menu Define</small>
            </h1>
        </div>
        <h2><small>使用前请先阅读使用说明</small></h2>
        <div class="center">
            <div class="panel-group" id="panel-883380">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <a class="panel-title" data-toggle="collapse" data-parent="#panel-883380" href="#panel-element-670795"  >生成代码模式（生成json格式代码）</a>
                    </div>
                    <div id="panel-element-670795" class="panel-collapse in">
                        <div class="panel-body" id = 'target1'>

                            <!--------------------------------表单部分1-------------------------->
                            <form class="main-form" action="jsoncreat.php" method="post" id="main-form">
                                <table class="table" id="main-table">
                                    <tr >
                                        <td >
                                            <button type="button" class="btn btn-primary btn-sm" onclick=" add_First() ">添加一级菜单</button>
                                        </td>
                                    </tr>
                                    <tr id="over">
                                    </tr>
                                </table>
                                <tr >
<!--                                    <input type="button" class="btn btn-default btn-primary" value="生成代码" onclick="tijiaoTonew()">-->
                                    <!-------------遮罩层---------------->
                                    <div class="col-md-2 column">
                                        <a id="modal-947737" href="#modal-container-947737" role="button" class="btn btn-default btn-primary" data-toggle="modal" onclick="tijiao()">生成代码</a>

                                        <div class="modal fade" id="modal-container-947737" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                        <h4 class="modal-title" id="myModalLabel">
                                                            Json代码：
                                                        </h4>
                                                    </div>
                                                    <div class="modal-body" id="result-data">
                                        <pre>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal"  >关闭</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <!-------------遮罩层---------------->
                                </tr>
                            </form>


                            <!-----------------------------表单部分1END--------------------->

                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <a class="panel-title collapsed" data-toggle="collapse" data-parent="#panel-883380" href="#panel-element-72660" >导入模式（自动导入微信公众号）</a>
                    </div>
                    <div id="panel-element-72660" class="panel-collapse collapse">
                        <div class="panel-body" id = 'target1'>
                            <!-------------------------------表单部分2START------------------------------------->
                            <form class=" main-form" id = 'user-info-form'>
                                    <tr>
                                        <div class="form-group " >
                                            <label for="AppId">AppId <span style="color: red"><strong><big>*</big></strong></span></label><input type="text" class="form-control" id="AppId" />
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="form-group">
                                            <label for="AppSecret">AppSecret <span style="color: red"><strong><big>*</big></strong></span></label><input type="text" class="form-control" id="AppSecret" />
                                        </div>
                                    </tr>
                                    <tr>
                                        <button type="button" class="btn btn-default btn-primary" onclick="tijiaoinfo()">提交信息获得原始菜单</button>
                                    </tr>
                                <hr>
                            </form>
                            <form class="main-form" action="jsoncreat.php" method="post" id="second-form">
                                <table class="table" id="main-table">
                                    <tr >
                                        <td >
                                            <button type="button" class="btn btn-primary btn-sm" onclick=" add_First_t() ">添加一级菜单</button>
                                        </td>
                                    </tr>
                                    <tr id="over_t">
                                    </tr>
                                </table>
                                <tr >
                                    <input type="button" class="btn btn-default btn-primary" value="生成代码并导入" onclick="CreatToWeiXin()">
                                </tr>
                            </form>


                            <!-----------------------------表单部分2END------------------------------>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr></br>

            <div class="col-md-12 column">
                <div class="row clearfix">
                    <div class="col-md-6 column">
                        <div class="jumbotron well">
                            <h3>
                                使用说明
                            </h3>
                            <dl>
                                <dt><big>微信官方文档要求:</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.自定义菜单最多包括3个一级菜单，每个一级菜单最多包含5个二级菜单</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.一级菜单最多4个汉字，二级菜单最多7个汉字，多出来的部分将会以“...”代替</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.创建自定义菜单后，菜单的刷新策略是，在用户进入公众号会话页或公众号profile页时，如果发现上一次拉取菜单的请求在5分钟以前，就会拉取一下菜单，如果菜单有更新，就会刷新客户端的菜单。测试时可以尝试取消关注公众账号后再次关注，则可以看到创建后的效果</dd>
                                <button type="button" class="btn btn-default btn-link"><a href="https://mp.weixin.qq.com/wiki" target="_blank">微信官方文档>></a></button>
                                <dt><big>本工具说明：</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.本工具不会以任何形式保存输入的appid和appsecret，但是session中会保存，用完务必关闭浏览器以清除敏感数据</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.本生成器可以生成微信公众账号大部分菜单类型。具体类型与功能详见类型按钮说明</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.可在菜单中加入表情，请参考Emoji对照表</dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.点击“生成菜单”如果没有反应，请刷新页面再试</dd>
                                <dd style="color: red"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.一级菜单默认类型为弹出，即包含二级菜单，此时只需要填写名称，当不包含二级菜单时，务必切换到相应类型</strong></dd>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.当按钮类型为弹出以外其他类型时，url或key值均可填写在"值"内，本工具会自动根据类型转换</dd>
                                <dt><big>生成代码模式</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建好相应菜单后，点击生成代码，可以产生相应的json代码，将其粘贴到相应位置，即可实现功能</dd>
                                <dt><big>导入模式</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;填写AppId和AppSecret后，导入模式能够获取已有的历史菜单信息，不需要全部重新编辑，减少了修改菜单时的工作量。
                                    且此模式下可以自动导入微信服务器</dd>
                            </dl>

                        </div>
                    </div>
                    <div class="col-md-6 column">
                        <div class="jumbotron well">
                            <h3>
                                类型按钮说明
                            </h3>
                            <dl>
                                <dt><big>事件</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事件用户点击click类型按钮后，微信服务器会通过消息接口推送消息类型为event的结构给开发者（参考消息接口指南），并且带上按钮中开发者填写的key值，开发者可以通过自定义的key值与用户进行交互；</dd>
                                <dt><big>跳转</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;跳转URL用户点击view类型按钮后，微信客户端将会打开开发者在按钮中填写的网页URL，可与网页授权获取用户基本信息接口结合，获得用户基本信息。</dd>
                                <dt><big>发送位置</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弹出地理位置选择器用户点击按钮后，微信客户端将调起地理位置选择工具，完成选择操作后，将选择的地理位置发送给开发者的服务器，同时收起位置选择工具，随后可能会收到开发者下发的消息。</dd>
                                <dt><big>微信相册发图</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弹出微信相册发图器用户点击按钮后，微信客户端将调起微信相册，完成选择操作后，将选择的相片发送给开发者的服务器，并推送事件给开发者，同时收起相册，随后可能会收到开发者下发的消息。</dd>
                                <dt><big>拍照或者相册发图</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弹出拍照或者相册发图用户点击按钮后，微信客户端将弹出选择器供用户选择“拍照”或者“从手机相册选择”。用户选择后即走其他两种流程。</dd>
                                <dt><big>系统拍照发图</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;弹出系统拍照发图用户点击按钮后，微信客户端将调起系统相机，完成拍照操作后，会将拍摄的相片发送给开发者，并推送事件给开发者，同时收起系统相机，随后可能会收到开发者下发的消息。</dd>
                                <dt><big>扫码推事件</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扫码推事件且弹出“消息接收中”提示框用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后，将扫码的结果传给开发者，同时收起扫一扫工具，然后弹出“消息接收中”提示框，随后可能会收到开发者下发的消息。</dd>
                                <dt><big>扫码带提示</big></dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扫码推事件用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后显示扫描结果（如果是URL，将进入URL），且会将扫码的结果传给开发者，开发者可以下发消息。</dd>
                            </dl>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



</body>

    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</html>