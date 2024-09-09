$(document).ready(function () {

    $('form').submit(function(formulario){
         formulario.preventDefault();
    })

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

        $('#TELEFONE').mask('(00) 00000-0000', {
            placeholder: '(DDD) 12345-6789'
        })

        $('#CPF').mask('000.000.000-00', {
            placeholder: '123.456.789-00'
        })

        $('#CEP').mask('00000-000', {
            placeholder: '012345-678'
        })

        
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                endereco: {
                    required: true
                },
                cep: {
                    required: true
                },
                cpf: {
                    required: true
                },
            },
            submitHandler: function (form) {
                alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
                form.reset();
            },
            invalidHandler: function (form, validator) {
                let camposNaoPreenchidos= validator.numberOfInvalids();
                
                alert(`Existem ${camposNaoPreenchidos} campos vazios, por favor, preencha os campos para prosseguir com a compra!`);
            }
        })
})