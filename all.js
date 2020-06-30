var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'MTRWhhB7bYbODvKegBEf74ioRXwFSFYHpkhqrvRdVJ7KxPYaDPtpt6He04kv',
};

var data = [];


function frontProductlist(obj) {
    let url = `${obj.url}${obj.uuid}/ec/products`;
    console.log(url);
    axios
        .get(url)
        .then(function (res) {
            data = [];
            data = res.data.data;
            console.log('response sucess!');
            render();
        })
        .catch(function () {
            console.log('response error!!!');
        });
}

function render() {
    let innStr = '';
    data.forEach(function (item) {
        innStr += `
    <div class="card">
        <img src="${item.imageUrl[0]}" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">
                ${item.title}
            </h5>
            <div class="row row-cols-2">
                <p class="text-danger col">特價:${commafy(item.price)}</p>
                <P class="text-primary strikethrough col">原價:${commafy(item.origin_price)}</P>
            </div>


            <div class="row row-cols-2">
                <p class="card-text col">工法:${item.options.工法}</p>
                <p class="card-text col">烘培:${item.options.烘培}</p>
                <p class="card-text col">風味:${item.options.風味}</p>            
                <p class="card-text text-primary col">單位:${item.unit}</p>
            </div>



            <button class="btn btn-dark mt-3 mx-auto">加入購物車</button>
        </div>
    </div>`;
    })
    // console.log(innStr);
    let divApp = document.querySelector("#app")
    divApp.innerHTML = innStr
}

function commafy(num) {
    num = num + "";
    var re = /(-?\d+)(\d{3})/
    while (re.test(num)) {
        num = num.replace(re, "$1,$2");
    }
    return num;
}

//取出產品列表 OK
frontProductlist(inf);


