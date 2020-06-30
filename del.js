var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'MTRWhhB7bYbODvKegBEf74ioRXwFSFYHpkhqrvRdVJ7KxPYaDPtpt6He04kv',
};

var data = [];

var item1 = 'AE1iUCWQl24MopWBvUFDlYSlF7E5l76tuBhuaVCKF1eAgTjl0j7gkcVuzFR0Ou0s';
var item2 = 'E8c3pH1pJjaIA7a2wZ61E3TXsKkDx3Y9Brso5mF9tyg8KKqWssKOJQGU8ujTSNwx';
var item3 = 'eBXJrmblA83BHMRLYeIbnjVSSgw88Lz3wQFM4TxUUxr2K0k56FqTpvHfwdCD7M7U';


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

//刪除一項產品
backendDestroyProduct(inf,item1);
backendDestroyProduct(inf,item2);
backendDestroyProduct(inf,item3);


