function find(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('namaproduk').value = value.namaproduk
           document.getElementById('productcategory').value = value.productcategory
           document.getElementById('imageofproduct').value = value.address
           document.getElementById('productfreshness').value = value.productfreshness
           document.getElementById('additionaldescription').value = value.additionaldescription
           document.getElementById('productprice').value = value.productprice
        }
    })
    
}