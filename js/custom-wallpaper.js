jQuery($ => {
	if (CONFIG_EX && CONFIG_EX.bannerWallpaper)
	{
		let banner = $('#banner');
		let container = $('#subtitle').parent('div');
		container.addClass('hint--always hint--large hint--rounded hint--bottom');
		let hintColors = ['hint--success', 'hint--info', 'hint--error', 'hint--warning'];
		let wallpapers = CONFIG_EX.bannerWallpaper;
		let wpIdx = -1;
		let colorIdx = -1;

		function random (min, max)
		{
			return Math.floor(Math.random()*max + min);
		}

		function changeWP ()
		{
			let tmpWallpapers = [...wallpapers];
			let tmpColors = [...hintColors];
			if (wpIdx != -1)
			{
				tmpWallpapers.splice(wpIdx, 1);
			}
			if (colorIdx != -1)
			{
				tmpColors.splice(colorIdx, 1);
			}
			wpIdx = random(0, tmpWallpapers.length);
			colorIdx = random(0, tmpColors.length);
			banner.css('background', `url('${tmpWallpapers[wpIdx].url}') no-repeat center center`);
			container.removeClass(hintColors.join(' ')).addClass(tmpColors[colorIdx]).attr('data-hint', tmpWallpapers[wpIdx].hint).toggleClass('hint--top').toggleClass('hint--bottom');
			setTimeout(changeWP, 30000);
		}

		changeWP ();
	}
});