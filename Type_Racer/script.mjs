//import wordsrr from "./utils/textGenerator.mjs";
const div_arr=[];
const text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const wordsrr=text.split(' ');
const type_cont=document.querySelector("#type-content-one");
const type_cont_word=document.createElement("div");
console.log(wordsrr);
const status={
  current:0,
  correct_words:0,
};
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
let validate_word = (word) => {
  try{
    if(status.current >= wordsrr.length || status.current >= div_arr.length){
     throw new Error ("No more elements left");
    }
    if(word===wordsrr[status.current]){

      div_arr[status.current].style.color="#39ff14";
      status.correct_words++;

    }else{

      div_arr[status.current].style.color="#ed1d24";

    }
    div_arr[status.current].scrollIntoView({
      behavior: "smooth",
      block: "start" // Aligns to the top of the container
    });
    status.current++;   
  }
  catch(error){
      console.error(error);
  }
}


wordsrr.forEach(make_div_for_word);
div_arr.forEach(append_to_type_cont);
type_cont.appendChild(type_cont_word);
const text_input=document.querySelector("#type-input");
text_input.addEventListener('keydown', event=>{
  if(event.code=='Space'){
   const input_word=text_input.value.trim();
   validate_word(input_word);
   text_input.value="";
  }
})