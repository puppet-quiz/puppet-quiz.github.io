var back_color="#000d03";
var base_color="#fdf6e3";
var ans_color="ffd700";

function applycolor(b_color,b2_color,a_color){
	$("body").css("background-color",b_color);
	$(".quiz, .lead, label").css("color",b2_color);

}

document.getElementById('search_term').addEventListener('keyup',function(){
	$('.result').removeClass('result');
	var searchField = $('#search_term').val();
	if(searchField == ''){}
	else{
		var regex = new RegExp(searchField, 'i');
		var output = '';
//		output += '<tr class="result"><td style="text-align:center; background-color:#52525f;"><p>퀴즈 내용</p></td><td style="text-align:center; background-color:#005f6b;"><p>정답</p></td></tr>'
		$.getJSON("https://opensheet.elk.sh/1iuVShj94nRbP7XMBbPX1gdY5UhxlBGqAhbY9P-qU6wg/mq", function (data) {
		
			
					
		
			
			
		
			$.each(data, function (key, val) {
				if ((val.quiz.search(regex) != -1) /*|| (val.answer.search(regex) != -1)*/) {
//					output += '<tr class="result"><td class="퀴즈"><p>' + val.quiz + '</p></td><td class="정답"><p>' + val.answer + '</p></td></tr>';
					output += '<tr class="result"><td class="퀴즈"><p>' + val.quiz + '</p><p style="color:ffd700">' + val.answer + '</p></td></tr>';
				}
			});
		$('#search_results').html(output);
		});
	}
});









applycolor(back_color,base_color,ans_color);
