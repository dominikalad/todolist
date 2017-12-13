//checking off by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("checked");

});
//deleting the task
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//taking the text from the input using enter
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var inputText = $("input[type='text']").val();
		$(this).val("");
		//creating li and putting the input as an li
		$("ul").append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>"+inputText+"</li>");
	}
});
$(".fa-pencil-square-o").on("click", function(){
	$("input[type='text']").slideToggle();
});