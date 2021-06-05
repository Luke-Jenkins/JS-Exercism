//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var mnemonic = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const colorCode = (color) => {
  function checkColor (resistor) {
    return resistor == color;
  }
  return mnemonic.findIndex(checkColor);
  
};

export const COLORS = undefined;
