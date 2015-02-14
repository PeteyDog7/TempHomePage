/* Custom JS */

/* WOW */

wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated',
      offset:       50,
      mobile:       false,
      live:         true
    }
  )
  wow.init();

  /* Bootstrap Tooltip */

$(function () {
	$('[data-toggle="popover"]').popover({
			//trigger: 'hover  focus'
		});
})