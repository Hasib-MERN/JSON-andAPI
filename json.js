const shop = {
    owner : 'alia',
    address : {
        street : 'dhaka 1212',
        city : 'dhaka',
        country : 'bangladesh'
    },
    revenue :45000,
    isOpen: true,
    isNew : false,
}
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);