/* Tab JavaScript from Vesa Piittinen on CodePen: https://codepen.io/Merri/pen/bytea */

if(window.ltIE9) {
  (function($) {
    $('.tabs input[type="radio"]:checked')
    .closest('.tab')
    .addClass('checked');
    $('html').on('click', '.tabs input', function() {
      $('input[name="' + this.name + '"]')
      .closest('.tab')
      .removeClass('checked');
      $(this)
      .closest('.tab')
      .addClass('checked');
    });
  })(window.jQuery);
}
