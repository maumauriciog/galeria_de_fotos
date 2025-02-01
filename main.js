$('document').ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
    })

    $('Header button').click('click', function () {
        $('main').slideDown();
    })

    $('#botao-cancelar').click('click', function () {
        $('main').slideUp();
    })

    $('main form').on('submit', function (e) {
        e.preventDefault();
        const enderecoImgame = $('#endereco-imagem').val();

        /*criando um elemento no jayquery */
        const novoItem = $('<li></li>');
        /*cria um novo elemento e insere o elemento criado entre as tags li da variável novo item */
        $(`<img src="${enderecoImgame}" />`).appendTo(novoItem);

        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImgame}" target="${enderecoImgame}">
                    ampliar a imgagem
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $('#endereco-imagem').val('');
    })
})