let randNum = Math.floor(Math.random() * 101);
let rolltimes = 1;

function GN() {
    const Guess_Number = document.getElementById('G_N').value; 
    if(Guess_Number==randNum){alert("ถูกต้อง ค่าที่ถูกคือ : "+randNum+" คุณทายไปทั้งหมด : "+ rolltimes)}
    else if(Guess_Number>randNum){rolltimes++;alert("น้อยกว่า");}
    else{rolltimes++;alert("มากกว่า");}
    }