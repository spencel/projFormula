function main() {


	var strHtml = MathJax.HTML.Element(
		"div",
		{id: "MathDiv"},
		["\\(F=ma\\)"]
		);

	jQuery( "body" ).html( strHtml ); 

	for (var i = 0; i <100000; i++){
		console.log(i + " ");
	}
}