document.getElementById('btn').addEventListener('click', async () => {
  const query = document.getElementById('search').value.trim();
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';
  if (!query) return;

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
  const data = await res.json();

  if (!data.meals) {
    resultDiv.innerHTML = '<p>No recipes found!</p>';
    return;
  }

  data.meals.forEach(meal => {
    const div = document.createElement('div');
    div.className = 'recipe';
    div.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
    `;
    resultDiv.appendChild(div);
  });
});
