// Just using a toggle class will replace the longer code we have above
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo and stop from calling other element events
// click event when the <span> nested inside the <ul> is clicked
$("ul").on("click", "span", function(event){
    // the $(this) refers to the span. With the parent it referes to <li> fadeOut
    $(this).parent().fadeOut(500, function(){
        // the $(this) refers to the parent() which is <li> in this case
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // clears the value in the text area
        $(this).val("");
        // create a new li and add to ul. Don't forget the <span>X </span>
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +
            todoText + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});

