function convertToMinecraftChat(html, size) {
	if (typeof(size) === 'undefined') size = 12;
	return "<span class='minecraft-chat' style='font-size: " + size + "px;'>" + html + "</span>";
}

function convertMinecraftTextToHTML(text) {
	const replacements = [
		{ regex: /(&l)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-effect-bold'>$2</span>" },
		{ regex: /(&m)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-effect-strikeout'>$2</span>" },
		{ regex: /(&n)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-effect-underline'>$2</span>" },
		{ regex: /(&o)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-effect-italic'>$2</span>" },
		{ regex: /(&e)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-yellow'>$2</span>" },
		{ regex: /(&1)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-darkblue'>$2</span>" },
		{ regex: /(&a)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-green'>$2</span>" },
		{ regex: /(&2)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-darkgreen'>$2</span>" },
		{ regex: /(&0)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-black'>$2</span>" },
		{ regex: /(&6)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-orange'>$2</span>" },
		{ regex: /(&3)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-darkaqua'>$2</span>" },
		{ regex: /(&b)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-aqua'>$2</span>" },
		{ regex: /(&4)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-darkred'>$2</span>" },
		{ regex: /(&c)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-red'>$2</span>" },
		{ regex: /(&9)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-indigo'>$2</span>" },
		{ regex: /(&f)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-white'>$2</span>" },
		{ regex: /(&7)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-grey'>$2</span>" },
		{ regex: /(&8)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-darkgrey'>$2</span>" },
		{ regex: /(&5)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-purple'>$2</span>" },
		{ regex: /(&d)(.*?)(&[0-9a-f]|$)/g, replacement: "<span class='minecraft-color-pink'>$2</span>" }
	];

	text = text.split(' ').join('&nbsp;');

	replacements.forEach(({ regex, replacement }) => {
		text = text.replace(regex, replacement);
	});

	return text;
}

function convertHTMLToMinecraftText(html) {
	// Implementation needed
}
