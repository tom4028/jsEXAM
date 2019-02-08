let ballArray = [
        {num:1,weight:10},
        {num:2,weight:10},
        {num:3,weight:10},
        {num:4,weight:10},
        {num:5,weight:10},
        {num:6,weight:10},
        {num:7,weight:10},
        {num:8,weight:10}
        ];
//Losowo wybrana kula bedzie zwiekszona o 1
let n = Math.floor(Math.random()*ballArray.length);

console.log(ballArray.length+"n:"+n);
//console.log(ballArray);
ballArray[n].weight+=1;
console.log(ballArray);
let kosz1 = [];
let kosz2 = [];
//Dodajemy do każdego kosza po trzy kule 1 ważenie
console.log("Pierwsze ważenie...");
for(let i =0;i<=2;i++){
    kosz1.push(ballArray[i]);
}
console.log("kosz1:",kosz1);
for(let i =3;i<=5;i++){
    kosz2.push(ballArray[i]);
}
console.log('-------------');
console.log("kosz2:",kosz2);

console.log("Pozostałe kule: ",ballArray[6],ballArray[7])
let wagaKosz1 = 0;
let wagaKosz2 = 0;
kosz1.forEach(ball=>wagaKosz1+=ball.weight);
kosz2.forEach(ball=>wagaKosz2+=ball.weight);

//2 ważenie
console.log("Drugie ważenie...");
if(wagaKosz1>wagaKosz2){

    if(kosz1[0].weight>kosz1[1].weight){
        console.log("Zwiekszono wagę  kuli numer:"+kosz1[0].num);
    }else if(kosz1[0].weight<kosz1[1].weight){
        console.log("Zwiekszono wagę  kuli numer:"+kosz1[1].num);
    }else{
        console.log("Zwiekszono wagę  kuli numer:"+kosz1[2].num);
    }
    
}else if(wagaKosz1<wagaKosz2){
    if(kosz2[0].weight>kosz2[1].weight){
        console.log("Zwiekszono wagę  kuli numer:"+kosz2[0].num);
    }else if(kosz2[0].weight<kosz2[1].weight){
        console.log("Zwiekszono wagę  kuli numer:"+kosz2[1].num);
    }else{
        console.log("Zwiekszono wagę  kuli numer:"+kosz2[2].num);
    }
    
}else{
    let kosz1a = ballArray[6];
    let kosz2a = ballArray[7];
    if(kosz1a.weight>kosz2a.weight){
        console.log("Zwiekszono wagę kuli numer:"+kosz1a.num);
    }else{
        console.log("Zwiekszono wagę kuli numer:"+kosz2a.num);
    }
}