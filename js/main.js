function setFixLi(){
    var temp=0;
    $("ul.third-level li[class!='fix']").each(function(){
        temp+=$(this).innerWidth();
    })
    $("ul.third-level li.fix").css("width",$("ul.third-level").width()-temp-10);
}

function changoTab(event){
    $("#what div[name='"+$("ul.third-level li.current").attr("alt")+"']").hide();
    $("ul.third-level li.current").attr("class","");
    $(this).attr("class","current");
    $("#what div[name='"+$("ul.third-level li.current").attr("alt")+"']").show();
}
$(document).ready(function(){
    $("ul.tow-level").hide();
    $("ul span").click(function(event){
        $(event.target).next().slideToggle();
    });
    setFixLi();
    $(window).resize(setFixLi);
    $("#what div[name!='"+$("ul.third-level li.current").attr("alt")+"']").hide();
    $("ul.third-level li").click(changoTab);
});