const soruListesi = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a:"Node.js", b:"TypeScript",c:"Nuget", d:"npm"},"d"),
    new Soru("2-Hangisi FrontEnd  kapsamında değerlendirilmez?", {a:"CSS", b:"HTML",c:"JavaScript", d:"SQL"},"d"),
    new Soru("3-Hangisi BackEnd kapsamında değerlendirilir?", {a:"Node.js", b:"TypeScript",c:"Angular", d:"React"},"a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", {a:"React", b:"Angular",c:"Vue.js", d:"ASP.NET"},"d")


];

const quiz= new Quiz(soruListesi);

const front =new Front();

document.getElementById("btnSoruGetir").addEventListener("click",function() {
    if(quiz.sorular.length > quiz.soruIndex) {
        front.soruGoster(quiz.soruGetir());
         console.log(quiz);
    }
    else {
        console.log("quiz bitti");
    }
});

function optionSelected(e) {
    
  const cevap=e.target.textContent[0];
   const soru=quiz.soruGetir();    
   if(soru.cevabiKontrolEt(cevap)) {
     e.target.classList.add("correct");
     e.target.insertAdjacentHTML("beforeend",front.correctIcon);

   }
   else {
    e.target.classList.add("incorrect");
    e.target.insertAdjacentHTML("beforeend",front.inCorrectIcon);

   }
   quiz.soruIndex+=1;
   front.disableAllOption();
}
