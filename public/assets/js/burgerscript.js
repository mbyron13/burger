$(document).ready(function () {

    $("#submit-burger-btn").on("submit", function (event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            console.log("new burger added!");
            location.reload();
        });

    });

    $(document).on("click", ".eatburger", function(event){
        event.preventDefault();
        var burger_id= $(this).data("id");
      
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id + "?devoured=true"
        }).then(function(data){
            console.log("eaten!");
            location.reload();
        });
        
    });

});
