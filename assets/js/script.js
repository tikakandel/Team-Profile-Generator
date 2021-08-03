
            <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var header1 = $('<div class="card-header text-center h4">');
            header1.text("tika");
            var header2 = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-user-secret fa-3x">');
            header2.text(" Manager");
            header2.prepend(icon);

            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
           // cardTitle.text("Employee Information:");
            var cardText = $('<p class="card-text">');
            cardText.text("ID: 323");
            var cardText2 = $('<p class="card-text">');
            cardText2.text("Email: jack@g");
            var cardText3 = $('<p class="card-text">');
            cardText3.text("Office #: 34");
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardText2);
            cardBody.append(cardText3);
    
            card.append(header1);
            card.append(header2);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>        
            
            <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var header1 = $('<div class="card-header text-center h4">');
            header1.text("jack");
            var header2 = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-tools fa-3x">');
            header2.text(" Engineer");
            header2.prepend(icon);

            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
           // cardTitle.text("Employee Information:");
            var cardText = $('<p class="card-text">');
            cardText.text("ID: 34");
            var cardText2 = $('<p class="card-text">');
            cardText2.text("Email: ran@g");
            var cardText3 = $('<p class="card-text">');
            cardText3.text("Github: esadf");
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardText2);
            cardBody.append(cardText3);
    
            card.append(header1);
            card.append(header2);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>        
            