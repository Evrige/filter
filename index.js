const goods = [
    {
        title: "Ноутбук ASUS Laptop X515FA-BQ019 (90NB0W01-M00620) Slate Grey",
        rating: 1.7,
        imgSrc: "https://content2.rozetka.com.ua/goods/images/big/238637364.jpg",
        price: 16999,
        isDiscount: true,
        newPrice: 16499,
    },
    {
        title: "Ноутбук ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5",
        rating: 4.7,
        imgSrc: "https://content.rozetka.com.ua/goods/images/big_tile/238662392.jpg",
        price: 32999,
        isDiscount: true,
        newPrice: 28999,
        isBroken: true
    },
    {
        title: "Ноутбук ASUS VivoBook 17 K712EA-BX370 (90NB0TW3-M04470) Transparent Silver",
        rating: 4,
        imgSrc: "https://content1.rozetka.com.ua/goods/images/big_tile/247905065.jpg",
        price: 15499,
    },
    {
        title: "Ноутбук Asus ExpertBook B1 B1400CEAE-EB3491 14\" IPS (90NX0421-M00BA0) Black / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 256 ГБ",
        rating: 3.5,
        imgSrc: "https://content2.rozetka.com.ua/goods/images/big_tile/234941564.jpg",
        price: 15000,
        isDiscount: true,
        newPrice: 13485,
        isBroken: true
    },
    {
        title: "Ноутбук ASUS ROG Strix SCAR 15 G533ZX-LN060W (90NR08E2-M00430) Black",
        rating: 3.2,
        imgSrc: "https://content.rozetka.com.ua/goods/images/big_tile/249497722.jpg",
        price: 102824,
    },
    {
        title: "Ноутбук ASUS VivoBook S14 S435EA-HM020 (90NB0SU1-M00330) Deep Green",
        rating: 4.6,
        imgSrc: "https://content1.rozetka.com.ua/goods/images/big_tile/247906448.jpg",
        price: 34999,
        isDiscount: true,
        newPrice: 32499,
    },
    {
        title: "Ноутбук ASUS Laptop X515FA-BQ019 (90NB0W01-M00620) Slate Grey",
        rating: 4.7,
        imgSrc: "https://content2.rozetka.com.ua/goods/images/big/238637364.jpg",
        price: 16999,
        isDiscount: true,
        newPrice: 16499,
    },
    {
        title: "Ноутбук ASUS TUF Gaming F15 FX506LH-HN153 (90NR03U1-M08940) Fortress Gray + мышь Asus TUF M5",
        rating: 4.9,
        imgSrc: "https://content.rozetka.com.ua/goods/images/big_tile/238662392.jpg",
        price: 23999,
        isDiscount: true,
        newPrice: 22999,
        isBroken: true
    },
    {
        title: "Ноутбук ASUS VivoBook 17 K712EA-BX370 (90NB0TW3-M04470) Transparent Silver",
        rating: 3,
        imgSrc: "https://content1.rozetka.com.ua/goods/images/big_tile/247905065.jpg",
        price: 11499,
    },
    {
        title: "Ноутбук Asus ExpertBook B1 B1400CEAE-EB3491 14\" IPS (90NX0421-M00BA0) Black / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 256 ГБ",
        rating: 4.5,
        imgSrc: "https://content2.rozetka.com.ua/goods/images/big_tile/234941564.jpg",
        price: 18999,
        isDiscount: true,
        newPrice: 14999,
    },
    {
        title: "Ноутбук ASUS ROG Strix SCAR 15 G533ZX-LN060W (90NR08E2-M00430) Black",
        rating: 4,
        imgSrc: "https://content.rozetka.com.ua/goods/images/big_tile/249497722.jpg",
        price: 84999,
    },
    {
        title: "Ноутбук ASUS VivoBook S14 S435EA-HM020 (90NB0SU1-M00330) Deep Green",
        rating: 4.2,
        imgSrc: "https://content1.rozetka.com.ua/goods/images/big_tile/247906448.jpg",
        price: 30000,
    }

];
const divProducts = document.getElementsByClassName("catalog__products")[0];
const activeFiltersBar = document.getElementsByClassName("sidebar__active-filters")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const formPrice = document.getElementsByClassName("sidebar__price-filter")[0];
render();

let activefilters = [];
let activeGoods = [];
let priceArray= [];
//Function to render goods
function render(array = goods) {
    array.forEach((item) => {
        const renderItem = document.createElement("div");
        renderItem.classList.add("catalog__product");
        renderItem.innerHTML = `
                <div class="catalog__product-content">
                <img alt="image-laptop" class="catalog__product-image"
                         src=${item.imgSrc}>
                </div>
                <p class="catalog__product-title">${item.title}</p>
                <p class="catalog__product-rating">
                    <svg class="c-icon ${changeRating(item, 1)}" height="20" width="20">
                        <use xlink:href="#star"></use>
                    </svg>
                    <svg class="c-icon ${changeRating(item, 2)}" height="20" width="20">
                        <use xlink:href="#star"></use>
                    </svg>
                    <svg class="c-icon ${changeRating(item, 3)}" height="20" width="20">
                        <use xlink:href="#star"></use>
                    </svg>
                    <svg class="c-icon ${changeRating(item, 4)}" height="20" width="20">
                        <use xlink:href="#star"></use>
                    </svg>
                    <svg class="c-icon ${changeRating(item, 5)}" height="20" width="20">
                        <use xlink:href="#star"></use>
                    </svg>
                    <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
                        <symbol id="star" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
                        </symbol>
                    </svg>
                </p>
                ${takePrice(item)}
        `;

        divProducts.append(renderItem);
    });
}
//function to render rating goods
function changeRating(elem, count) {
    if (Math.ceil(elem.rating) >= count) return "active";
    return "";
}
//price selection
function takePrice(item) {
    if (item.isDiscount) return `
        <span class="catalog__product-price price-through">${item.price}₴</span>
        <span class="catalog__product-price price-hot">${item.newPrice}₴</span>
    `;
    else return `
         <span class="catalog__product-price">${item.price}₴</span>
    `;
}
//Clear goods DOM
function clearList() {
    divProducts.innerHTML = "";
}
//add filter name in DOM
function addFilters(filterName) {
    activefilters.push(filterName);

    const renderFilter = document.createElement("a");
    renderFilter.classList.add("sidebar__active-filter", `${filterName}`);
    renderFilter.setAttribute(`data-name`, filterName);
    renderFilter.setAttribute(`href`, "#");
    renderFilter.innerHTML = `
         ${filterForRender()} <span class="sidebar__active-close">&#10006;</span>
         `;
    activeFiltersBar.append(renderFilter);

    //function for render active goods
    renderActiveGoods();
    //What filter to render
    function filterForRender() {
        const priceFrom = Number(formPrice.from.value);
        const priceTo = Number(formPrice.to.value);
        if(filterName=== "price") return `${priceFrom}-${priceTo}`;
        else return filterName.slice(2);
    }
}


//Function for render goods after filtration
function renderActiveGoods() {
    clearList();
    activeGoods = goods;
    let priceFrom = Number(formPrice.from.value);
    let priceTo = Number(formPrice.to.value);
    if(priceFrom===0) priceFrom = priceArray[0];
    if(priceTo===0) priceTo = priceArray[1];
    console.log(priceFrom, priceTo)
    //Create array goods with filtration
    activefilters.forEach((filter)=>{
        activeGoods = activeGoods.filter((item => item[filter]));
        if(filter === "price") {
            if (isValidForm(priceFrom, priceTo)) {
                priceArray.push(priceFrom, priceTo);
                  return activeGoods = activeGoods.filter((item) => {
                    if (item.newPrice) return item.newPrice >= priceFrom && item.newPrice <= priceTo;
                    else return item.price >= priceFrom && item.price <= priceTo;
                });
            }
        }

    })
    // render active goods in DOM
    render(activeGoods);
}
//Remove filter from active
activeFiltersBar.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "SPAN") {
        const perent = target.closest("a");
        const nameFilter = perent.getAttribute("data-name");
        perent.remove();
        if (activefilters.includes(nameFilter)) {
            const index = activefilters.indexOf(nameFilter);
            activefilters.splice(index, 1);
            renderActiveGoods();
        }
    }
})
//Check click on filter
sidebar.addEventListener("click", (event) => {
    const target = event.target;
    event.preventDefault();
    if (target.tagName === "A" || target.tagName === "BUTTON") {
        const type = target.getAttribute("data-type");
        const value = target.getAttribute("data-tag");

        switch (type) {
            case "filter":
                if (validActiveFilters(value)){
                    addFilters(value);
                }
                break;
            case "price":
                validActiveFilters("price");
                addFilters("price");
                break;
            default:
                break;
        }
    }
});
function validActiveFilters(valueFilter) {
    if(activefilters.includes(valueFilter) && valueFilter==="price"){
        const price = document.getElementsByClassName("price")[0];
        price.remove();
        const index = activefilters.indexOf("price");
        activefilters.splice(index, 1);
    }
    if(!activefilters.includes(valueFilter)) return true;
}

//Check validation input form to filter price
function isValidForm(priceFrom, priceTo){
    if(typeof priceFrom === "number" && typeof priceTo === "number" && priceFrom > 0 && priceTo > 0 && priceFrom <= priceTo){
        formPrice.from.value = "";
        formPrice.to.value = "";
        formPrice.from.classList.remove("error-line");
        formPrice.to.classList.remove("error-line");

        return true;
    }
    else{
        if(typeof priceFrom !== "number" || priceFrom<=0 || priceFrom>=priceTo) formPrice.from.classList.add("error-line");
        if(typeof priceTo !== "number" || priceTo<=0 || priceFrom>=priceTo) formPrice.to.classList.add("error-line");
    }
}