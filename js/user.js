function modifyRceord(event){
    $("ul.third-level li[alt='modify']").click();
    var tags=["#form3-name","#form3-password","#form3-account","#form3-wage","#form3-call","#form3-age","#form3-ID"]
    for(var i=0;i<7;i++){
    	$(tags[i]).attr("value",$(this).parent().siblings().eq(i).text());
    }
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
});
