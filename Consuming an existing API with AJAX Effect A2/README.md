# Consuming an existing API with AJAX Effect

Goal in this assignment is to design a frontend page (html) which would consume an already existing API that is freely available with an AJAX effect.

Your Frontend layout must contain:

· Search Box

· Search Button

· Table

If user doesn’t write anything in the search box (empty query), table should be displayed and weather of 5 major cities of Pakistan: (Islamabad, Lahore, Karachi, Quetta, Peshawar) should be displayed in the table. https://openweathermap.org/current#severalid

If user enters a specific city; weather details of that city should only be displayed https://openweathermap.org/current#name

When you visit the page for the first time or if API doesn’t return a valid result or city is invalid your Front-end should display a message: “Invalid result” without the table.

Remember one thing that table would be updating the results according to what you type in the search box and this should happen with an AJAX effect. Otherwise you would lose marks.

You might need an API Key to consume the weather API and in order to get that you would need to create an account first: https://home.openweathermap.org/users/sign_up

After creating the account you would receive a confirmation email once you confirm your identity in another email you would receive the API key which would allow to consume the API. Documentation details would be there on how to use the API.
