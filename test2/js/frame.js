var chairMain = {
	collection: [],
	attr: function(type, value){
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			elem.setAttribute('style', (curStyle || "") + " " + type + ":" + value + ";");
		});
	},
	formatText: function(){ // font-family, font-size, color
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			var textParam = "";
			if(arguments[0]){
				textParam += "font-family: " + arguments[0] + ";";
			}
			if(arguments[1]){
				textParam += "font-size: " + arguments[1] + ";";
			}
			if(arguments[2]){
				textParam += "color: " + arguments[2] + ";";
			}
			elem.setAttribute('style', (curStyle || "") + " " + textParam);
		});
	},
	colorBackground: function(color){
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			elem.setAttribute('style', (curStyle || "") + " background-color" + ":" + color + ";");
		});
	},
	changePosition: function(){ // top, right, bottom, left
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			var textParam = "position: absolute;";
			if(arguments[0]){
				textParam += "top: " + arguments[0] + ";";
			}
			if(arguments[1]){
				textParam += "right: " + arguments[1] + ";";
			}
			if(arguments[2]){
				textParam += "bottom: " + arguments[2] + ";";
			}
			if(arguments[3]){
				textParam += "left: " + arguments[3] + ";";
			}
			elem.setAttribute('style', (curStyle || "") + " " + textParam);
		});
	},
	staticPosition: function(){ 
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			elem.setAttribute('style', (curStyle || "") + "position: static; ");
		});
	},
	changeSize: function(){ // width, height
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			var textParam = "";
			if(arguments[0]){
				textParam += "width: " + arguments[0] + ";";
			}
			if(arguments[1]){
				textParam += "height: " + arguments[1] + ";";
			}
			elem.setAttribute('style', (curStyle || "") + " " + textParam);
		});
	},
	changePadding: function(){ // top, right, bottom, left
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			var textParam = "";
			for(var i = 0; i < arguments.length; i++){
				textParam += String(arguments[i] || "") + " ";
			}
			elem.setAttribute('style', (curStyle || "") + " padding" + ": " + textParam.trim() + ";");
		});
	},
	changeMargin: function(){ // top, right, bottom, left
		collection.forEach(function(elem){
			var curStyle = elem.getAttribute('style');
			var textParam = "";
			for(var i = 0; i < arguments.length; i++){
				textParam += String(arguments[i] || "") + " ";
			}
			elem.setAttribute('style', (curStyle || "") + " margin" + ": " + textParam.trim() + ";");
		});
	}
};

function Chair(collection){
	var array = [];
	for(var i = 0; i < collection.length; i++){
		array.push(collection[i]);
	}
	this.collection = array || [];
}
Chair.prototype = chairMain;

function cc(param){
	return new Chair(document.QuerySelectorAll(param));
}