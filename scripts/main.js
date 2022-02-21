async function apiCall(url) {
try {
    let res =await fetch(url);

    let data=await res.json()

    return data;
    
} catch (error) {
    
    console.log(error);
}
   

    //add api call logic here


}


function appendArticles(articles, main) {

    articles.forEach(ele =>{

        let div=document.createElement("div");

        let h4=document.createElement("h4");
        h4.innerText=ele.source.name;

        let image=document.createElement("img");
        image.src=ele.urlToImage;

        let p=document.createElement("p");
        p.innerHTML=ele.title;

        div.append(h4,image,p);

        main.append(div);
    })

    //add append logic here

}

export { apiCall, appendArticles }