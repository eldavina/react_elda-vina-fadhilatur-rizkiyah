function save(){

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.namaproduk      = document.getElementById('namaproduk').value, 
                value.productcategory      = document.getElementById('productcategory').value, 
                value.imageofproduct   = document.getElementById('imageofproduct').value, 
                value.productfreshness     = document.getElementById('productfreshness').value
                value.additionaldescription     = document.getElementById('additionaldescription').value
                value.productprice     = document.getElementById('productprice').value
            }
        });
        document.getElementById('id').value = ''

    }else{

        var item = {
            id        : id + 1, 
            namaproduk      : document.getElementById('namaproduk').value, 
            productcategory       : document.getElementById('productcategory').value, 
            imageofproduct   : document.getElementById('imageofproduct').value, 
            productfreshness     : document.getElementById('productfreshness').value,
            additionaldescription    : document.getElementById('additionaldescription').value,
            productprice     : document.getElementById('productprice').value
            
        }
        contactList.push(item)
    }

    localStorage.setItem('listItem', JSON.stringify(contactList))

    allData()

    document.getElementById('form').reset()
}