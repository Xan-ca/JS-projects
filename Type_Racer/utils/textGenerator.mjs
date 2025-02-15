import * as fs from 'fs';
const wordsrr=[];
function readDict(){
    return new Promise((resolve,reject)=>{
       
        fs.readFile('wordDict.txt','utf-8',(err,data)=>{
            if(err){
                console.error(err);
                reject();
                return;
            }
            const temparr=data.split(" ");
            temparr.forEach( word =>{
                wordsrr.push(word);
            });
            resolve();
        })
    }
);
}
function shuffle(array) {
    return new Promise((resolve)=>{
        let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    resolve();
  }
)
}  
  

async function run(){
   await readDict();
   console.log(wordsrr);
   await shuffle(wordsrr);
   console.log(wordsrr);
   
}
run();
export default wordsrr;






