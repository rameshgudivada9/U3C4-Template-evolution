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

        let p=document.createElement("h4");
        p.innerHTML=ele.title;

        let des=document.createElement("p")
        des.innerText=ele.description

        div.append(h4,image,p,des);

        div.onclick=()=>{
            localStorage.setItem("article",JSON.stringify(ele));

            window.location.href="news.html";

        }

        main.append(div);
    })

    //add append logic here

}

export { apiCall, appendArticles }