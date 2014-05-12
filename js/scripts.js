// My Scripts
$(document).foundation();
	$('article').readmore({
		
		maxHeight : 0,
		
	});
// Click link hide article
$('a').click(function(){
	$('article').readmore({
		speed : 1000,
		maxHeight : 0,
		startOpen: true
	});

});

