
//func On² em todos os casos//

function bubble (array){
    for (let i = 0; i<array.length -1; i++ ){
        for(let j = 0; j<array.length -1; j++){
            if(array[j]> array[j+1]){
                [array[j], array[j+1]]= [array[j+1], array[j]];
            }
        }
    }
    return console.log (array);
}

//func + otimizada para dados organizados//

function bubble3(array){
    let swap;
    let last = array.length - 1;

    do {
        swap = false;
        for(let i=0; i<last;i++){
            if (array[i]> array[i+1]) {
                [array[i], array[i+1]]= [array[i+1], array[i]];
                swap= true;
            }
        }
        last --;
    } while (swap)
        return console.log(array);
}
module.exports= {bubble,bubble3};



