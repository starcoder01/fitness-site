function myfun()
{
    var a=document.getElementById("myDropdown");
    if(a.style.display=="none"){
        a.style.display="flex";
        a.style.flexDirection="column";
        a.style.position="relative";
        a.style.top="10%";
    }
    else
        a.style.display="none";
}