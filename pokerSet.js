
const ranks=[9,10,"J","Q","K","A"];
const suits = ["hearts","diams","clubs","spades"];





//utworzenie talii kart
function makeDeck(){
    let deck=[];
    let shuffledDeck;
    for(let i=0;i<suits.length;i++){
        for(let j=0;j<ranks.length;j++){
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            card.value = (j+1);
            deck.push(card);
        }
    }
    shuffledDeck = shuffleDeck(deck);
    return shuffledDeck;

}


//tasowanie talii
function shuffleDeck(deck){
    let cards = [];
    while(deck.length > 0){
        for(let i=0;i<deck.length;i++){
            let rand = Math.floor(Math.random()*deck.length);
            let card = deck[rand];
            deck.splice(rand,1);
            cards.push(card);
        }
    }
    return cards;
}



//losowanie 5 kart pokerSet
function drawSet(deck){
    let set=[];
    for(let i=0;i<5;i++){
        let randomNumber = Math.floor(Math.random()*deck.length);
        let randomCard = deck[randomNumber];
        set.push(randomCard);
        deck.splice(randomNumber,1);
    }
    return set;
}



//sprawdza kolor
function checkFlush(set){
    let suits = {};
    //sprawdza kolry kart
    for(let i=0;i<set.length;i++){
                !suits[set[i].suit] ? suits[set[i].suit]=1 : suits[set[i].suit]++;
             }
             if(Object.keys(suits).length ==1){
                 return true;
             }else{
                 return false;
                }
}

// console.log("suits: ",checkSuit(tempSetSpades));

function checkRanks(set){
    let checks = {};
//zwraca obiekt z liczbą wystapień danej karty bez koloru
    for(let i=0;i<set.length;i++){
        !checks[set[i].rank] ? checks[set[i].rank]=1 : checks[set[i].rank]++;
    }
    //zwraca tablicę par, trójek lub czwórek
    let ranks = [];
    for(let k in checks){
        if(checks[k]>=2){
        let obj={};
        obj[k] = checks[k];
        ranks.push(obj);
        }
    }
    return ranks;
    
};

//Sprawdza najwyższą karte
function checkHigestCard(set){
    set.sort((a,b)=>{
        if(a.value >b.value){
            return 1;
        }else{
            return -1;
        }
    })
    return "Highest Card: ",set[4];
}

//sprawdza czy jest 1 para, trójka, lub czwórka
function checkPairThreeFour(arr){
    if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        let rank = Object.keys(arr[i]);
        let value = Object.values(arr[i]);
        if(value == 2){
            let str = "You have Pair: "+rank+':'+value;
            return str;
        }else if(value ==3){
            let str ="You have Three of kind: "+rank+':'+value;
            return str;
        }else if(value ==4){
            let str ="You have Four of kind: "+rank+':'+value;
            return str;
        }
    }
}else{
    return false;
}
}

//sprawdza czy są dwie pary lub trójka i para
function checkTwoPairsorFullHouse(arr){ 
    if(arr.length<2){
        return false;
    }else if(Number(Object.values(arr[0])) === Number(Object.values(arr[1]))){
        let str = "You have Two pairs: "+Object.keys(arr[0])+":"+Object.values(arr[0])+" and "+Object.keys(arr[1])+":"+Object.values(arr[1]);
        return str;
    }else{
        let str = "You have  Full House: "+Object.keys(arr[0])+":"+Object.values(arr[0])+" and "+Object.keys(arr[1])+":"+Object.values(arr[1]);
        return str;
    }
}


//funkcja pomocnicza sprawdza czy karty sa w kolejności 
function checkOne(arr){
    let countArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] !==undefined){
            countArr.push(arr[i+1]-arr[i]);
        } 
    }
    let checkOne = countArr.reduce((p,n)=> p*n,1);
    if(checkOne===1){
        return true;
    }else{
        return false;
    }
}


function straight(set){
    set.sort((a,b)=>{
        if(a.value > b.value){
            return 1;
        }else{
            return -1;
        }
    });

    let straight = checkOne(set);
    return straight;
    
    
}

function straightRoyalFlush(set){
    let sortSet= set.sort((a,b)=>{
        if(a.value > b.value){
            return 1;
        }else{
            return -1;
        }
    });
if(straight(set) && checkFlush(set) && sortSet[4].value !== 6){
    return "Straight Flush";
}else if(straight(set) && checkFlush(set) && sortSet[4].value ===6){
    return "Royal Flush";
}else{
    return false;
}
}



// let checkPokerSet = [];
let deck = makeDeck();
let pokerSet = drawSet(deck);
let checkedRanks = checkRanks(pokerSet);




function checkPokerSet(set,checkedRanks){
    if(straightRoyalFlush(set)){
        return straightRoyalFlush(set);
    }
    if(checkTwoPairsorFullHouse(checkedRanks)){
        return checkTwoPairsorFullHouse(checkedRanks)
    }
    if(checkFlush(set)){
        let str = "You have Flush: "+set;
        return str;
    }
    if(straight(set)){
        let str ="You have Straight: "+set;
        return str;
    }
    if(checkPairThreeFour(checkedRanks)){
        return checkPairThreeFour(checkedRanks);
    }else if(checkHigestCard(set)){
        let highestCard = checkHigestCard(set);
        let str = "Highest Card is: "+highestCard.rank+" of "+highestCard.suit;
        return str;
    }
    
}





console.log("------------------");
console.log("Poker set: ",pokerSet);


console.log("------------------");
console.log(checkPokerSet(pokerSet,checkedRanks));