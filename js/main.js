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
		
			//현재 data 상태
				//data = ["김치 볶음밥","신라면","진라면","라볶이","팥빙수","너구리","삼양라면","안성탕면","불닭볶음면","짜왕","라면사리"];	
		//이부분이 초성 검색이 가능하게 만들어 주는 부분

			
			let source = $.map(data, function(val.quiz) { //json[i] 번째 에 있는게 item 임.
					chosung = "";
					//Hangul.d(val.quiz, true) 을 하게 되면 item이 분해가 되어서 
					//["ㄱ", "ㅣ", "ㅁ"],["ㅊ", "ㅣ"],[" "],["ㅂ", "ㅗ", "ㄲ"],["ㅇ", "ㅡ", "ㅁ"],["ㅂ", "ㅏ", "ㅂ"]
					//으로 나오는데 이중 0번째 인덱스만 가지고 오면 초성이다.
					
					full = Hangul.disassemble(val.quiz).join("").replace(/ /gi, "") ;	//공백제거된 ㄱㅣㅁㅊㅣㅂㅗㄲㅇㅡㅁㅂㅏㅂ
					
					Hangul.d(val.quiz, true).forEach(function(strquiz, index) {
						
						if(strquiz[0] != " "){	//띄어 쓰기가 아니면
							chosung += strquiz[0];//초성 추가
							
						}
					});
				return {
						label : chosung + "|" + (val.quiz).replace(/ /gi, "") +"|" + full, //실제 검색어랑 비교 대상 ㄱㅊㅂㅇㅂ|김치볶음밥|ㄱㅣㅁㅊㅣㅂㅗㄲㅇㅡㅁㅂㅏㅂ 이 저장된다.
						value : val.quiz, //김치 볶음밥
						chosung : chosung,	//ㄱㅊㅂㅇㅂ,
						full : full
					}
				});
					
		
			
			
		
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
