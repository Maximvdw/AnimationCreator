function convertToMinecraftChat(html,size){
	if(typeof(size)==='undefined') size = 12;
	return "<span class='minecraft-chat' style='font-size: " +size + "px;'>" + html + "</span>";
}
function convertMinecraftTextToHTML(text){
	// Convert colors to html
	var result;
	text = text.split(' ').join('&nbsp;');
	var regexBold = /(&l)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexBold.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-effect-bold'>" + result[2] + "</span>");
		result = regexBold.exec(text);
	}
	
	var regexItalic = /(&o)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexItalic.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-effect-italic'>" + result[2] + "</span>");
		result = regexItalic.exec(text);
	}

	
	var regexYellow = /(&e)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexYellow.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-yellow'>" + result[2] + "</span>");
		result = regexYellow.exec(text);
	}
	
	var regexDarkBlue = /(&1)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexDarkBlue.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-darkblue'>" + result[2] + "</span>");
		result = regexDarkBlue.exec(text);
	}
	
	var regexGreen = /(&a)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexGreen.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-green'>" + result[2] + "</span>");
		result = regexGreen.exec(text);
	}
	
	var regexDarkGreen = /(&2)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexDarkGreen.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-darkgreen'>" + result[2] + "</span>");
		result = regexDarkGreen.exec(text);
	}
	
	var regexBlack = /(&0)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexBlack.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-black'>" + result[2] + "</span>");
		result = regexBlack.exec(text);
	}
	
	var regexOrange = /(&6)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexOrange.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-orange'>" + result[2] + "</span>");
		result = regexOrange.exec(text);
	}
	
	var regexDarkAqua = /(&3)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexDarkAqua.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-darkaqua'>" + result[2] + "</span>");
		result = regexDarkAqua.exec(text);
	}
	
	var regexAqua = /(&b)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexAqua.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-aqua'>" + result[2] + "</span>");
		result = regexAqua.exec(text);
	}
	
	var regexDarkRed = /(&4)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexDarkRed.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-darkred'>" + result[2] + "</span>");
		result = regexDarkRed.exec(text);
	}
	
	var regexRed = /(&c)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexRed.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-red'>" + result[2] + "</span>");
		result = regexRed.exec(text);
	}
	
	var regexIndigo = /(&9)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexIndigo.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-indigo'>" + result[2] + "</span>");
		result = regexIndigo.exec(text);
	}
	
	var regexWhite = /(&f)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexWhite.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-white'>" + result[2] + "</span>");
		result = regexWhite.exec(text);
	}
	
	var regexGrey = /(&7)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexGrey.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-grey'>" + result[2] + "</span>");
		result = regexGrey.exec(text);
	}
	
	var regexDarkGrey = /(&8)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexDarkGrey.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-darkgrey'>" + result[2] + "</span>");
		result = regexDarkGrey.exec(text);
	}
	
	var regexPurple = /(&5)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexPurple.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-purple'>" + result[2] + "</span>");
		result = regexPurple.exec(text);
	}
	
	var regexPink = /(&d)(.*?)(&a|&b|&c|&d|&e|&f|&1|&2|&3|&4|&5|&6|&6|&7|&8|&9|$)/g;
	result = regexPink.exec(text);
	while (result){
		text = text.replace(result[1] + result[2],"<span class='minecraft-color-pink'>" + result[2] + "</span>");
		result = regexPink.exec(text);
	}
	return text;
}

function convertHTMLToMinecraftText(html){
	
}