(function() {
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            // obtenemos al siguiente hermano de questions que es el parrafo
            let answer = question.nextElementSibling;
            // obtenemos el padre de ese elemento y que obtenga el padre de ese 
            // elemento "questions__padding"
            let addPadding = question.parentElement.parentElement;
            addPadding.classList.toggle('questions__padding--add');
            // obtenemos al primer hijo y agregamos o quitamos si es que tiene la clase
            question.children[0].classList.toggle('questions__arrow--rotate');

            // preguntamos si el elemento tiene un height igual a 0
            if(answer.clientHeight === 0) {
                // scrollHeight nos da el alto minimo para que se muestre un elemento
                height = answer.scrollHeight;
            }
            // agregamos el height a la propiedad answer
            answer.style.height = `${height}px`;
        })
    });
})();