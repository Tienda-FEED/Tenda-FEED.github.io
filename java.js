var productosSeleccionados = [];
      function agregarProducto(producto) {
        if (productosSeleccionados.includes(producto)) {
          // Si el producto ya ha sido seleccionado, lo eliminamos
          var index = productosSeleccionados.indexOf(producto);
          if (index > -1) {
            productosSeleccionados.splice(index, 1);
          }
        } else {
          // Si el producto no ha sido seleccionado, lo agregamos
          productosSeleccionados.push(producto);
        }
        // Actualizamos la lista de productos seleccionados
        var listaProductos = "";
        if (productosSeleccionados.length > 0) {
          listaProductos = "<p>Productos seleccionados:</p><ul>";
          for (var i = 0; i < productosSeleccionados.length; i++) {
            listaProductos += "<li>" + productosSeleccionados[i] + "</li>";
          }
          listaProductos += "</ul>";
        } else {
          listaProductos = "<p>No ha seleccionado ningún producto</p>";
        }
        document.getElementById("productos-seleccionados").innerHTML = listaProductos;
      }
      function enviarWhatsApp() {
        if (productosSeleccionados.length > 0) {
          // Generar el mensaje con los productos seleccionados
          var mensaje = "Quiero comprar los siguientes productos:%0A";
          for (var i = 0; i < productosSeleccionados.length; i++) {
            mensaje += "- " + productosSeleccionados[i] + "%0A";
          }
          // Abrir WhatsApp con el mensaje generado
          window.location.href = "https://wa.me/XXXXXXXXXXXX?text=" + mensaje;
        } else {
          alert("Debe seleccionar al menos un producto");
        }
      }