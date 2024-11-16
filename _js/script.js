$(document).ready(function(){
		$(".button").click(function(){
			var name = $(this).attr("data-filter");
			$(".button").removeClass('active');
			$(this).addClass('active');

			if(name == "all")
			{
				$(".filter").show("2000");
			}
			else
			{
				$(".filter").not("."+name).hide("2000");
				$(".filter").filter("."+name).show("2000");
			}
		})
	})