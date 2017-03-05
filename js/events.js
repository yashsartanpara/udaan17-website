var JQDoc = $(document);
JQDoc.ready(function () {
    //begin:background color and img
   
    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').attr('src', "img/" + $('#ubg').data('ubgi'));
    //end: background color and img
    var color = {
    	ironman:["216,79,63","121,44,36","193,153,81"]
    }
    window.color = color;
    // var figure = $('#ubg').data('ubgi').slice(0,-4);
    // var acolor = color[figure][Math.floor(Math.random()*color[figure].length)];
	// window.acolor = acolor;
	// console.log(acolor);
	// document.on('click','')



});
	function openeventmodal()
	{
		var temp = document.getElementById("events-modal");
		$(temp).removeClass("hidden");

	}

	function closeeventmodal()
	{
		var temp = document.getElementById("events-modal");
		$(temp).addClass("hidden");
	}

