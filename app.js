const soruListesi = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a:"Node.js", b:"TypeScript",c:"Nuget", d:"npm"},"d"),
    new Soru("2-Hangisi FrontEnd  kapsamında değerlendirilmez?", {a:"CSS", b:"HTML",c:"JavaScript", d:"SQL"},"d"),
    new Soru("3-Hangisi BackEnd kapsamında değerlendirilir?", {a:"Node.js", b:"TypeScript",c:"Angular", d:"React"},"a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", {a:"React", b:"Angular",c:"Vue.js", d:"ASP.NET"},"d")


];

const quiz= new Quiz(soruListesi);

const front =new Front();

front.btnNext.addEventListener("click",function() {
    if(quiz.sorular.length > quiz.soruIndex) {
        front.soruGoster(quiz.soruGetir());
        front.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
         console.log(quiz);
    }
    else {
        console.log("quiz bitti");
        front.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    }
});

function optionSelected(e) {
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
}

front.btnReplay.addEventListener("click",function() {
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    // start button
    front.btnNext.click();
    front.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
})

front.btnQuit.addEventListener("click",function(){
    window.location.reload();
})