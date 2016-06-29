function modifyRceord(event){
    $("ul.third-level li[alt='modify']").click();
    $("#form3-type").val($(this).parent().siblings().eq(1).text());
    $("#form3-ID").attr("value",$(this).parent().siblings().eq(0).text());
    $("#form3-name").attr("value",$(this).parent().siblings().eq(2).text());
    $("#form3-num").attr("value",$(this).parent().siblings().eq(3).text());
    $("#form3-date").attr("value",$(this).parent().siblings().eq(4).text());
    $("#form3-source").attr("value",$(this).parent().siblings().eq(5).text());
    $("#form3-remark").attr("value",$(this).parent().siblings().eq(6).text());
}
$(document).ready(function(){
    $("a.modify").click(modifyRceord);
    $("a.delete").click(function () {
        if(confirm("是否确认删除？")){
            window.location.replace("")
        }else{
            return false;
        }
    })
});