document.addEventListener('DOMContentLoaded',()=>{
const board=document.querySelectorAll('.board')
//const player1=document.querySelectorAll('player1')
let player=document.querySelector('#players')
let player_now='Player2';
const array=Array.from(document.querySelectorAll('.board'))
function winner(){
const zero=array[0].classList[1]
const one=array[1].classList[1]
const two=array[2].classList[1]
const three=array[3].classList[1]
const four=array[4].classList[1]
const five=array[5].classList[1]
const six=array[6].classList[1]
const seven=array[7].classList[1]
const eight=array[8].classList[1]
const nine=array[9].classList[1]
const ten=array[10].classList[1]
const eleven=array[11].classList[1]
const twelve=array[12].classList[1]
const thirteen=array[13].classList[1]
const fourteen=array[14].classList[1]
const fifteen=array[15].classList[1]
const sixteen=array[16].classList[1]
const seventeen=array[17].classList[1]
const eighteen=array[18].classList[1]
const nineteen=array[19].classList[1]
const twenty=array[20].classList[1]
const twentyone=array[21].classList[1]
const twentytwo=array[22].classList[1]
const twentythree=array[23].classList[1]
if(zero&&zero==one&&zero==two&&zero==three){
    return true;
}else if(one&&one==two&&one==three&&three==four){
    return true;
}else if(two&&two==three&&two==four&&two==five){
    return true
}else if(six&&six==seven&&six==eight&&six==nine){
    return true
}else if(seven&&seven==eight&&seven==nine&&seven==ten){
    return true
}else if(eight&&eight==nine&&eight==ten&&eight==eleven){
    return true
}else if(twelve&&twelve==thirteen&&twelve==fourteen&&twelve==fifteen){
    return true
}else if(thirteen&&thirteen==fourteen&&thirteen==fifteen&&thirteen==sixteen){
    return true
}else if(fourteen&&fourteen==fifteen&&fourteen==sixteen&&fourteen==seventeen){
    return true
}else if(eighteen&&eighteen==nineteen&&eighteen==twenty&&eighteen==twentyone){
    return true
}else if(nineteen&&nineteen==twenty&&nineteen==twentyone&&nineteen==twentytwo){
    return true
}else if(twenty&&twenty==twentyone&&twenty==twentytwo&&twenty==twentythree){
    return true
}else if(zero&&zero==six&&zero==twelve&&zero==eighteen){
    return true
}else if(one&&one==seven&&one==thirteen&&one==nineteen){
    return true
}else if(two&&two==eight&&two==fourteen&&two==twenty){
    return true
}else if(three&&three==nine&&three==fifteen&&three==twentyone){
    return true
}else if(four&&four==ten&&four==sixteen&&four==twentytwo){
    return true
}else if(five&&five==eleven&&five==seventeen&&five==twentythree){
    return true
}else if(eighteen&&eighteen==thirteen&&eighteen==eight&&eighteen==three){
    return true
}else if(nineteen&&nineteen==fourteen&&nineteen==nine&&nineteen==four){
    return true
}else if(twenty&&twenty==fifteen&&twenty==ten&&twenty==five){
    return true
}else if(twentythree&&twentythree==sixteen&&twentythree==nine&&twentythree==two){
    return true
}else if(twentytwo&&twentytwo==fifteen&&twentytwo==eight&&twentytwo==one){
    return true
}else if(twentyone&&twentyone==fourteen&&twentyone==seven&&twentyone==zero){
    return true
}

}
function look_above(position){
    if(position==24 || position==25|| position==26 || position==27 || position==28 || position==29){
        return true;
    }
    else if(array[position].classList[1]=='player2' || array[position].classList[1]=='player1'){
        return true;
    }
    else{
        alert('Player must stack squares!')
    }
}
function end_turn(current_player, index){
    if(current_player=='Player2'){
        array[index].classList.add('player1')
        player_now='Player1';
    }
    else{
        array[index].classList.add('player2')
        player_now='Player2';
    }
}
board.forEach(boards=>{
    boards.addEventListener('click', handleclick)
})
function handleclick(event){
    const index=array.indexOf(event.target)
    if(look_above(index+6)){
    player.innerHTML=player_now
    end_turn(player_now, index)
    if(winner()){
        alert(player_now+' wins, refresh to play again!')
    }
    console.log(index+6)
}
}
})