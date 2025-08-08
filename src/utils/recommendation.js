export function scoreProduct(product, selectedProduct) {
  let score = 0;

  // Do matching by category and assigne highest socre here
  if (product.category === selectedProduct.category) score += 3;

  // Check if prices relative is 20% closer
  const priceDiff = Math.abs(product.price - selectedProduct.price);
  const relativeDiff = priceDiff / ((product.price + selectedProduct.price) / 2);
  if (relativeDiff <= 0.3) score += 2;
  // Is the product rated good
  if (product.rating?.rate >= 3) score += 2;

  // Does title match, do they have closer title.
  const stopwords = new Set(['the', 'and', 'with', 'from', 'this', 'that', 'your', 'have', 'for', 'was', 'are', 'has', 'you', 'but', 'not']); // remove non relevant words (stop words)
  const selectedKeywords = selectedProduct.title
  .toLowerCase()
  .split(" ")
  .filter(word => word.length > 3 && !stopwords.has(word));;
  const titleMatch = selectedKeywords.some((word) =>
    product.title.toLowerCase().includes(word)
  );

  if (titleMatch) score += 1;

  // How many poeple has rated this.
  if (product.rating?.count > 150) score += 1;

  return score;
}


export function explainScore(product, selectedProduct) {
  const reasons = [];

  if (product.category === selectedProduct.category) {
    reasons.push("same category");
  }

  const priceDiff = Math.abs(product.price - selectedProduct.price);
  const relativeDiff = priceDiff / ((product.price + selectedProduct.price) / 2);
  if (relativeDiff <= selectedProduct.price * 0.3) {
    reasons.push("similar price");
  }

  if (product.rating?.rate >= 3) {
    reasons.push("high rating");
  }

  const stopwords = new Set(['the', 'and', 'with', 'from', 'this', 'that', 'your', 'have', 'for', 'was', 'are', 'has', 'you', 'but', 'not']); // remove non relevant words (stop words)
  const selectedKeywords = selectedProduct.title
  .toLowerCase()
  .split(" ")
  .filter(word => word.length > 3 && !stopwords.has(word));;
  const titleMatch = selectedKeywords.some((word) =>
    product.title.toLowerCase().includes(word)
  );
  
  
  if (titleMatch) {
    reasons.push("title keyword match");
  }

  if (product.rating?.count > 150) {
    reasons.push("popular product");
  }

  return reasons.join(", ");
}