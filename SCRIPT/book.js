function clearAll(){
    
    const re = document.querySelector('.re').style;
    const bo = document.querySelector('.bo').style;
    const vi = document.querySelector('.vi').style;
    const wa = document.querySelector('.wa').style;

    const ar = [re, bo, vi, wa];

    for (i in ar){
        ar[i].display = "none";
    }
    
    const b = document.querySelector('.book').style;
    const v = document.querySelector('.video').style;
    const w = document.querySelector('.web').style;

    const li = [b, v, w];

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

function book(){
    const book = document.querySelector('.book').style;
    const bo = document.querySelector('.bo').style;
    all(book, bo)
}

function video(){
    const video = document.querySelector('.video').style;
    const vi = document.querySelector('.vi').style;
    all(video, vi)
}

function web(){
    const web = document.querySelector('.web').style;
    const wa = document.querySelector('.wa').style;
    all(web, wa)
}