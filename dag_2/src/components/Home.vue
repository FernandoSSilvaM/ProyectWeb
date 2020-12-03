<template>
  <div id="body">
  <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
  <div class="header">
        Tiendita de Dagas
    </div>
    <br>
    <div class= "content">
        <H1>BIENVENIDOS A MI TIENDA DE DAGAS</H1>
            <div class= "image">
                <img src="dag_2\src\assets\logo.png" height="10%" width="10%">
            </div>
        Los pasos son:
        <br>
        <ol>
            <li>Crea una sesión o inicia</li>
            <li>Selecciona daga</li>
            <li>Paga</li>
            <li>Espera a que llegue</li>
        </ol>
        <br>
        Las formas de pago son:
        <ul>
            <li>Efectivo cuando llegue</li>
            <li>Paypal</li>
            <li>Debito/credito</li>
        </ul>
        <center>
            <div class="card" id="table_card">
                <table id="table_prices ">
                    <tr>
                        <th>Tipo</th>
                        <th>Precio</th>
                    </tr>
                    <tr>
                        <td>Mariposa</td>
                        <td>$350</td>
                    </tr>
                    <tr>
                        <td>Con sierra</td>
                        <td>$500</td>
                    </tr>
                    <tr>
                        <td>Machete</td>
                        <td>$1000</td>
                    </tr>
                </table>
            </div>
        </center>
        <br>
        <router-link to="inicio-sesion">Inicia Sesion aquí</router-link>
        <br>
        o bien crea una cuenta <a href="crear_cuenta.html">acá</a>

        <div id="cupon">
            15% de descuento con el codigo: N@v4jasC00l5
        </div>
    </div>
  </div>
</template>

<style>
/* @font-face{
    font-family: 'Wierdfont';
    src: local('Wierdfont'), url(".\assets\fonts\entangle.woff");
} */

#body{
    font-family: 'MedievalSharp', cursive;
    background-color: #cff9ff;
    font-size: 22px;
    margin: auto;
}

h1 {
    text-align: center;
}

img{
    display: block;
    border-style: solid;
    border-color: black;
    margin-left: auto;
    margin-right: auto;
}

#table_prices{
    border: 1px solid black;
}

td, th{
    text-align: center;
    width: 125px;
    height: 50px;
}

#cupon{
    font-family: "Wierdfont";
    color: white;
}

.card{
    background-color: #f6feff;
    box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
    width: 800px;
    height: auto;
    border-radius: 5px;
}

#table_card{
    width: 300px;
    background-color: #d0f0f8;
}

.header{
    font-size: 40px;
    height: 50px;
    width: 120%;
    background-color: #6093ff;

}

.content{
    margin: 8px;
}
</style>
