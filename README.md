#Capital Gain Project

Welcome to the Capital Gain Project! This repository contains the source code for a cryptocurrency news and exchanges information web application. The project leverages various APIs to fetch and display up-to-date information about cryptocurrency exchanges and news articles related to cryptocurrencies.

##Features
    1. Homepage: Provides the total market cap of cryptocurrency along with the total number of crypto coins. It also displays the top 10 crypto coins and news.
    2. Cryptocurrencies: Displays a list of cryptocurrency coins with relevant details such as line charts, statistics, important links, and more.
    3. Exchanges: Displays a list of cryptocurrency exchanges with relevant details such as trust scores, 24-hour trade volumes, and more.
    4. Crypto News: Provides the latest news articles related to cryptocurrencies, including titles, summaries, authors, and publication dates.

##Installation
To run this project locally, follow these steps:

    1. Clone the repository:
        git clone https://github.com/yourusername/capital-gain.git
        cd capital-gain

    2. Install dependencies:
        npm install

    3. Start the development server:
        npm start

The application should now be running on http://localhost:3000.

##API Integration
###Hompage
The application fetches data about cryptocurrencies from [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1). To access this feature, ensure you have the necessary API keys and access to the endpoints.
###Cryptocurrency coins
The coins section fetches the latest cryptocurrency prices from [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1). This requires API access and proper configuration to fetch data effectively.
###Cryptocurrency Exchanges
The exchanges section fetches data about cryptocurrency exchanges from [Coinpaprika](https://rapidapi.com/lbraciszewski/api/coinpaprika1). To access this feature, ensure you have the necessary API keys and access to the endpoints.
###Crypto News
The news section fetches the latest cryptocurrency news articles from [CryptoNews](https://rapidapi.com/apiwizard/api/crypto-news51). This requires API access and proper configuration to fetch data effectively.

##Components
###Homepage Component
Displays global crypto stats along with previews of:

    Global Crypto Stats: Total Cryptocurrencies, Total Exchanges, Total Market Cap
    Top 10 Cryptos In The World
    Latest crypto news

###Cryptocurrencies Component
Displays a list of clickable cards for crypto coins with details such as:

    Graphs from 3 hours to 5 years
    Coin Value Statistics
    Coin Information
    Coin Links

###Exchanges Component
Displays a list of cryptocurrency exchanges with details such as:

    Exchange name
    Trust score
    24h trade volume
    Number of sessions per month

###News Component
Displays the latest cryptocurrency news articles with details such as:

    Title
    Summary
    Author
    Published date

##Contributing

I welcome contributions from the community. To contribute, follow these steps:

    Fork the repository
    Create a new branch (git checkout -b feature-branch)
    Make your changes
    Commit your changes (git commit -m 'Add some feature')
    Push to the branch (git push origin feature-branch)
    Open a pull request

Please make sure to update tests as appropriate.
