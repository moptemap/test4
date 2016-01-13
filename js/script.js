window.onload = function() {
    var startText = "использование гугла в изучении вопросов поощряется.";
    document.getElementById('text').value = startText;
};

function modifyText() {
	var text = document.getElementById('text').value;
	var translatedText = translate(text);
	document.getElementById('translated-text').value = translatedText;
	var reverseTranslatedText = reverse(translatedText);
	document.getElementById('reverse-translated-text').value = reverseTranslatedText;
}

function translate(text) {

    var translateSymbols = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch','ъ': '\'', 'ы': 'y', 'ь': '\'', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'ZH',
        'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R','С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H',
        'Ц': 'C', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH','Ъ': '\'', 'Ы': 'Y', 'Ь': '\'', 'Э': 'E', 'Ю': 'YU', 'Я': 'YA'
    };

    var result = '';

    for(var i = 0; i < text.length; i++) {
        if(translateSymbols[text[i]] != undefined) {
            result += translateSymbols[text[i]];
        } else {
            result += text[i];
        }
    }

    return result;
}

function reverse(text) {
    var result = "";

    for (var i = text.length; i >= 0; i--) {
        result += text.charAt(i);
    }

    return result;
}