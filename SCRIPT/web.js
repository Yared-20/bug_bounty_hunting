function clearAll(){
    const wd = document.querySelector('.wd').style;
    const ht = document.querySelector('.ht').style;
    const jst = document.querySelector('.jst').style;
    const pht = document.querySelector('.pht').style;
    const pyt = document.querySelector('.pyt').style;
    const st = document.querySelector('.st').style;
    const mt = document.querySelector('.mt').style;

    const ar = [wd, ht, jst, pht, pyt, st, mt];
    
    for (i in ar){
        ar[i].display = "none";
    }

    const html = document.querySelector('.html').style;
    const js = document.querySelector('.js').style;
    const php = document.querySelector('.php').style;
    const py = document.querySelector('.py').style;
    const sql = document.querySelector('.sql').style;
    const mdb = document.querySelector('.mdb').style;

    const li = [html, js, php, py, sql, mdb];

    for (i in li){
        li[i].backgroundColor = "#bacfeb";
        li[i].color = "blue";
    }

    const fe = document.querySelector('.fe').style;
    const be = document.querySelector('.be').style;
    const db = document.querySelector('.db').style;

    const si = [fe, be, db];

    for (i in si){
        si[i].backgroundColor = "#bacfeb";
        si[i].color = "black";
    }
}

function all(x, y, z){
    clearAll()
    
    z.display = "block";

    x.backgroundColor = "#50d0fa";
    x.color = "white";

    y.backgroundColor = "rgb(5, 244, 45)";
    y.color = "white";
}

function html(){
    const html = document.querySelector('.html').style;
    const fe = document.querySelector('.fe').style;
    const ht = document.querySelector('.ht').style;
    all(html, fe, ht)
}

function js(){
    const js = document.querySelector('.js').style;
    const fe = document.querySelector('.fe').style;
    const jst = document.querySelector('.jst').style;
    all(js, fe, jst)
}

function php(){
    const php = document.querySelector('.php').style;
    const be = document.querySelector('.be').style;
    const pht = document.querySelector('.pht').style;
    all(php,be, pht)
}

function py(){
    const py = document.querySelector('.py').style;
    const be = document.querySelector('.be').style;
    const pyt = document.querySelector('.pyt').style;
    all(py, be, pyt)
}

function sql(){
    const sql = document.querySelector('.sql').style;
    const db = document.querySelector('.db').style;
    const st = document.querySelector('.st').style;
    all(sql, db, st)
}

function mdb(){
    const mdb = document.querySelector('.mdb').style;
    const db = document.querySelector('.db').style;
    const mt = document.querySelector('.mt').style;
    all(mdb, db, mt)
}