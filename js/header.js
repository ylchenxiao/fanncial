//header 头部 
document.writeln("<div class=\'header_box1\'>");
document.writeln("    <div class=\'header_box2\'>");
document.writeln("         <a class=\'logo_box\' href=\'index.html\'><img src=\'images/logo.png\'/></a>");
document.writeln("         <ul class=\'nav_box\'>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'index.html\'>网站首页</a></li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'guanyuhuaqi.html\'>上市辅导</a>");
document.writeln("               <div class=\'nav_slide\'>");
document.writeln("                 <div class=\'nav_slide1\'>");
document.writeln("                    <a href=\'\'>要求条件<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>详细流程<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>上市申请<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                 </div>");
document.writeln("                </div> ");
document.writeln("             </li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'yewujieshao.html\'>热点信息</a>");
document.writeln("                <div class=\'nav_slide\'>");
document.writeln("                  <div class=\'nav_slide1\'>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>待定<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                  </div>");
document.writeln("                </div> ");
document.writeln("             </li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'xinwenzhongxin.html\'>日常更新</a>");
document.writeln("               <div class=\'nav_slide\'>");
document.writeln("                <div class=\'nav_slide1\'>");
document.writeln("                    <a href=\'\'>行业最新动态<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>交易所动态<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                 </div>");
document.writeln("               </div>  ");
document.writeln("             </li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'chenggonganli.html\'>常见问题</a>");
document.writeln("               <div class=\'nav_slide\'>");
document.writeln("                 <div class=\'nav_slide1\'>");
document.writeln("                    <a href=\'\'>关于费用<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>关于售后<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>关于XX<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                 </div>");
document.writeln("              </div>  ");
document.writeln("             </li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'lianxiwomen.html\'>联系我们</a>");
document.writeln("               <div class=\'nav_slide\'>");
document.writeln("                 <div class=\'nav_slide1\'>");
document.writeln("                    <a href=\'\'>公司简介<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>公司新闻<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>未来发展<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                    <a href=\'\'>联系方式<span><img src=\'images/siade_bg1.png\'/></span></a>");
document.writeln("                 </div>");
document.writeln("              </div>  ");
document.writeln("             </li>");
document.writeln("             <li class=\'nav_1\'><a class=\'nav_but\' href=\'liuyanban.html\'>留言板</a></li>");
document.writeln("         </ul>");
document.writeln("    </div>");
document.writeln("");
document.writeln("</div>");
//document.writeln("<script type=\'text/javascript\' src=\'js/header.js\'></script>");
$(".nav_1").mouseenter(function(){
    $(this).find(".nav_slide").slideDown()
});

$(".nav_1").mouseleave(function(){ 
    $(".nav_slide").slideUp()
});
/*鼠标移过，左右按钮显示*/
$(".banner_box").hover(function(){
    $(this).find(".prev,.next").fadeTo("show",0.1);
},function(){
    $(this).find(".prev,.next").hide();
})
/*鼠标移过某个按钮 高亮显示*/
$(".prev,.next").hover(function(){
    $(this).fadeTo("show",0.7);
},function(){
    $(this).fadeTo("show",0.1);
})
$(".banner_box").slide({ titCell:".num ul" , mainCell:".banner_pic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
