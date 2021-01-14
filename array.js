var buah = ["mangga", "jeruk"];
var sayur = ["timun", "sop"];
var nilaiujian = [1, 2, 3, 4, , 5];
createlstybuah();
createlstsayuran();

function createlstybuah() {
  var lstbuah = "";
  for (var z = 0; z < buah.length; z++) {
    console.log(buah[z]);
    lstbuah = lstbuah + "<li>" + buah[z] + "</li>";
  }
  console.log(lstbuah);
  document.getElementById("buah").innerHTML = lstbuah;
}
function createlstsayuran() {
  var lstsayuran = "";
  var counter = 0;
  while (counter < sayur.length) {
    lstsayuran = lstsayuran + "<li>" + sayur[counter] + "</li>";
    counter++;
  }

  document.getElementById("sayur").innerHTML = lstsayuran;
}
function tambahbuah(namabuah) {
  if (buah.length >= 10) {
    alert("tidak boleh lebih dari 10");
  } else {
    if (caribuahsama(namabuah)) {
      alert("sudah ada");
    } else {
      buah.push(namabuah);
      createlstybuah();
    }
  }
}

function caribuahsama(nb) {
  for (var i = 0; i < buah.length; i++) {
    if (buah[i] === nb) {
      return true;
    }
  }
  return false;
}

function tambahsayur(namasayur) {
  if (sayur.length >= 10) {
    alert("tidak boleh lebih dari 10");
  } else {
    if (carisayursama(namasayur)) {
      alert("sudah ada");
    } else {
      sayur.push(namasayur);
      createlstsayuran();
    }
  }
}

function carisayursama(nb) {
  for (var i = 0; i < sayur.length; i++) {
    if (sayur[i] === nb) {
      return true;
    }
  }
  return false;
}
function tambahitem(namaitem, jnsitem) {
  switch (jnsitem) {
    case buah:
      tambahbuah(namaitem);
      break;
    case sayur:
      tambahsayur(namaitem);
      break;
  }
}
