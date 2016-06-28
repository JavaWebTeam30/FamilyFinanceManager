function setFixLi(){
    var temp=0;
    $("ul.third-level li[class!='fix']").each(function(){
        temp+=$(this).innerWidth();
    })
    $("ul.third-level li.fix").css("width",$("ul.third-level").width()-temp-10);
}

$(document).ready(function(){
    $("ul.tow-level").hide();
    $("ul span").click(function(event){
        $(event.target).next().slideToggle();
    });
    setFixLi();
    $(window).resize(setFixLi);
});