import wordsrr from "./utils/textGenerator.mjs";
const type_cont=document.querySelector("#type-content-one");
const type_cont_word=document.createElement("div");
console.log(wordsrr)
function make_div_for_word(word){
const type_cont_word_div=document.createElement('div');
word+=" ";
type_cont_word_div.innerText=word;
type_cont_word_div.className="type-cont-word";
div_arr.push(type_cont_word_div);
}
 function append_to_type_cont(item){
    type_cont.appendChild(item);
 }
wordsrr.forEach(make_div_for_word);
div_arr.forEach(append_to_type_cont);
type_cont.appendChild(type_cont_word);
const text_input=document.querySelector("#type-input");
text_input.addEventListener('keydown', event=>{
  if(event.code=='Space'){
   console.log(text_input.value.trim());
   text_input.value="";
  }
})