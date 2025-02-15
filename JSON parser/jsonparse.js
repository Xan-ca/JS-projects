// let str="{\"key\":\"value\",\"anotherkey\":\"hi\",\"anotherkey5\":67}"

// console.log(str)
// const len=str.length
// console.log(len)
// str=str.slice(1,-1)
// let arr=str.split(",")

// console.log(arr[0])

//  arr=arr.map(parse1)
// function parse1(strpara){
//     strpara_arr=strpara.split(":")
//     strpara_arr=strpara_arr.map(parse2)
//     return strpara_arr
// }

// function parse2(elepara){
//     if(elepara[0]=='"')
//         return elepara.slice(1,-1);
//     return elepara;
// }

//  console.log(typeof arr[0][1])
//  console.log(arr)
// let str="{\"key\":\"value\",\"anotherkey\":[[\"hi\",\"hi\"],[\"hi\",\"hi\"]],\"anotherkey5\":67}"


// function peek(arr){
// return(arr[arr.length-1])
// }




// function arraystrparse(arrstr){
//     let openbr=[];
//     let out=[];
// let closebr;
// for(let i=0;i<arrstr.length;i++){
//     if(arrstr[i]=='[')openbr.push(i+1);
//     if(arrstr[i]==']')
//     {out.push(arrstr.slice(peek(openbr),i));
//        arrstr= arrstr.slice(0,peek(openbr)-1) +arrstr.slice(i)  
//      openbr.pop();
//     }}
            
    
// return out;
// }
let test='[[[gfxu,gfxu],[gfxu],[gfxu]],[gfxu]]'

let out=[];
function arraystrparse(arrstr){
   //console.log(arrstr)
    if (arrstr[0]="[")strpar=arrstr.slice(1,-1);
    
    let arr2=[];
    let openbr=[];
    
    let first=0;
    let key=0
    for(let i=0;i<strpar.length;i++){
    if(strpar[i]=="["){
        key++;
        openbr.push(i);
     while(key>0){
         i++;
         if(strpar[i]=="[")key++;
         if(strpar[i]=="]")key--;
     }console.log(strpar.slice(openbr[0],i+1)+i)
     arraystrparse(strpar.slice(openbr[0],i+1))
    }

    if(strpar[i]==",")
    {
        out.push(strpar.slice(first,i))
        first=i+1;
    }
    }
    out.push(strpar.slice(first))
    console.log(out)
    
    
}arraystrparse(test)
console.log(out)



// const out=parse1(str)
// console.log(out)





// function parse1(strpar){
//     strpar=strpar.slice(1,-1)
//     let arr2=[]
//     let first=0;
//     let key=0
//     for(let i=0;i<strpar.length;i++){
//     if(strpar[i]=="[")key++;
    
//      while(key>0){
//          i++;
//          if(strpar[i]=="[")key++;
//          if(strpar[i]=="]")key--;
//      }

//     if(strpar[i]==",")
//     {
//         arr2.push(strpar.slice(first,i))
//         first=i+1;
//     }
//     }
//     arr2.push(strpar.slice(first))
//     return arr2
// }

