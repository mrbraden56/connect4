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
const twentyfour=array[24].classList[1]
const twentyfive=array[25].classList[1]
const twentysix=array[26].classList[1]
const twentyseven=array[27].classList[1]
const twentyeight=array[28].classList[1]
const twentynine=array[29].classList[1]
const thirty=array[30].classList[1]
const thirtyone=array[31].classList[1]
const thirtytwo=array[32].classList[1]
const thirtythree=array[33].classList[1]
const thirtyfour=array[34].classList[1]
const thirtyfive=array[35].classList[1]
const thirtysix=array[36].classList[1]
const thirtyseven=array[37].classList[1]
const thirtyeight=array[38].classList[1]
const thirtynine=array[39].classList[1]
const fourty=array[40].classList[1]
const fourtyone=array[41].classList[1]

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
}else if(thirtysix&&thirtysix==thirtyseven&&thirtysix==thirtyeight&&thirtysix==thirtynine){
    return true;
}else if(thirtyseven&&thirtyseven==thirtyeight&&thirtyseven==thirtynine&&thirtyseven==fourty){
    return true;
}else if(thirtyeight&&thirtyeight==thirtynine&&thirtyeight==fourty&&thirtyeight==fourtyone){
    return true;
}else if(thirty&&thirty==thirtyone&&thirty==thirtytwo&&thirty==thirtythree){
    return true
}else if(thirtyone&&thirtyone==thirtytwo&&thirtyone==thirtythree&&thirtyone==thirtyfour){
    return true;
}else if(thirtytwo&&thirtytwo==thirtythree&&thirtytwo==thirtyfour&&thirtytwo==thirtyfive){
    return true;
}else if(twentyfour&&twentyfour==twentyfive&&twentyfour==twentysix&&twentyfour==twentyseven){
    return true
}else if(twentyfive&&twentyfive==twentysix&&twentyfive==twentyseven&&twentyfive==thirtyeight){
    return true;
}else if(twentysix&&twentysix==twentyseven&&twentysix==twentyeight&&twentysix==twentynine){
    return true;
}else if(six&&six==twelve&&six==eighteen&&six==twentyfour){
    return true
}else if(twelve&&twelve==eighteen&&twelve==twentyfour&&twelve==thirty){
    return true
}else if(eighteen&&eighteen==twentyfour&&eighteen==thirty&&eighteen==thirtysix){
    return true
}else if(six&&six==twelve&&six==eighteen&&six==twentyfour){
    return true
}else if(twelve&&twelve==eighteen&&twelve==twentyfour&&twelve==thirty){
    return true
}else if(eighteen&&eighteen==twentyfour&&eighteen==thirty&&eighteen==thirtysix){
    return true
}else if(seven&&seven==thirteen&&seven==nineteen&&seven==twentyfive){
    return true
}else if(thirteen&&thirteen==nineteen&&thirteen==twentyfive&&thirteen==thirtyone){
    return true
}else if(nineteen&&nineteen==twentyfive&&nineteen==thirtyone&&nineteen==thirtyseven){
    return true
}else if(eight&&eight==fourteen&&eight==twenty&&eight==twentysix){
    return true
}else if(fourteen&&fourteen==twenty&&fourteen==twentysix&&fourteen==thirtytwo){
    return true
}else if(twenty&&twenty==twentysix&&twenty==thirtytwo&&twenty==thirtyeight){
    return true
}else if(nine&&nine==fifteen&&nine==twentyone&&nine==twentyseven){
    return true
}else if(fifteen&&fifteen==twentyone&&fifteen==twentyseven&&fifteen==thirtythree){
    return true
}else if(twentyone&&twentyone==twentyseven&&twentyone==thirtythree&&twentyone==thirtynine){
    return true
}else if(ten&&ten==sixteen&&ten==twentytwo&&ten==twentyeight){
    return true
}else if(sixteen&&sixteen==twentytwo&&sixteen==twentyeight&&sixteen==thirtyfour){
    return true
}else if(twentytwo&&twentytwo==twentyeight&&twentytwo==thirtyfour&&twentytwo==fourty){
    return true
}else if(eleven&&eleven==seventeen&&eleven==twentythree&&eleven==twentynine){
    return true
}else if(seventeen&&seventeen==twentythree&&seventeen==twentynine&&seventeen==thirtyfive){
    return true
}else if(twentythree&&twentythree==twentynine&&twentythree==thirtyfive&&twentythree==fourtyone){
    return true
}else if(thirtysix&&thirtysix==thirtyone&&thirtysix==twentysix&&thirtysix==twentyone){
    return true
}else if(thirty&&thirty==twentyfive&&thirty==twenty&&thirty==fifteen){
    return true
}else if(twentyfour&&twentyfour==nineteen&&twentyfour==fourteen&&twentyfour==nine){
    return true
}else if(eighteen&&eighteen==three&&eighteen==eight&&eighteen==thirteen){
    return true
}else if(thirtyseven&&thirtyseven==twentytwo&&thirtyseven==twentyseven&&thirtyseven==thirtytwo){
    return true
}else if(thirtyeight&&thirtyeight==twentythree&&thirtyeight==twentyeight&&thirtyeight==thirtythree){
    return true
}else if(nineteen&&nineteen==four&&nineteen==nine&&nineteen==fourteen){
    return true
}else if(twentyfive&&twentyfive==ten&&twentyfive==fifteen&&twentyfive==twenty){
    return true
}else if(twenty&&twenty==five&&twenty==ten&&twenty==fifteen){
    return true
}else if(thirtyone&&thirtyone==sixteen&&thirtyone==twentyone&&thirtyone==twentysix){
    return true
}else if(twentysix&&twentysix==eleven&&twentysix==sixteen&&twentysix==twentyone){
    return true
}else if(thirtytwo&&thirtytwo==seventeen&&thirtytwo==twentytwo&&thirtytwo==twentyseven){
    return true
}else if(fourtyone&&fourtyone==twenty&&fourtyone==twentyseven&&fourtyone==thirtyfour){
    return true
}else if(thirtyfive&&thirtyfive==fourteen&&thirtyfive==twentyone&&thirtyfive==twentyeight){
    return true
}else if(twentynine&&twentynine==eight&&twentynine==fifteen&&twentynine==twentytwo){
    return true
}else if(twentythree&&twentythree==two&&twentythree==nine&&twentythree==sixteen){
    return true
}else if(fourty&&fourty==nineteen&&fourty==twentysix&&fourty==thirtythree){
    return true
}else if(thirtynine&&thirtynine==eighteen&&thirtynine==twentyfive&&thirtynine==thirtytwo){
    return true
}else if(twentytwo&&twentytwo==one&&twentytwo==eight&&twentytwo==fifteen){
    return true
}else if(twentyeight&&twentyeight==seven&&twentyeight==fourteen&&twentyeight==twentyone){
    return true
}else if(twentyone&&twentyone==zero&&twentyone==seven&&twentyone==fourteen){
    return true
}else if(thirtyfour&&thirtyfour==thirteen&&thirtyfour==twenty&&thirtyfour==twentyseven){
    return true
}else if(thirtyseven&&thirtyseven==six&&thirtyseven==thirteen&&thirtyseven==twenty){
    return true
}else if(thirtythree&&thirtythree==twelve&&thirtythree==nineteen&&thirtythree==twentysix){
    return true
}

}
function look_above(position){
    if(position==42 || position==43|| position==44 || position==45 || position==46 || position==47){
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
}
}
})
