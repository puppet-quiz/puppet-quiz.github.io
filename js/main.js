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
	if(searchField == '' || searchField == ' '){}
	else{
eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5-6/7",8(9){',10,10,'getJSON|https|opensheet|elk|sh|1iuVShj94nRbP7XMBbPX1gdY5UhxlBGqAhbY9P|qU6wg|mq|function|data'.split('|'),0,{}))

	
		var output = '';	
		var regex = new RegExp(searchField, 'i');	
			
		$.each(data, function (key, val) {

/*	// object 에 초성필드 추가 {name:"홍길동", diassembled:"ㅎㄱㄷ"}
        
            var dis = Hangul.disassemble(val.quiz, true);
            var cho = dis.reduce(function (prev, elem) {
                elem = elem[0] ? elem[0] : elem;
                return prev + elem;
            }, "");
            val.diassembled = cho;
			
		
           var search = this.value;
  //          var search1 = Hangul.disassemble(regex).join("");  // ㄺ=>ㄹㄱ
*/

            if ((val.quiz.search(regex) != -1) /*|| (val.diassembled.search(regex) != -1)*/) {           
		                              
   
                  output += '<tr class="result"><td class="퀴즈"><p>' + val.quiz + '</p><p style="color:ffd700">' + val.answer + '</p></td></tr>';
                                }
                            });				
		$('#search_results').html(output);
		});
	}
});		

applycolor(back_color,base_color,ans_color);
