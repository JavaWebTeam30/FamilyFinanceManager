function modifyRceord(event){
    $("ul.third-level li[alt='updateaction']").click();
    $("#update-form input[name='ID']").val($(this).parent().siblings().eq(0).text());
    $("#update-form input[name='account']").val($(this).parent().siblings().eq(1).text());
    $("#update-form input[name='stock']").val($(this).parent().siblings().eq(2).text());
    $("#update-form input[name='danjia']").val($(this).parent().siblings().eq(4).text());
    $("#update-form input[name='count']").val($(this).parent().siblings().eq(5).text());
    $("#update-form input[name='time']").val($(this).parent().siblings().eq(6).text());
    if($(this).parent().siblings().eq(3).text()=="卖出"){
        $("#update-form input[value='sell']").click();
    }else{
        $("#update-form input[value='buy']").click();
    }

}
$(document).ready(function(){
    $("a.modify").click(modifyRceord);
    $("#reset-btn").click(function () {
        $("#search-form input[type='text']").val("");
        $("#search-form input[value='sell']").click();
    });
    $("a.delete").click(function () {
        if(confirm("是否确认删除？")){
            window.location.replace("")
        }else{
            return false;
        }
    })
});