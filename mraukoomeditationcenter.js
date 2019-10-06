$(document).ready(function() {
	var url = './all-playlist.json';
	$.get(url, function(playlistIds) {
		console.log(playlistIds);
		$('.pager').pagination({
			dataSource: playlistIds,
			pageSize: 6,    				
			ulClassName: "pagination",
			callback: function(playlistIds, pagination) {
				$('li').addClass('page-item');					
				$('li a').addClass('page-link');
				$('li a').addClass('text-dark');
				$(".content").html("");
				for(var i = 0; i < playlistIds.length; i++) {
					var card = $('<div class="card mb-4" style="width: 24rem;">');
					var embeddedPlayer = '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/'+playlistIds[i]+'&color=%23404854&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
					card.append(embeddedPlayer);
					$(".content").append(card);
				}
			}
		});
	});
});
