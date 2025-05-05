function ft_burger() {
    
    const burger = document.getElementById("burger_links");
    
    if (burger.style.display === "flex") {
        burger.style.display = "none";
    
    } else {
        burger.style.display = "flex";
        burger.style.flexDirection = "column";
}
}

function ft_randomlink () {

    let links= [
        'http://localhost/1',
        'http://localhost/2',
        'http://localhost/3',
        'http://localhost/4',
        'http://localhost/5'
        ];
    
    let random = Math.floor(Math.random() * links.length);

    let url = links[random];

    console.log("pick", url, "type", typeof(url));
    console.log("nb of links", links.length);

    window.location.href = url;
}

