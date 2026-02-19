function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}


function filterArticles() {
    
    if (document.getElementById("opinionCheckbox").checked) {
        const opinion = document.querySelectorAll(".opinion");
        opinion.forEach(op => {
            op.style.display = "block"
        });
    }
    else {
        const opinion = document.querySelectorAll(".opinion");
        opinion.forEach(op => {
            op.style.display = "none"
        });
    }
    
    
    if (document.getElementById("updateCheckbox").checked) {
        const update = document.querySelectorAll(".update");
        update.forEach(op => {
            op.style.display = "block"
        });
    }
    else {
        const update = document.querySelectorAll(".update");
        update.forEach(op => {
            op.style.display = "none"
        });
    }
    
    
    if (document.getElementById("recipeCheckbox").checked) {
        const recipe = document.querySelectorAll(".recipe");
        recipe.forEach(op => {
            op.style.display = "block"
        });
    }
    else {
        const recipe = document.querySelectorAll(".recipe");
        recipe.forEach(op => {
            op.style.display = "none"
        });
    }
    
}



function addNewArticle() {
    
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    let typeClass = "";
    let markerText = "";

    if (document.getElementById("opinionRadio").checked) {
        typeClass = "opinion";
        markerText = "Opinion";
    } 
    else if (document.getElementById("recipeRadio").checked) {
        typeClass = "recipe";
        markerText = "Recipe";
    } 
    else if (document.getElementById("lifeRadio").checked) {
        typeClass = "update";
        markerText = "Update";
    }

    const article = document.createElement("article");
    article.classList.add(typeClass);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = markerText;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    

    document.getElementById("articleList").appendChild(article);
    document.getElementById("newContent").reset();
    
}