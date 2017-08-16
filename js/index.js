//首页
(function () {
    var inp1=document.getElementById("myLi");
    if (inp1!=null) {
        var time=setTimeout(function (){
            inp1.setAttribute("checked","checked");
        },1000);
    }
})();


//key页的
(function () {
    var inp2=null;
    var btn =document.getElementsByClassName("submit")[0];
    var succe =document.getElementById("succe");
    var err =document.getElementById("err");
    if (succe!=null) {
        btn.addEventListener("click",function () {
            inp2=document.getElementsByClassName("number")[0];
            var mun2=/\d{11}/i;
            if(mun2.test(inp2.value)== !null){
                succe.setAttribute("checked","checked");
            }else{
                err.setAttribute("checked","checked");
            }
        });
    }
    var Reset=document.getElementsByClassName("reset")[0];
    if (Reset!=null) {
        Reset.addEventListener("click",function () {
            window.location="Key.html";
        })
    }
})();



//信息
(function () {
    var name1=document.getElementsByClassName("name")[0];
    var telephone=document.getElementsByName("telePhone")[0];
    var address=document.getElementsByName("address")[0];
    var day=document.getElementsByName("day")[0];
    var btn=document.getElementsByName("submit")[0];
    var succee =document.getElementById("succee");
    var err2 =document.getElementById("err2");
    var panduanName=/^1[34579]\d{9}$/i;
    var panduanPhone=/\d/i;
    var panduanAddress=["广州","清远","韶关","佛山","惠州","肇庆","江门","珠海","河源","揭阳","汕尾","梅州","潮州","深圳","东莞","阳江","汕头","湛江","茂名","海口","三亚"];
    var panduanDay=[101,102,103,104,105,106,107];
    if (btn!=null&&err2!=null) {
        var inp_name,inp_phone,inp_addre,inp_day;
        btn.addEventListener("click",function () {

            if (name1.value!=null&&telephone.value!=null&&address.value!=null&&day.value!=null) {
                //判断姓名
                if (panduanName.test(name1.value)==!null) {
                    inp_name=1;
                }else{
                    inp_name=0;
                }
                //判断电话
                if (panduanPhone.test(telephone.value)==!null) {
                    inp_phone=1;
                }else{
                    inp_phone=0;
                }
                //判断地址
                if (panduanAddress.indexOf(address.value)!=-1) {
                    inp_addre=1;
                }else{
                    inp_addre=0;
                }
                //判断日期
                if (panduanDay.indexOf(parseInt(day.value))!=-1) {
                    inp_day=1;
                }else{
                    inp_day=0;
                }

                if (inp_name==1&&inp_addre==1&&inp_day==1&&inp_phone==1) {
                    succee.setAttribute("checked","checked");
                } else{
                    err2.setAttribute("checked","checked");
                }
            }else{
                err2.setAttribute("checked","checked");
            }
        })

    }
    var Reset2=document.getElementsByClassName("reset2")[0];
    if (Reset2!=null) {
        Reset2.addEventListener("click",function () {
            window.location="register.html";
        })
    }

})();
