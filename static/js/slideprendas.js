const objects = document.querySelectorAll(".slide-container");
let cont = 0;
$.each(objects, function (item, key) {
    cont++;
    const cont_slide = document.querySelector("#cont-"+cont);
    const controllIzq = $('#flecha-izquierda'+cont);
    const controllDer = $('#flecha-derecha'+cont);

    // -------------------------------Eveentosde los contollers---------
    controllDer.click(function () {
        cont_slide.scrollLeft += cont_slide.offsetWidth - 50;
    });

    controllIzq.click(function () {
        cont_slide.scrollLeft -= cont_slide.offsetWidth - 50;
    });
});
