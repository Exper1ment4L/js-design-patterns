var yasModule = (function() {
  // IIFE

  var yas = 100; // Private Prop
  var yasArtir = function() {
    // Private method
    return ++yas;
  };
  var yasAzalt = function() {
    // Private method
    return --yas;
  };
  return {
    // Public methods revealing
    yasArtir,
    yasAzalt
  };
})();

console.log("1: " + yasModule.yasArtir());
console.log("2: " + yasModule.yasArtir());
console.log("3: " + yasModule.yasAzalt());

let yas = 200;
console.log("Yeni tanımlanan yaş: " + yas);
console.log("Tanımlamadan sonra azaltma: " + yasModule.yasAzalt());
console.log("Son yaş: " + yasModule.yas); // Private prop = undefined
