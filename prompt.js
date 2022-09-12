console.log('prompt')
// alert('ki khobor')
const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        alert('ki obostha')

    }
}

const ask = () => {
   const decision = confirm('are you coming today?')
   console.log(decision)
   if(decision === true){
    alert('dosto tk bkash kor')
   }
   else{
    console.log('DGM!! dure giya mor')
   }
}

const getInfo = () => {
    const name = prompt('tell us something')
    console.log(name)
    if(!!name){
        console.log('welcome', name)
    }
}