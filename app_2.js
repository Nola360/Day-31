let re;

// Literal Character
re = /hello/;
re = /hello/i;

// MetaCharacheters Symbols
re = /^h/i; //Must start with 'h' or else null output
re = /world$/i; //Must ends with 'world' or else null output
re = /^hello$/i; //Must begin/ends with 'hello' or else null output
re = /^h.llo$/i; //Must match any 1 character
re = /h*llo/i; //Must match any char 0 or more times
re = /gre?a?y/i; //Optional Characters
re = /gre?a?y\?/i; //Escape Characters




// String match
const str = 'Gra4?';


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