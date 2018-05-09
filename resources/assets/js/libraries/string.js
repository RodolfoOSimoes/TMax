function moneyReal(n, c, d, t) {
    c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function moneyRealSign(n, c, d, t) {
    return 'R$ ' + moneyReal(n, c, d, t);
}

function dateToStringBr(t){
    var e=t.getDate();

    1==e.toString().length&&(e="0"+e);

    var n=t.getMonth()+1;return 1==n.toString().length&&(n="0"+n),e+"/"+n+"/"+t.getFullYear()
}

function covertDateBr(a){
    return dateToStringBr(new Date(a + ' 03:00:00')); /* location */
}