function Ogretmen(isim) {
  this.isim = isim;
  this.meslek = "Öğretmen";
}

function Ogrenci(isim) {
  this.isim = isim;
  this.meslek = "Öğrenci";
}

function Mudur(isim) {
  this.isim = isim;
  this.meslek = "Müdür";
}

function OkulFactory() {
  this.create = (isim, meslek) => {
    if (meslek === "Öğretmen") {
      return new Ogretmen(isim);
    }
    if (meslek === "Öğrenci") {
      return new Ogrenci(isim);
    }
    if (meslek === "Müdür") {
      return new Mudur(isim);
    }
  };
}

function meslekGoster() {
  console.log(this.isim + " adlı kişinin mesleği: " + this.meslek);
}

const okulFactory = new OkulFactory();
const kisiler = [];

kisiler.push(okulFactory.create("Taha Tepedelen", "Öğretmen"));
kisiler.push(okulFactory.create("Berkay Burak", "Öğrenci"));
kisiler.push(okulFactory.create("Emre Yie", "Öğrenci"));
kisiler.push(okulFactory.create("Cihan Yetişken", "Müdür"));

kisiler.forEach(kisi => {
  meslekGoster.call(kisi);
});
