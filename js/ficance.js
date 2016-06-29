/**
 * Created by yang on 16-6-30.
 */
$(document).ready(function () {
    $("a.delete").click(function () {
        if(confirm("是否确认删除？")){
            window.location.replace("")
        }else{
            return false;
        }
    })
});
