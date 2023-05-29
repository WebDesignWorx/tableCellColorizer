/*!
 * jQuery tableCellColorizer Plugin v0.0.1
 * https://github.com/WebDesignWorx/tableCellColorizer
 *
 * Description: A jQuery plugin to colorize table cells based on predefined words.
 *              It allows you to specify custom styles for specific words found in the table cells.
 *              Simply provide a key-value array of words and their corresponding styles.
 *
 * Licensed under the MIT License
 * (c) 2023 Christian M. Stefan (Stefek)
 */
(function($) {
  $.fn.tableCellColorizer = function(options) {
    // Default values array
    var defaults = {
      'Free': 'background:#9fe4c1;color:#000;',
      'Used': 'background:#ff0000;color:#fff;',
    };

    // Merge default options with user-provided options
    var settings = $.extend({}, defaults, options);

    // Iterate through each element in the jQuery collection
    return this.each(function() {
      var $div = $(this);

      // Iterate through the key-value array and replace table cells within the div
      $.each(settings, function(key, value) {
        var regex = new RegExp("\\b" + key + "\\b", "i");
        var $td = $div.find("td").filter(function() {
          return regex.test($(this).text());
        });

        // Check if the table cell containing the key is found
        if ($td.length > 0) {
          $td.attr("style", value);
        }
      });
    });
  };
})(jQuery);
