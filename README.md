## How to Run

### Clone the project

```bash
  git clone https://dredsoft-labs-admin@bitbucket.org/dredsoft-labs/ecommerce.git
```

### Go to the project directory

```bash
  cd ecommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

### Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:


  [http://localhost:3000](http://localhost:3000)


### AI Feature Chosen:

I chose to implement the recommendation system using a rule-based approach, given the one-hour time constraint. The logic scores each product based on attributes such as category, price similarity, rating, and title keyword match to determine how closely it relates to the currently viewed product. The top 5 products with the highest scores are then suggested. The full implementation of this logic can be found in ./src/utils/recommendation.js.

This setup can easily be extended to use OpenAI’s API or a custom ML-based model by sending a prompt or input data to the respective service and parsing the returned results. If the external AI service fails or is unavailable, the system can fall back to the rule-based method, ensuring robustness.

Additionally, the rule-based recommendation includes explanations for why each product was suggested. This is useful for debugging and can also provide transparency to the user, helping them understand the logic behind the recommendations.

### Possible Block Chain Integration.

The above AI recommendation feature can be integrated with blockchain by using on-chain user preferences, allowing users to store their interests or shopping history in their crypto wallet and receive personalized suggestions across platforms.