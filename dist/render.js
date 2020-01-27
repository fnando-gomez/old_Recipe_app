
class Renderer{

    renderRecipes(data){
        let source = $('#recipes-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ data })
        $('#container').empty().append(newHTML)
    }

}