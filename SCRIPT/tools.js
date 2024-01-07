function clearAll(){

    const to = document.querySelector('.to').style;
    const rt = document.querySelector('.rt').style;
    const sc = document.querySelector('.sc').style;
    const et = document.querySelector('.et').style;

    const ar = [to, rt, sc, et];

    for (i in ar){
        ar[i].display = "none";
    }
    
    const r = document.querySelector('.recon').style;
    const s = document.querySelector('.scann').style;
    const e = document.querySelector('.exploit').style;

    const li = [r, s, e];

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

function recon(){
    const recon = document.querySelector('.recon').style;
    const rt = document.querySelector('.rt').style;
    all(recon, rt)
}

function scann(){
    const scann = document.querySelector('.scann').style;
    const sc = document.querySelector('.sc').style;
    all(scann, sc)
}

function exploit(){
    const exploit = document.querySelector('.exploit').style;
    const et = document.querySelector('.et').style;
    all(exploit, et)
}