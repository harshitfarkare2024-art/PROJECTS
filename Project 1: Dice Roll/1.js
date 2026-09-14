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
        images.push(`<img src="https://raw.githubusercontent.com/harshitfarkare2024-art/PROJECTS/main/Project%201:%20Dice%20Roll/dice/dice-${value}.svg" alt="Dice ${value}" style="width: 100px; height: 100px; margin: 10px;">`);
    }
    diceImages.innerHTML=images.join(' ');
}
