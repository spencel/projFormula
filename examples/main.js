function main() {

	/*
	jQuery("body").html("<div id='MathDiv'>The answer you provided is: \\({}\\).</div>");

	MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathDiv"]) // Might not need this here?
	
	jQuery( document ).on( "click", function() {

		
		
		var studentDisplay = null;
		MathJax.Hub.Queue(function () {
			studentDisplay = MathJax.Hub.getAllJax("MathDiv")[0];
		});

		MathJax.Hub.Queue(["Text",studentDisplay,"x+1"]);

	});*/
	

	jQuery( document ).on( "click", function() {

		var strHtml = MathJax.HTML.Element(
			"div",
			{id: "MathDiv"},
			["\\(F=ma\\)"]
		);
		
		jQuery( "body" ).html( strHtml ).css({ "visibility": "hidden" });

		MathJax.Hub.Queue([ "Typeset", MathJax.Hub, "MathDiv" ]);

		var Preview = {
			makeVisible: function () {
				jQuery( "body" ).css({ "visibility": "visible" });
			}
		}

		MathJax.Hub.Queue(
			[ "Typeset", MathJax.Hub, "MathDiv" ],
			[ "makeVisible", Preview ]
		);

		

	});

}