window.onload = function() {

var opcs = {
   'saladas': {
      'caesar': {
         'preco': 5,
         'cal': 20,
      },
      'grega': {
         'preco': 7,
         'cal': 19,
      },
      'mediterranea': {
         'preco': 5,
         'cal': 22,
      }
   },
   'legumes': {
      'abobora': {
         'preco': 4,
         'cal': 23,
      },
      'quiabo': {
         'preco': 5,
         'cal': 17,
      },
      'aspargo': {
         'preco': 8,
         'cal': 19,
      }
   },
   'proteinas': {
      'frango': {
         'preco': 7,
         'cal': 80,
      },
      'peixe': {
         'preco': 7,
         'cal': 85,
      },
      'carne': {
         'preco': 7,
         'cal': 90,
      }
   },
   'carbo': {
      'arroz': {
         'preco': 6,
         'cal': 50,
      },
      'batata': {
         'preco': 4,
         'cal': 73,
      },
      'macarrao': {
         'preco': 5,
         'cal': 69,
      }
   }
}

function somas() {
   var saladas = document.getElementsByClassName('salada');
   var legumes = document.getElementsByClassName('legume');
   var proteinas = document.getElementsByClassName('proteina');
   var carboidratos = document.getElementsByClassName('carbo');
   var somaCal = 0;
   var somaPreco = 0;
   var marcado;
   for(var i = 0; i < saladas.length; i++){
      if(saladas[i].checked){
         marcado = saladas[i].value;
         somaPreco = somaPreco + opcs.saladas[marcado].preco;
         somaCal = somaCal + opcs.saladas[marcado].cal;
      }
   }
   for(var i = 0; i < legumes.length; i++){
      if(legumes[i].checked){
         marcado = legumes[i].value;
         somaPreco = somaPreco + opcs.legumes[marcado].preco;
         somaCal = somaCal + opcs.legumes[marcado].cal;
      }
   }
   for(var i = 0; i < proteinas.length; i++){
      if(proteinas[i].checked){
         marcado = proteinas[i].value;
         somaPreco = somaPreco + opcs.proteinas[marcado].preco;
         somaCal = somaCal + opcs.proteinas[marcado].cal;
      }
   }
   for(var i = 0; i < carboidratos.length; i++){
      if(carboidratos[i].checked){
         marcado = carboidratos[i].value;
         somaPreco = somaPreco + opcs.carbo[marcado].preco;
         somaCal = somaCal + opcs.carbo[marcado].cal;
      }
   }
   document.getElementById("result1").value = somaPreco
   document.getElementById("result2").value = somaCal

  }

  document.getElementById("botao").onclick = somas;
}
