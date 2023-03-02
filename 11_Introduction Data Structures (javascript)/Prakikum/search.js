function search(){
        let mencari = false
        const search = document.getElementById('cari')
        contactList.forEach((data) => {
            if (data[1] === search.value) {
                return mencari = true
            }
        })
        if (mencari) {
            alert('Data Ada')
        } else {
            alert('Data tidak ada')
        }
    }
