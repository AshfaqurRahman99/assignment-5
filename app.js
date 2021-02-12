const searchFood = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    
    fetch (url)
    .then(res => res.json())
    .then(data => {
        displayFoodName(data.meals[0].strTags);
    })
}
const displayFoodName = foods => {
    const foodName = document.getElementById('food-container');

    
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = "col-md-3 d-flex justify-content-around";
        foodDiv.innerHTML = `
                <div  class=" bg-color">
                    <div class='item-image'>
                        <img id="showImage" src="${food.strMealThumb}" alt="">
                    </div>
                    <div>
                        <h3>${food.strTags}</h3>
                    </div>
                </div>` 
})
}