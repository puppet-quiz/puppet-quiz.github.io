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
		$.getJSON(eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('"0://1.2.3/4-5/6"',7,7,'https|opensheet|elk|sh|1iuVShj94nRbP7XMBbPX1gdY5UhxlBGqAhbY9P|qU6wg|mq'.split('|'),0,{})), function (data) {

	
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
		                              
   
		eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5+=\'<1 2="6"><3 2="퀴즈"><0>\'+4.7+\'</0><0 8="9:a">\'+4.b+\'</0></3></1>\';',12,12,'p|tr|class|td|val|output|result|quiz|style|color|ffd700|answer'.split('|'),0,{}))
                                }
                            });				
		$('#search_results').html(output);
		});
	}
});		

applycolor(back_color,base_color,ans_color);
