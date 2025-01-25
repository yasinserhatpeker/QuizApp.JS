const soruListesi = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a:"Node.js", b:"TypeScript",c:"Nuget", d:"npm"},"d"),
    new Soru("2-Hangisi FrontEnd  kapsamında değerlendirilmez?", {a:"CSS", b:"HTML",c:"JavaScript", d:"SQL"},"d"),
    new Soru("3-Hangisi BackEnd kapsamında değerlendirilir?", {a:"Node.js", b:"TypeScript",c:"Anguler", d:"React"},"a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", {a:"React", b:"Angular",c:"Vue.js", d:"ASP.NET"},"d")


];

const quiz= new Quiz(soruListesi);

document.getElementById("btnSoruGetir").addEventListener("click",function() {
    if(quiz.sorular.length > quiz.soruIndex) {
        console.log(quiz.soruGetir());
        quiz.soruIndex++;
        console.log(quiz);
    }
    else {
        console.log("quiz bitti");
    }
});
