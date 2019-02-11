const helloWorld = 'Hello World!';
let body = document.querySelector('body');
if (body != undefined) {
  // Print to page
  body.textContent = helloWorld;
} else {
  // Print to console
  console.log(helloWorld);
  // Send alert message
  alert('\'helloWorld\' could not be printed to page.');
}
// jQuery Character Counter for inputs and text areas
$(".word_count").each(function() {
  var charlength = $(this).val().length;
  $(this).parent().parent().find(".counter").html(charlength + ' characters');
  $(this).keyup(function() {
    var new_charlength = $(this).val().length;
    $(this).parent().parent().find(".counter").html(new_charlength + ' characters');
  });
});
