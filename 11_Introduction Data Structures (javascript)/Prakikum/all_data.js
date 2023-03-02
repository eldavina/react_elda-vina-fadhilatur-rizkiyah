//method to get all data
function allData(){
            
    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data and show data in table
    contactList.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.namaproduk}</td>
                <td>${value.productcategory}</td>
                <td>${value.imageofproduct}</td>
                <td>${value.productfreshness}</td>
                <td>${value.additionaldescription}</td>
                <td>${value.productprice}</td>

                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})"> Delete
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
    })
}