function modifyRceord(event){
    $("ul.third-level li[alt='modify']").click();
    $("#form3-ID").attr("value",$(this).parent().siblings().eq(0).text());
    $("#form3-name").attr("value",$(this).parent().siblings().eq(1).text());
    $("#form3-num").attr("value",$(this).parent().siblings().eq(2).text());
}
$(document).ready(function(){
    $("a.modify").click(modifyRceord);
});