jQuery `tableCellColorizer` Plugin
==================================

Das jQuery tableCellColorizer Plugin ist ein leichtgewichtiges jQuery-Plugin, mit dem Tabellenzellen basierend auf vordefinierten Wörtern mit css Inline-Stle versehen werden können. 
Es bietet eine einfache Möglichkeit, bestimmte Wörter innerhalb von Tabellenzellen hervorzuheben, indem benutzerdefinierte Stile angewendet werden.

## Installation

1. Die Datei `jquery.tableCellColorizer.js` aus dem Repository herunterladen.
2. Die jQuery-Bibliothek (Version 1.12.4 oder höher) und die Datei `jquery.tableCellColorizer.js` in die HTML-Datei einbinden:

   ```html
   <script src="path/to/jquery.min.js"></script>
   <script src="path/to/jquery.tableCellColorizer.js"></script>
   ```

## Verwendung

Folge diesen Schritten, um das tableCellColorizer-Plugin zu verwenden:

1. Erstelle ein Schlüssel-Wert-Array mit Wörtern und ihren entsprechenden Stilen. 
Dadurch wird festgelegt, wie die Tabellenzellen eingefärbt werden sollen.

   ```javascript
   var Begriff_zu_Stil = {
     'Frei': 'background:#9fe4c1;color:#000;',
     'Belegt': 'background:#ff0000;color:#fff;',
   };
   ```

2. Wenden Sie das Plugin auf die gewünschten Tabellen mit der Methode `tableCellColorizer` an.

   ```javascript
   $(document).ready(function() {
     $('.mytable').tableCellColorizer(Begriff_zu_Stil);
   });
   ```

   Dadurch werden die Tabellenzellen basierend auf den definierten Wörtern und Stilen eingefärbt.
   
   Sie können das Plugin auch auf **alle Tabellen** anwenden...
      ```javascript
     $('table').tableCellColorizer(Begriff_zu_Stil);
   ``` 
   oder auf Tabellen, die sich in einem bestimmten übergeordneten DIV befinden.
      ```javascript
     $('div.class-name').tableCellColorizer(Begriff_zu_Stil);

## Plugin-Autor
Christian M. Stefan (Stefek) [https://github.com/WebDesignWorx] 


## Lizenz

Dieses Plugin steht unter der MIT-Lizenz. Weitere Informationen finden Sie in der Datei [LICENSE](LICENSE).
