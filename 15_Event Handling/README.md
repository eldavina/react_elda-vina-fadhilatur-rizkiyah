<h2> Apa Itu State? </h2>
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari komponen lain.
<ol type="1">
    <li> Data yang bisa dimodifikasi menggunakan setState </li>
    <li> Setiap terjadi modifikasi akan terjadi render ulang </li>
    <li> Bersifat Asynchronous </li>
    <li> Dipakai dalam class </li>
</ol>
<h2> Perbedaan Pros dan State </h2>
<ol type="a">
    <li>Props</li>
    <ul>
        <li>Read only</li>
        <li>Tidak dapat dimodifikasi</li>
    </ul>
    <li>State</li>
    <ul>
        <li>Can be asynchronous</li>
        <li>Bisa dimodifikasi menggunakan this.setState</li>
    </ul>
</ol>
<h2> Apa itu Stateful & Stateless Component? </h2>
<ol type="a">
    <li>Stateful Component</li>
        Stateful component adalah memiliki state. component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.
    <li>Stateless Component</li>
        Stateless component adalah tidak memiliki state hanya props. Umumnya component ini dibuat dengan funcction karena codenya lebih ringkas.
</ol>
<h2>Nama Lain Stateful dan Stateless </h2>
<ol type="1">
    <li>Smart Component & Dump Component</li>
    <li>Container Component & Presenatiopnal Component</li>
</ol>
<h2>Perbedaan Komponen Stateful & Komponen Stateless </h2>
<ol type="a">
    <li>Stateful Component</li>
    <ul>
        <li>Mengerti tentang aplikasi</li>
        <li>Melakukan data fetching (pengambilan data)</li>
        <li>Berinteraksi dengan aplikasi</li>
        <li>Tidak dapat digunakan kembali</li>
        <li>Meneruskan status dan data ke anak-anaknya</li>
    </ul>
    <li>Stateless Component</li>
    <ul>
        <li>Tidak tahu tentang aplikasi</li>
        <li>Tidak melakukan data fetching (pengambilan data)</li>
        <li>Tujuan utamanya adalah visualisasi</li>
        <li>Dapat digunakan kembali</li>
        <li>Hanya berkomunikasi dengan induk langsungnya</li>
    </ul>
</ol>
<h2> Apa itu Handling Event? </h2>
Handling event adalah suatu metode untuk menangani sebuah evenet / aksi yang diberika pengguna kepada suatu komponen. <br>
Event adalah suatu peristiwa yang dipicu oleh pengguna pada suaatu komponen, misalnya tombol ditekan.
<h2> Contoh List Event </h2>
<ol type="1">
    <li> Clipboard Events </li>
    <ul>
        <li>Promise terpenuhi</li>
    </ul>
    <li> Form Events </li>
    <ul>
        <li>onChange</li>
        <li>onSubmit</li>
    </ul>
    <li> Mouse Events </li>
    <ul>
        <li>onClick</li>
        <li>onDoubleClick</li>
        <li>onMouseOver</li>
    </ul>
    <li> Generic Events </li>
    <ul>
        <li>onError</li>
        <li>onLoad</li>
    </ul>
</ol>