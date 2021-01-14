function kalkulasi(){
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    document.getElementById("hasil").value = tambah(a,b);
}
function tambah(a,b){
    return a+b;
}