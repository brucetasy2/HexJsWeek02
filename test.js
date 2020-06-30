var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'MTRWhhB7bYbODvKegBEf74ioRXwFSFYHpkhqrvRdVJ7KxPYaDPtpt6He04kv',
};

var data = [];

var item1 = '1LnYdzXUgL9X4ambG0zCwES8YAWlGSRCabxEnu8MBhf6CFeEmDuCDjkUAEeumgVw';
var item2 = '2mLiNu5upgQfLpH2XOWOG0jJuasXTauQowcjk45J8FvKrES018LohZE4g8aTh1Sh';

var Data1 = {
    title: '鼬鼠咖啡',
    category: 'animal',
    content: '咖啡',
    description: 'Weasel coffee',
    imageUrl: [
        'https://i2.kknews.cc/SIG=2bmfp3s/102000052q538pnpo0p5.jpg',
        'https://coffee.yipee.cc/wp-content/uploads/2015/05/Weasel-Coffee-2-620x413.jpg',
        'https://i1.kknews.cc/SIG=37gdrvl/s7n00063npsqo503oq0.jpg',
    ],
    enabled: true,
    origin_price: 1200,
    price: 1100,
    unit: '250g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "果香"
    }
};

var Data2 = {
    title: '大象咖啡',
    category: 'animal',
    content: '咖啡',
    description: '大象咖啡',
    imageUrl: [
        'http://www.kelsey.orgs.one/images/image/156/15678316.jpg',
        'http://https://fpscdn.yam.com/Njk1NDE3d29ybGQ=/4b650dab4c12f42e.jpg',
        'https://image2.pearvideo.com/itl/null/itl-10015795-11096738.jpg',
    ],
    enabled: true,
    origin_price: 40000,
    price: 39000,
    unit: '1000g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "堅果香"
    }
};

var Data3 = {
    title: '鳥屎咖啡',
    category: 'animal',
    content: '咖啡',
    description: '世界唯一Camocim Estate農場生產',
    imageUrl: [
        'https://i2.kknews.cc/SIG=1mvpgeh/18ns0005505779o3p40p.jpg',
        'https://i2.kknews.cc/SIG=1hdu5jk/18ns00054682n30s7orp.jpg',
        'https://i2.kknews.cc/SIG=2iqseud/18ns000560q0q96o3r3r.jpg',
    ],
    enabled: true,
    origin_price: 5000,
    price: 4800,
    unit: '磅',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "淡淡堅果香、胡椒香氣、黑麵包濕香味"
    }
};


function frontProductlist(obj) {
    let url = `${obj.url}${obj.uuid}/ec/products`;
    console.log(url);
    axios
        .get(url)
        .then(function (res) {
            data = [];
            data = res.data.data;
            data.forEach((element) => {
                console.log(element.id);
            });
        })
        .catch(function () {
            console.log('ERR');
        });
}

function backendDestroyProduct(obj, prductionId) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product/${prductionId}`;
    console.log(`DestroyProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .delete(url)
        .then(function (res) {
            console.log('DestroyProduct SUCESS !!');
            // frontProductlist(inf);
        })
        .catch(function () {
            console.log('ERR');
        });
}

function backendPatchProduct(obj, prductionId, dataSet) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product/${prductionId}`;
    console.log(`EditProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .patch(url, dataSet)
        .then(function (res) {
            console.log('EditProduct SUCESS !!');
        })
        .catch(function () {
            console.log('ERR');
        });
}

function backendPostProduct(obj, dataSet) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product`;
    console.log(`CreateProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .post(url, dataSet)
        .then(function (res) {
            console.log('CreateProduct SUCESS !!');
        })
        .catch(function () {
            console.log('ERR');
        });
}


function backendShowProductDetail(obj, prductionId) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product/${prductionId}`;
    console.log(`DestroyProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .get(url)
        .then(function (res) {
            console.log('ShowProductDetail SUCESS !!');
            data = res.data.data;
            for (const [key, value] of Object.entries(data)) {
                console.log(`${key}: ${value}`);
            }
        })
        .catch(function () {
            console.log('ERR');
        });
}

//取出產品列表 OK
// frontProductlist(inf);

//刪除一項產品
// backendDestroyProduct(inf,'ZISob91VzGydaAGIaLtykA5xQrV0rZ2adQ6NwCAANidBi3hZOLQ4RAL0aFOUz3BQ');

// 修改資料  OK 
// backendPatchProduct(inf, item2,alterData2);
// backendPatchProduct(inf, item1,alterData1);

// 建立資料 OK
//  backendPostProduct(inf,Data1);
//  backendPostProduct(inf,Data2);
//  backendPostProduct(inf,Data3);


// 顯示產品資料 OK
backendShowProductDetail(inf, 'qEtPzump5po5qn2LcHRDEzVvbAWb8eRnhDOcJO0EpPIgzU1hqifh7LWjlRtWGd4H');



function render (){
    let innStr="";
    innStr +=`
    <div class="card">
        <img :src="imageUrl" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">
                {{大象咖啡}}
            </h5>
            <span class="text-danger">{{price}}</span>
            <span class="card-text completed">{{origin_price}}</span>
            <p class="card-text">
                {{description}} {{unit}}
            </p>
            <button class="btn btn-dark mt-3 mx-auto">加入購物車</button>
        </div>
    </div>`;
}