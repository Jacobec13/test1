function cardsParser(string){
	var splitStrings = string.split("$$"), 
	    outArray = [];
	splitStrings.forEach(function(item){
		var objCard = {};
		var rawCard = item.split('$');
		objCard['vehicleParam'] = [];
		rawCard.forEach(function(word){
			var cleanWord = word.slice(1).trim();
			switch (word.charAt(0)){
				case '@': objCard['from'] = cleanWord; break;
				case '#': objCard['to'] = cleanWord; break;
				case '%': objCard['vehicle'] = cleanWord; break;
				case '&': objCard['vehicleParam'].push(cleanWord); break;
				default: throw 'Unknown error';
			}
		});
		outArray[objCard['from']] = objCard;
	});
	return outArray;
}

function cardsOutput(array){
	var outString = "";
	array.forEach(function(card, num){
		outString += "Go to: " + card['from'] + ". Travel to: " + card['to'] + ". Use " + card['vehicle'] + ".<br>";
		if(card['vehicleParam'].length !== 0){
			outString += "Vehicle parameters:<br>";
			card['vehicleParam'].forEach(function(param){
				outString += "- " + param + "<br>";
			});
		}
		if(num + 1 !== array.length){
			outString += "Next step:<br>"
		}
	});
	return outString;
}

function cards(string){
	var arrayCards = cardsParser(string);
	var usedCards = [], sortCards = [];
	console.log(arrayCards);
	 for(card in arrayCards){
		var cur = card, tmp = [];
		if(!usedCards[cur]){
			while(arrayCards[cur] && !usedCards[cur])
			{
				tmp.push(arrayCards[cur]);
				usedCards[cur] = true;
				cur = arrayCards[cur]['to'];
			}
			sortCards = tmp.concat(sortCards);
		}
	};
	
	return cardsOutput(sortCards);
}