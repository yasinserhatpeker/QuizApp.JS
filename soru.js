function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;

}

Soru.prototype.cevabiKontrolEt=function(cevap) {
     return cevap === this.dogruCevap;
      
};


const soruListesi = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a:"Node.js", b:"TypeScript",c:"Nuget", d:"npm"},"d"),
    new Soru("2-Hangisi FrontEnd  kapsamında değerlendirilmez?", {a:"CSS", b:"HTML",c:"JavaScript", d:"SQL"},"d"),
    new Soru("3-Hangisi BackEnd kapsamında değerlendirilir?", {a:"Node.js", b:"TypeScript",c:"Anguler", d:"React"},"a"),
    new Soru("4-Hangisi JavaScript programlama dilini kullanmaz?", {a:"React", b:"Angular",c:"Vue.js", d:"ASP.NET"},"d")


];