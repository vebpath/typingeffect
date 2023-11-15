let text = document.getElementById('text')
let speed = 20
let index = 0
let typingtext = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aut harum non, laudantium distinctio at, recusandae itaque earum illum quod reprehenderit molestias ducimus molestiae vitae labore reiciendis. Voluptatem harum ullam saepe a voluptatum qui consequatur, in unde pariatur eius sint veritatis neque nulla. Dicta, quasi? Ipsum cumque harum dolorum in."

function typewriter(){
    if(index<typingtext.length){
        text.innerHTML += typingtext.charAt(index)
        index++
        setTimeout(typewriter,speed)
    }
}