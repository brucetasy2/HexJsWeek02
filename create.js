var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'MTRWhhB7bYbODvKegBEf74ioRXwFSFYHpkhqrvRdVJ7KxPYaDPtpt6He04kv',
};



var Data1 = {
    title: '麝香貓咖啡',
    category: 'animal',
    content: 'Kopi Luwak Coffee',
    description: '收集麝香貓的天然糞便製作的貓屎咖啡',
    imageUrl: [
        'https://upload.cc/i1/2020/06/30/Wo9Bwr.jpg',
    ],
    enabled: true,
    origin_price: 3000,
    price: 2900,
    unit: '1000g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "果香"
    }
};

var Data2 = {
    title: '大象咖啡',
    category: 'animal',
    content: 'Black Ivory Coffee',
    description: '大象咖啡',
    imageUrl: [
        'https://upload.cc/i1/2020/06/30/Gb82O3.jpg',
    ],
    enabled: true,
    origin_price: 54000,
    price: 55200,
    unit: '1000g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "麥芽香、草味"
    }
};

var Data3 = {
    title: '鳥屎咖啡',
    category: 'animal',
    content: 'Jacu Bird coffee',
    description: '巴西 Espirito Santo 生產',
    imageUrl: [
        'https://upload.cc/i1/2020/06/30/7DS2oZ.jpg',
    ],
    enabled: true,
    origin_price: 54000,
    price: 50000,
    unit: '1000g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "淡淡堅果香、胡椒香氣、黑麵包濕香味"
    }
};

var Data4 = {
    title: '猴子咖啡',
    category: 'animal',
    content: '咖啡',
    description: '印度卡納塔克邦 Chickmagalur 地區產',
    imageUrl: [
        'https://upload.cc/i1/2020/06/30/F1qUc3.jpg',
    ],
    enabled: true,
    origin_price: 1000000,
    price: 990000,
    unit: '1000g',
    options: {
        "工法": "水洗、日曬",
        "烘培": "中培",
        "風味": "甜蜜香味"
    }
};


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




// 建立資料 OK
 backendPostProduct(inf,Data1);
 backendPostProduct(inf,Data2);
 backendPostProduct(inf,Data3);
 backendPostProduct(inf,Data4);

