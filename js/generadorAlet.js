let regCod = [];
let repeat;

function aleatorio() {

    
        let code = parseInt(Math.random() * 10);

        repeat=codeRepeat(code);
        if(!repeat){
            regCod.push(code);
            console.log('aqui se guardo')
            console.log(code);
            return code;
           
        }else{
            
            console.log('aqui no se guardo');
            console.log(code);
            repeat=false;
        }
    
        
 
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


 for(let i=0; i<10; i++){
    let code=aleatorio();
 }
 console.log('--------------------------------')
 console.log(regCod);