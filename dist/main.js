
const render = new Renderer()

//With "Enter"
let input = $('#ing').keypress((event) => {
    if (event.keyCode === 13) {
        fetchRecipe()
    }
})


const fetchRecipe = function () {
    let input = $('#ing').val()
    console.log(input)
    $.get(`/recipes/${input}`, (data) => { render.renderRecipes(data) })
     
    
}


