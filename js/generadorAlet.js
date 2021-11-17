let regCod = [];
let repeat;

 export function aleatorio() {
  do {
    let code = parseInt(Math.random() * 999999);

    repeat = codeRepeat(code);
    if (!repeat) {
      regCod.push(code);
      return code;
    } else {
      repeat = false;
      
    }
  } while (!repeat);
}

function codeRepeat(code) {
  for (let i = 0; i < regCod.length; i++) {
    if (code === regCod[i]) {
      repeat = true;
      break;
    }
  }
  return repeat;
}

// function btn(){
//     console.log(aleatorio());
//     console.log(regCod);
//     console.log('-------------------');
// }