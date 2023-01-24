// 1.
function radianToDegree(radian) {
  var degree = (1 * radian * 180) / 3.1416;
  // console.log(degree.toFixed(2));
  return degree;
}
const value = radianToDegree(10);
const values = radianToDegree(25);
const valuess = radianToDegree(199);

// 2.
function isJavascript(file) {
  if (file.endsWidth = '.js') {
    console.log('true ff');
    return;
  } else { console.log(false); return; }
}
// isJavascript('app.js')
isJavascript('image.jpg')
// isJavascript('app.jpg.js')
// isJavascript('app.jss')
// const str1 = "Cats are the best!";
// console.log(str1.endsWith('best!'));
// Expected output: true

// *
const names = "rashed";
// console.log(typeof (names));

// 3./
function oilPrice(dieselQuantity, octanQuantity, petrolQuantity) {
  var dieselPrice = 114;
  var octanPrice = 130;
  var petrolPrice = 135;
  return (total =
    dieselPrice * dieselQuantity +
    octanPrice * octanQuantity +
    petrolPrice * petrolQuantity);
}
var totalPrice = oilPrice(1, 1, 1);
var totalPrice2 = oilPrice(30, 20, 10);
var totalPrice3 = oilPrice(1, 0, 2);
var totalPrice4 = oilPrice(0, 2, 3);
// console.log(totalPrice,totalPrice2,totalPrice3,totalPrice4);

// 5.
function isBestFriend(obj1, obj2) {
  if (obj1.name == obj2.friend) {
    // console.log(true); 
  } else {
    // console.log(false);
  }
}
// const object1 = isBestFriend(
//   { name: "abul", friend: "babul" },
//   { name: "babul", friend: "abul" }
// );
const object2 = isBestFriend(
  { name: "abdul", friend: "babul" },
  { name: "babul", friend: "abul" }
);
