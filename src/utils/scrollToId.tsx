export const scrollToId = (id : string) =>{
    const idElement = document.getElementById(id)

    const pos = idElement?.offsetTop
    scrollTo({
        top : pos ,
        behavior:"smooth"
        
    })

}