//method to get detail personal data based on id
function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('namaproduct').value = value.namaproduct
           document.getElementById('productcategory').value = value.productcategory
           document.getElementById('imageofproduct').value = value.address
           document.getElementById('productfreshness').value = value.productfreshness
           document.getElementById('additionaldescription').value = value.additionaldescription
           document.getElementById('productprice').value = value.productprice
        }
    })
    
}