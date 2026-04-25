

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Fermer les autres accordéons (optionnel)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        // Toggle l'élément actuel
        faqItem.classList.toggle('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});