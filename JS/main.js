function saludo(){
    alert("bienvenido a usuario")
    alert("A continuacion encontraras unos botones que ejecutan algoritmos");
}
//suma de 2 valores.//
function suma(){
    let A = 0;
    let B = 0;
    let Suma = 0;
    
   
    A = parseInt(prompt("por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("por favor ingrese el segundo valor" ));
    //operacion de la suma.
    Suma = A + B;
    
    alert(" La suma es:" + Suma);

} 
//operaciones basicas: resta, multiplicacion y division;
function Operaciones(){
    let C = 0;
    let  D = 0;
    let resta = 0;
    let  multiplicacion = 0;
    let division = 0;
    
   
    C = parseInt(prompt("por favor ingrese el primer valor"));
    D = parseInt(prompt("por favor ingrese el segundo valor" ));
    
    resta = C - D;
    multiplicacion = C * D;
    division = C / D;
    
    
    alert(" la resta es: " + resta +"la multiplicacion es:" +multiplicacion+"la division es:" +division);

} 
//el valor del cuadrado de un numero.
function Cuadrado(){
    let F = 0;
    
    F = parseInt(prompt("por favor ingrese el primer valor"));
    
    F = F * F;
    
    
    alert("el cuadrado de ese numero es:"+ F);

} 
//calcular el area del triangulo
function Areatriangulo(){
    let G = 0;
    let H = 0;
    
    
    G = parseInt(prompt("por favor ingrese el numero de la base"));
    H = parseInt(prompt("ingrese el numero de la altura"));
    areaTriangulo = G * H;
    
    alert("El area del triangulo es de:"+ areaTriangulo/2);

} 
//descubrir el mayor de 2 numeros
function mayorD2n(){
    let n1 = 0;
    let n2 = 0;

    n1 = parseInt(prompt("ingrese el primer valor"))
    n2 = parseInt(prompt("ingrese el segundo valor"))
    
  if(n1>n2){
    alert(n1+"es mayor que"+n2);
  }
  else{
    alert(n2+"es mayor que"+n1);
  }
                                
}
//encontrar el menor de 3 numeros
function encontrarMenorD3() {
    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;

     numero1 = parseInt(prompt("ingrese el numero 1"));
     numero2 = parseInt(prompt("ingrese el numero 2"));
     numero3 = parseInt(prompt("ingrese el numero 3"));

     if(numero1 <=numero2 && numero1<=numero3){
        alert(numero1+"es menor");
     }
     else if(numero2 <=numero1 && numero2 <=numero3){
        alert(numero2+"es menor");
     }
     else{
        alert(numero3+"es menor");
     }
  
}
//promrdio de las 7 notas
  function promedioNotasE(){
    let  nota1 = 0;
    let  nota2 = 0;
    let  nota3 = 0;
    let  nota4 = 0;
    let  nota5 = 0;
    let  nota6 = 0;
    let  nota7 = 0;
    let nombreE ;
    let materia ;
    Promedio = 0;

    nombreE =(prompt("ingree nombre del estudiante"));
    materia =(prompt("ingrese la materia"));
    nota1 =parseInt(prompt("ingrese primera nota"));
    nota2= parseInt(prompt("por favor ingrese la segunda nota"));
    nota3= parseInt(prompt("por favor ingrese la tercera nota"));
    nota4= parseInt(prompt("por favor ingrese la cuarta nota"));
    nota5 = parseInt(prompt("por favor ingrese la quinta nota"));
    nota6= parseInt(prompt("por favor ingrese la sexta nota"));
    nota7 = parseInt(prompt("por favor ingrese la septima nota"));
    Promedio = nota1+nota2+nota3+nota4+nota5+nota6+nota7;
    alert("  el nombre del estudiante es: "+nombreE+"  el promedio es:"+Promedio/7 +"  ...CLIK en aceptar para ver si aprueba o no aprueba");
    
   if(Promedio<6.2){
    alert(nombreE+"aprueba");
   }
   else{
    alert(nombreE+"no aprobo");
   }
  } 
  
  function inversion() {
    let años =0;
    let Intereses =0.017;
    let Meses =0;
    let Inversion =0;
    let Ganancias =0;
    let Intereses2 =0;
    //inversion banco"
    Inversion = parseInt(prompt("Por favor ingrese la cantidad de dinero a invertir"));
    años = parseInt(prompt("Por favor ingrese la cantidad de años..."));
    Meses=años*12;
    Intereses2=Inversion*Intereses;
    Ganancias=Intereses2*Meses;
    alert("La ganancia de la inversion en:"+años+" años "+" es de "+Ganancias+Inversion  );
}
function Kilos() {
  let KILOS=0;
  let TotalP=0;
  let KilosDE=0;
  let Manzanas=0;
  
  KILOS =parseInt(prompt("INGRESE LA CANTIDAD DE MANZANAS"));
  if( KILOS  <=2){
      Manzanas=KILOS*4500;
      alert("El precio a pagar por "+KILOS+" Kilos de manzanas es: "+Manzanas);
  }
  else{
      if(KILOS  <=5){
          Manzanas=KILOS*4500;
          KilosDE=Manzanas*0.1;
          TotalP=Manzanas - KilosDE;
          alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 10% de descuento es: "+TotalP);
      }
      else{
          if(KILOS  <=8 ){
              Manzanas=KILOS*4500;
              KilosDE=Manzanas*0.15;
              TotalP=Manzanas - KilosDE;
              alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 15% de descuento es: "+TotalP);
          }
          else{
              if(KILOS >=9){
                  Manzanas=KILOS*4500;
                  KilosDE=Manzanas*0.2;
                  TotalP=Manzanas - KilosDE;
                  alert("El precio a pagar por "+KILOS+" Kilos de manzanas "+"con el 20% de descuento es: "+TotalP);
              }
          }
      }

  }
}
 
