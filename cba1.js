var buah = ["Mangga", "Pisang", "Nangka", "Semangka", "Durian"];
var sayuran = ["Timun", "Wortel", "Tomat"];
var tbhaddbuah = [1, 2];
function kalkulasi(){
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    document.getElementById("hasil").value = tambah(a,b);
}
function tambah(a,b){
    return a+b;
}


  function tbladd(namabox) {
    namabox="boxisidata";
    var x = document.getElementById(namabox);
    console.log("auuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //mulai disini

createListBuah();
createListSayur();

// document.getElementById("boxisidata").style.display="none";
function createListBuah() {
    var lstBuah = "";
   var txtBuah1="k";
    for (var z = 0; z < buah.length; z++) {
var cda=0;

        // lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd()'>Click Me</button>" + "</li>" + "  <div id='boxisidata' style='display:none;'> This is my DIV element. </div>" ; 
        lstBuah = lstBuah + "<li>" + buah[z] + "<button onclick='tbladd2("+z+")'>+</button>" + "  <div id='boxisidata"+z+"' style='display:none;'>  <input type='text' id='txtBuah1"+z+"'/>  <button id='btnAddBuah' onclick=tambahBuah(document.getElementById('txtBuah1"+z+"').value)>Tambah Buah</button>  </div>"  + "</li>"; 
      
    }
    console.log(lstBuah);
    document.getElementById("buah").innerHTML = lstBuah;
}
function tbladd2(addnmr) {
    var namabox1="boxisidata"+addnmr;

    console.log(namabox1);
    // buah.push(namaBuah);
    // createListBuah();
    // document.getElementById(namabox1).style.display = "block";
    var x = document.getElementById(namabox1);
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    // tbhaddbuah.push(namaBuah);
            // createListBuah();
  }
  function btntambah(){

  }
function createListSayur() {
    var lstSayuran = "";
    var counter = 0;
    while (counter < sayuran.length) {

        lstSayuran += "<li>" + sayuran[counter] + "</li>";
        counter++;

    }

    console.log(lstSayuran);
    document.getElementById("sayuran").innerHTML = lstSayuran;
}




function tambahBuah(namaBuah) {


    if (buah.length >= 10) {
        alert("Maaf jumlah buah tidak dapat lebih daripada 10")
    } else {

       
        if (cariBuahSama(namaBuah)) {
            alert("Maaf  buah Sudah diinput");
        } else {
            buah.push(namaBuah);
            createListBuah();
        }
    }

}

 
function cariBuahSama(namaBuah) {
 
    for (var i = 0; i < buah.length; i++) {
 
        if (buah[i].toLowerCase() === namaBuah.toLowerCase()) {
            return true;
        }

    }
    return false;

}

function tambahSayur(namaSayur) {


    if (sayuran.length >= 10) {
        alert("Maaf jumlah sayur tidak dapat lebih daripada 10")
    } else {

       
        if (cariSayurSama(namaSayur)) {
            alert("Maaf  sayur Sudah diinput");
        } else {
            sayuran.push(namaSayur);
            createListSayur();
        }
    }

}

 
function cariSayurSama(namaSayur) {
 
    for (var i = 0; i < sayuran.length; i++) {
 
        if (sayuran[i].toLowerCase() === namaSayur.toLowerCase()) {
            return true;
        }

    }
    return false;

}


 function tambahItem(namaItem,jenisItem){
    switch(jenisItem){
    
    case "buah" :  
      tambahBuah(namaItem);
      break;
    case "sayur" : 
      tambahSayur(namaItem);
      
      break;
    
    
    }
 }
