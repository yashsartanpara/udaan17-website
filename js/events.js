var JQDoc = $(document);
JQDoc.ready(function () {
    //begin:background color and img
   
    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').attr('src', "img/" + $('#ubg').data('ubgi'));
    //end: background color and img
});
	function openeventmodal(elem)
	{
	    console.log($(elem).children('a').attr('href'));
		var temp = document.getElementById($(elem).children('a').attr('href').slice(1));
		$(temp).css('display','block');

	}

	function closeeventmodal()
	{
		var temp = document.getElementById("events-modal");
		$(temp).addClass("hidden");
	}

