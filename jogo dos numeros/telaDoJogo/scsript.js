
 function Generater(){
          let GeneraterNumber = document.getElementById('main-content-Geração')
          let NG = GeneraterNumber         

          let InputNumberValue = document.getElementById('Gerater').value
          let INV = parseInt(InputNumberValue)
         

          let resultadoGer = gerar()
          NG.textContent = resultadoGer
          
          let resultadoVer = Verication(resultadoGer,INV)
          
         if(resultadoVer === true){
                 InclemetaçãoAcertos()
        } else{
               InclemetaçãoErros()
         }
         
          let numJogadas = jogadas();
          let VerifNumJogadas = VericationJogadas(numJogadas)
          
          if(VerifNumJogadas == true ){
                 window.location.href="../index.html"
          }

          document.getElementById('Gerater').value = '';
          
 }



 //---------
 function VericationJogadas(numJogadas){
         if (numJogadas === 10){
               return true
         }
 }

 let ponto = 0;
 let incrementoAcertos = 1;
function InclemetaçãoAcertos(){
        
         ponto += incrementoAcertos;
         incrementoAcertos + 1
         document.getElementById('acertos-contador').style.color ='blue'
         document.getElementById('acertos-contador').textContent = '+' + ponto

}
let erros = 0
incrementoErros = 1
function InclemetaçãoErros(){
           erros += incrementoErros
           incrementoErros + 1
           document.getElementById('erros-contador').style.color ='red'
           document.getElementById('erros-contador').textContent = '-' + erros

}

 function Verication(resultadoGer, INV){
           let acertos = document.getElementById('acertos-contador')
           let n1 = resultadoGer
           let n2 = INV
           if(n1=== n2){
                  return true
           } else {
                return false
           }
           
 }
 
 function gerar(){
         
         let Minimo = 0;
         let Maximo = 20;
        return Math.floor( Math.random() * (Maximo - Minimo + 1)) + Minimo  

}


let zeroGame = 0;
let VezesGame = 1;
function jogadas(){
      zeroGame += VezesGame
      VezesGame + 1
      document.getElementById('jogadas-contador').textContent = zeroGame
     return zeroGame
}



