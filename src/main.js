const faq = [
    {question: "Como faço para redefinir minha senha?", answer: "Para redefinir sua senha, clique em 'Redefinir senha' e siga as instruções."}, 
    {question: "Quais são os métodos de pagamentos aceitos?", answer: "Aceitamos Visa, MasterCard, American Express e PayPal."},
    {question: "Qual é a política de reembolso?", answer: "Oferecemos reembolso total até 30 dias após a compra."},
    {question: "Como entro em contato com o suporte?", answer: "Você pode nos contatar pelo e-mail, telefone ou chat ao vivo."},
];

window.onload = function () {
    const faqContainerUl = document.querySelector(".faq-container__ul");
    const template = document.querySelector("#card");

        faq.forEach((faq) => {
            const clone = document.importNode(template.content, true);

            clone.querySelector(".faq-container__question__card").textContent = faq.question;
            clone.querySelector(".faq-container__answer__card").textContent = faq.answer;

            clone.querySelector(".faq-container__li").addEventListener("click", (ev) => {
                const card = ev.currentTarget
                
                const answer = card.querySelector(".faq-container__answer__card");
                answer.classList.toggle("open");

                const vector = card.querySelector(".vector");
                vector.classList.toggle("vectorOpen");
            });

            faqContainerUl.appendChild(clone);
        });
};



