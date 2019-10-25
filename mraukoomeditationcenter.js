$(document).ready(function() {
	var s3 = 'https://mraukoomeditationcenter.s3-ap-southeast-1.amazonaws.com';
	var url = './all-albums.json';
	$.get(url, function(albums) {
		$('.pager').pagination({
			dataSource: albums,
			pageSize: 4,    				
			ulClassName: "pagination",
			callback: function(albums, pagination) {
				$('li').addClass('page-item');					
				$('li a').addClass('page-link');
				$('li a').addClass('text-dark');
				$(".content").html("");
				for(var i = 0; i < albums.length; i++) {
					var card = $('<div class="card mb-4" style="width: 24rem;">');
					card.append('<div class="card-header"><h5>'+ albums[i].title +'</h5></div>');
					var audio = $('<ul class="list-group list-group-flush">');
					for(var j = 0; j < albums[i].audios.length; j++) {
						audio.append('<li class="list-group-item"><p>'+albums[i].audios[j].title+'</p><audio controls><source type="audio/mpeg" src="'+s3+albums[i].audios[i].location+'"></audio></li>');
					}
					card.append(audio);
					$(".content").append(card);
				}
			}
		});
	});
});
