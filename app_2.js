let re;

// Literal Character
re = /hello/;
re = /hello/i; // i  - case insensitive

// MetaCharacheters Symbols
re = /^h/i; //Must start with 'h' or else null output
re = /world$/i; //Must ends with 'world' or else null output
re = /^hello$/i; //Must begin/ends with 'hello' or else null output
re = /^h.llo$/i; //Must match any 1 character
re = /h*llo/i; //Must match any char 0 or more times
re = /gre?a?y/i; //Optional Characters
re = /gre?a?y\?/i; //Escape Characters


//CHARACTER SETS
// Bracekts [ ] - Character Sets
re = /gr[ae]y/i; // Must be an a or an e
re = /[GF]ray/i; // Must be an upperacase G or F
re = /[^GF]ray/i; // Match anything except G or F
re = /[A-Z]ray/; // Match anything uppercase letter A-Z
re = /[A-Za-z]ray/; // Match both lowercase & uppercase letters A-Z
re = /[0-99]ray/; // Match any digit
re = /[0-9][0-99]ray/; // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly {x} amount of times
re = /Hel{2,4}o/i; //Must occur exactly {x} amount of times
re = /Hel{2,}o/i; //Must occur at least {x} times

//Parenthesis () - Grouping
re = /^([0-9]x){3}$/ // Must match a # 3x only


// String match
const str = '3x3x3x';


// Log result
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);