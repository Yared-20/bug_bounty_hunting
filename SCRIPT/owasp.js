function clearAll(){
    
    const ow = document.querySelector('.ow').style;
    const tt = document.querySelector('.tt').style;
    const zt = document.querySelector('.zt').style;
    const gt = document.querySelector('.gt').style;

    const ar = [ow, tt, zt, gt];

    for (i in ar){
        ar[i].display = "none";
    }
    
    const o10 = document.querySelector('.o10').style;
    const oZ = document.querySelector('.oZ').style;
    const oG = document.querySelector('.oG').style;

    const li = [o10, oZ, oG];

    for (i in li){
        li[i].backgroundColor = "#bacfeb";
        li[i].color = "blue";
    }
}

function all(x, y){

    clearAll()

    y.display = "block";

    x.backgroundColor = "#50d0fa";
    x.color = "white";

    const si = document.querySelector('.side').style;
    si.backgroundColor = "rgb(5, 244, 45)";
    si.color = "white";
}

function o10(){
    const o10 = document.querySelector('.o10').style;
    const tt = document.querySelector('.tt').style;
    all(o10, tt)
}

function oZ(){
    const oZ = document.querySelector('.oZ').style;
    const zt = document.querySelector('.zt').style;
    all(oZ, zt)
}

function oG(){
    const oG = document.querySelector('.oG').style;
    const gt = document.querySelector('.gt').style;
    all(oG, gt)
}