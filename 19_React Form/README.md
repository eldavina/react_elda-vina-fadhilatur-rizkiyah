<h2> Apa Saja Macam-Macam Form? </h2>
    <ul>
        <li> Elemen < input > </li>
            Biasanya digunakan untuk inputan yang tidak terlalu panjang. Contoh: Nama
        <li> Elemen < textarea > </li>
            Biasanya digunakan untuk inputan yang cukup panjang. Contoh: Deskripsi
        <li> Elemen < select > </li>
            Biasanya digunakan untuk inputan yang pilihannya sudah ditentukan. Contoh: Kelas
        <li> Elemen < radio > </li>
            Radiobutton merupakan salah satu type di elemen < input >. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton. Contoh: Jenis Kelamin
        <li> Elemen < checkbox > </li>
            Radiobutton merupakan salah satu type di elemen < input >. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox. Contoh: Bahasa yang digunakan
        <li> Element Input Lainnya </li>
            Text, buton, color, checkbox, date, datetime-local, email, file, hidden, image, month, number, passworrd, radio, range, reset, search, submit, tel, time, url, week.
    </ul>
<h2> Apa Itu Controlled Component dan Uncontrolled Component? </h2>
<ol type="A">
    <li> Controlled Component </li>
        Controlled Component adalah sebuah elemen masukan form yang nilainya dikontrol oleh React dengan menggunakan state pada React.
    <li> Uncontrolled Component </li>
        Uncontrolled Component adalah alternatif lain dari Controlled Component, dimana data form akan ditangani oleh DOM-nya sendiri. Jadi tidak menulis event handler untuk setiap pembaruan state, namun menggunakan ref untuk mendapatkan nilai form dari DOM.
</ol>
<h2> Uncontrolled VS Controlled Component </h2>
Form Controlled dan Uncontrolled memiliki kelebihannya sendiri. Harus tau apa yang cocok untuk kondisi yang dibutuhkan. Jika formulir sangat sederhana dalam hal umpan balik UL, Uncontrolled dengan refs tidak masalah. 
