// const puzzle = [
//     [5,3,0,0,7,0,0,0,0],
//     [6,0,0,1,9,5,0,0,0],
//     [0,9,8,0,0,0,0,6,0],
//     [8,0,0,0,6,0,0,0,3],
//     [4,0,0,8,0,3,0,0,1],
//     [7,0,0,0,2,0,0,0,6],
//     [0,6,0,0,0,0,2,8,0],
//     [0,0,0,4,1,9,0,0,5],
//     [0,0,0,0,8,0,0,7,9]];

const puzzle = [
    [7,0,4,8,0,0,3,0,1],
    [8,2,0,5,0,0,0,4,0],
    [0,0,9,4,3,0,5,0,0],
    [3,1,0,0,0,0,8,0,7],
    [0,8,0,0,0,0,0,1,0],
    [9,0,7,0,0,0,0,3,2],
    [0,0,6,0,1,5,4,0,0],
    [0,7,0,0,0,9,0,6,5],
    [5,0,8,0,0,2,1,0,3]
]


function sudokuSolver(puzzle){
    var nonPossibilities = {},impossibleNumbers,emptySpaces = 81;
    while(emptySpaces> 0){
        emptySpaces = 0;
    for(var v =0;v<puzzle.length;v++){
        for(var h=0;h<puzzle.length;h++){
            if(puzzle[v][h]===0){
                nonPossibilities = {};
                for(var i=0;i<9;i++){
                    if(puzzle[v][i] >0){
                        nonPossibilities[puzzle[v][i]]= true;
                    }
                    if(puzzle[i][h] >0){
                        nonPossibilities[puzzle[i][h]]= true;
                    }
                }
                for(var vbox = Math.floor(v/3)*3;vbox< Math.floor(v/3)*3+3;vbox++){
                    for(var hbox = Math.floor(h/3)*3;hbox< Math.floor(h/3)*3+3;hbox++){
                        
                        if(puzzle[vbox][hbox]){
                            nonPossibilities[puzzle[vbox][hbox]] = true;
                        }
                        
                    }
                }
                
                impossibleNumbers = Object.keys(nonPossibilities);
                if(impossibleNumbers.length  === 8){
                    for(var i=1;i<10;i++){
                        if(impossibleNumbers.indexOf(i.toString())<0){
                           //console.log(v,h);
                            puzzle[v][h] = i;
                        }
                    }
                }else{
                    emptySpaces++; 
                }

            }
        }
    }
}
    return puzzle;
    
}

console.log(sudokuSolver(puzzle));
