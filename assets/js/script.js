$(function functionName() {
  // la valeur commencera avec 0
  var add = 0;
  $('button').click(function(){
    // ajout de valeur en plus ++
    add++;
    // permet de le modifier dans le fichier index.html
    $('#add').html('Abonnés ' + add)
  });
})
