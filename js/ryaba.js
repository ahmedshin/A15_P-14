const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

const fields = [
"var1",
"var2",
"var3",
"var4",
"var5",
"var6",
"speach"
]
function getValues() {
	let obj = {};
	fields.forEach(function(field, item){
		obj[field] = $("input[name=" + field + "]")[0].value
	})
	return obj
};

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
}

function handleData(arg){
	let message = ""
	let obj = getValues()
	

	arg['text'].forEach(function(item, index){
		for (key in obj){
		item = item.replace("{"+ key + "}",obj[key]);
	}
		message = message + item + "<BR>";
	}
	)
  // console.log(message)
  $('div#result').html(message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
