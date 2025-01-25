function Front() {
    this.quiz_box=document.querySelector("#quiz-box");
    this.body=document.querySelector("#quiz-box #body");
    
    this.correctIcon='<i class="bi bi-check-circle"></i>';
    this.inCorrectIcon='<i class="bi bi-x-circle"></i>';


}

Front.prototype.soruGoster= function(soru) {
    this.body.innerHTML="";

    const cardBody=document.createElement("div");
    cardBody.classList.add("card-body");

    const title=document.createElement("h5");
    title.classList.add("question-title");
    title.textContent=soru.soruMetni;

    const optionList=document.createElement("div");
    optionList.classList.add("option-list");

    for(let [key,value] of Object.entries(soru.cevapSecenekleri)) {

        const option=document.createElement("div");
        option.classList.add("option");
        option.addEventListener("click",optionSelected);

        const span=document.createElement("span");
        span.textContent=key +")" +value;

        option.appendChild(span);
        optionList.appendChild(option);

    }
    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

   this.body.appendChild(cardBody);

     


}

Front.prototype.disableAllOption= function()
{ 
    const options=document.querySelectorAll(".option");
    for(let option of options) {
        option.classList.add("disabled");
    }
}














{ /*<h5 class="question-title">1-Hangisi JavaScript paket yönetim uygulamasıdır?</h5>


<div class="option-list">
    <div class="option">
        <span>a: Node.js</span>
    </div>
    <div class="option">
        <span>b: TypeScript</span>
    </div>
    <div class="option">
        <span>c: Nuget</span>
    </div>
    <div class="option">
        <span>d: npm</span>
    </div>
</div> */ }