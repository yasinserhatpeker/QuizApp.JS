const soruListesi = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a:"Node.js", b:"TypeScript",c:"Nuget", d:"npm"},"d"),
    new Soru("2-Hangisi FrontEnd  kapsamında değerlendirilmez?", {a:"CSS", b:"HTML",c:"JavaScript", d:"SQL"},"d"),
    new Soru("3-Hangisi BackEnd kapsamında değerlendirilir?", {a:"Node.js", b:"TypeScript",c:"Angular", d:"React"},"a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", {a:"React", b:"Angular",c:"Vue.js", d:"ASP.NET"},"d")


];

const quiz= new Quiz(soruListesi);

const front =new Front();

front.btnStart.addEventListener("click", function() {
    startTimer(10)
    front.quizBox.classList.add("active");
    front.buttonBox.classList.remove("active");
    front.soruGoster(quiz.soruGetir());
    front.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
    front.btnNext.classList.remove("show");
})

front.btnNext.addEventListener("click",function() {
    if(quiz.sorular.length > quiz.soruIndex) {
        startTimer(10);
        front.soruGoster(quiz.soruGetir());
        front.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
        front.btnNext.classList.remove("show");
       
    }
    else {
       front.scoreBox.classList.add("active");
       front.quizBox.classList.remove("active");
    
       front.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    }
});

function optionSelected(e) {
    clearInterval(counter);
   let selectedElement=e.target;

   if(selectedElement.nodeName==="SPAN") {
    selectedElement=selectedElement.parentElement;
   }
  const cevap=e.target.textContent[0];
   const soru=quiz.soruGetir();  

   if(soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi+=1;
     selectedElement.classList.add("correct");
     selectedElement.insertAdjacentHTML("beforeend",front.correctIcon);

   }
   else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend",front.inCorrectIcon);

   }
   quiz.soruIndex+=1;
   front.disableAllOption();
   front.btnNext.classList.add("show");
}

front.btnReplay.addEventListener("click",function() {
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    // start button
    front.btnStart.click();
    front.scoreBox.classList.remove("active");
    
})

front.btnQuit.addEventListener("click",function(){
    window.location.reload();
})

let counter;

function startTimer(time) {
   front.timeText.textContent="Kalan Süre";
   counter=setInterval(timer,1000);

   function timer() {
    front.timeSecond.textContent=time;
    time--;

    if(time < 0) {
        clearInterval(counter);
        front.timeText.textContent="Süre Bitti";
        front.disableAllOption();
        quiz.soruIndex++;
    
       }
   }

}