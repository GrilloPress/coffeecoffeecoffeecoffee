// set a function called pizza that takes a topping as well as another function

function pizza(topping, callback) {
  console.log("This is a " + topping + " pizza");
  callback();
  // this logs the name of the topping, then calls the cooking function
}

function cooking(){
  console.log("It's in the oven!");
};

pizza("pinapple", cooking());
// this will complain about callback being undefined