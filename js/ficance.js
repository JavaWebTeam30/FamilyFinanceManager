/**
 * Created by yang on 16-6-30.
 */
$(document).ready(function () {

    $("a.delete").click(function () {
        var temp=$(this).parent().siblings();
        var that=$(this).parent().parent();
        if(confirm("是否确认删除？")){
            $.post("",{
                service:"delete",
                id:temp.eq(1).text(),
            },function (data,status) {
                data=data.trim();
                if(data=="true"){
                    alert("删除成功");
                    that.remove();
                }else{
                    alert("删除失败");
                }
            });
        }else{
            return false;
        }
    })
});
