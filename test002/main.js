$(function(){
    $("input").on("click",function(){
        var numberList = $("li").length;
        var random = Math.floor(Math.random()*numberList);
        $("h1").text($("li").eq(random).text());
        var obj = document.getElementById("img");
        if(random == 1)
            obj.innerHTML = "<img src=\"ramen.jpg\">";
        else if(random == 0)
            obj.innerHTML = "<img src=\"data:image/jpeg;base64,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\">";
        else
            obj.innerHTML = "<img src=\"https://www.yzu.edu.tw\">";
    });
});