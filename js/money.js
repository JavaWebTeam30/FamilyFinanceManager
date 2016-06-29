function modifyRceord(event){
    $("ul.third-level li[alt='modify']").click();
    var tags=["#form3-type","#form3-name","#form3-num","#form3-date","#form3-source","#form3-remark"]
    for(var i=0;i<6;i++){
    	$(tags[i]).attr("value",$(this).parent().siblings().eq(i).text());
    }
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