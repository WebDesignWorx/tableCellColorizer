jQuery Plugin tableCellColorizer
================================

The jQuery tableCellColorizer plugin is a lightweight jQuery plugin that allows you to colorize table cells based on predefined words. 
It provides an easy way to highlight specific words found within table cells by applying custom styles.

## Installation

1. Download the `jquery.tableCellColorizer.js` file from the repository.
2. Include jQuery library (v1.12.4 or later) and the `jquery.tableCellColorizer.js` file in your HTML file:

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/jquery.tableCellColorizer.js"></script>
   ```

## Usage

To use the tableCellColorizer plugin, follow these steps:

1. Create a key-value array of words and their corresponding styles. This will define how the table cells should be colored.

   ```javascript
   var wordsToStyles = {
     'Free': 'background:#9fe4c1;color:#000;',
     'Used': 'background:#ff0000;color:#fff;',
   };
   ```

2. Apply the plugin to the desired table(s) using the `tableCellColorizer` method.

   ```javascript
   $(document).ready(function() {
     $('.mytable').tableCellColorizer(wordsToStyles);
   });
   ```

   This will colorize the table cells based on the defined words and their styles.
   
   It is also possible to apply the plugin to **all tables**...
      ```javascript
     $('table').tableCellColorizer(wordsToStyles);
   ``` 
   or in tables you want to address based on their parent div.
      ```javascript
     $('div.class-name').tableCellColorizer(wordsToStyles);

## Plugin author
Christian M. Stefan [https://github.com/WebDesignWorx] (Stefek)


## License

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
