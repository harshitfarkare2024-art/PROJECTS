function roll_dice(){
    let input=document.getElementById("input_button").value;
    let getImages=document.getElementById("diceImages");
    let diceResult=document.getElementById("diceResult");
    const values=[];
    const images=[];

    for(let i=0;i<input;i++){
        let value=Math.floor((Math.random()*6)+1);
        values.push(value);
        console.log(value);
        images.push(`<img src="dice/${value}.png" alt="Dice">`);
    }
    diceImages.innerHTML=images.join(' ');
}