function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe :function(abone) {
    this.observers.push(abone);
  },
  unsubscribe: function(f) {
    this.observers = this.observers.filter(abone=> {
      if(f!=abone) {
        return abone;
      }
    }) 
  },
  notify: function() {
    this.observers.forEach( abone => {
      abone.call();
    })
  }
}

const subject = new Subject();

function Kullanici1() {
  console.log('Kullanıcı 1e mesaj gönderildi.');
}

function Kullanici2() {
  console.log('Kullanıcı 2ye mesaj gönderildi.');
}

function Kullanici3() {
  console.log('Kullanıcı 3e mesaj gönderildi.');
}

subject.subscribe(Kullanici1);
subject.subscribe(Kullanici2);
subject.unsubscribe(Kullanici1);
subject.subscribe(Kullanici3);

subject.notify();
