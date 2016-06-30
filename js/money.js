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
            $.get("",{},function (data,status) {
                if(data=="true"){
                    alert("已成功删除");
                    $(this).parent().parent().remove();
                }else{
                    alert("删除失败");
                }
            });
        }else{
            return false;
        }
    });
    $("#form1").unbind("submit");
    $("#form1").submit(function (){
        if(!$("#form1-date").val()&&!$("#form1-name").val()){
            alert("至少输入一个搜索条件");
            return false;
        }
    });
});