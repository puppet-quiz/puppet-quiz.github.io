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
		$.getJSON("https://opensheet.elk.sh/1iuVShj94nRbP7XMBbPX1gdY5UhxlBGqAhbY9P-qU6wg/mq", function (data) {

/*
// object 에 초성필드 추가 {name:"홍길동", diassembled:"ㅎㄱㄷ"}        
		$.each(data, function (val) {            
			var dis = Hangul.disassemble(val.quiz, true);
			var cho = dis.reduce(function (prev, elem) {
				elem = elem[0] ? elem[0] : elem;
				return prev + elem;
			}, "");
			val.diassembled = cho;
		});		
*/		
		var output = '';	
		var regex = new RegExp(searchField, 'i');	


			
		$.each(data, function (key, val) {	

	// object 에 초성필드 추가 {name:"홍길동", diassembled:"ㅎㄱㄷ"}
        
            var dis = Hangul.disassemble(val.quiz, true);
            var cho = dis.reduce(function (prev, elem) {
                elem = elem[0] ? elem[0] : elem;
                return prev + elem;
            }, "");
            val.diassembled = cho;
			
		
 //           var search = this.value;
            var regex1 = Hangul.disassemble.search.join("");  // ㄺ=>ㄹㄱ
		
        

			
			
            	// 문자열 검색 || 초성검색
            if ((val.quiz.search(regex) != -1) || (val.diassembled.search(regex1) != -1) /*|| (val.answer.search(regex) != -1)*/) {
             
                  output += '<tr class="result"><td class="퀴즈"><p>' + val.quiz + '</p><p style="color:ffd700">' + val.answer + '</p></td></tr>';
                                }
                            });				
		$('#search_results').html(output);
		});
	}
});


applycolor(back_color,base_color,ans_color);
