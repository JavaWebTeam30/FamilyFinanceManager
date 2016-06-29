/**
 * Created by HyoukaNa on 2016/6/29.
 */

function securities_reset() {
    document.getElementById("secuser").value="";
    document.getElementById("startline").value="";
    document.getElementById("startline").placeholder="开始时间";
    document.getElementById("endline").value="";
    document.getElementById("endline").placeholder="截止时间";
    document.getElementById("tradetype").value="all";
    document.getElementById("resultOfSearch").innerHTML="";
}

function securities_search() {
    document.getElementById("resultOfSearch").innerHTML="" +
        "<tr>" +
        "<td>201607011024161548</td>" +
        "<td>卖出</td>" +
        "<td>2016-07-01 10:24</td>" +
        "<td>10000</td>" +
        "<td>" +
        "<button type=\"button\" id=\"item_modify\" onclick=\"securities_modify()\">修改</button>" +
        "<button type=\"button\" id=\"item_delete\" onclick=\"securities_delete()\">删除</button>" +
        "<button type=\"button\" id=\"item_details\" onclick=\"securities_details()\">详情</button>" +
        "</td>" +
        "</tr>";
}

function securities_delete()
{
    var se=confirm("确认删除？");
    if (se==true)
    {
        alert("该交易单已删除");
    }
}
$("#sec_create").click(function () {
    $("ul.third-level li[alt='createaction']").click();
});

$("#details_back").click(function () {
    $("ul.third-level li[alt='tradelists-manager']").click();
});

$("#create_submit").click(function () {
    $("ul.third-level li[alt='tradelists-manager']").click();
});

$("#modify_submit").click(function () {
    $("ul.third-level li[alt='tradelists-manager']").click();
});

$("#sec_modify").click(function () {
    $("ul.third-level li[alt='updateaction']").click();
});

$("#sec_details").click(function () {
    $("ul.third-level li[alt='detailsaction']").click();
});
