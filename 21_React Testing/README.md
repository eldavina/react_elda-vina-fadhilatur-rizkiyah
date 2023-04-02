<h2> Render dan Debug </h2>
Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.<br>
React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Iutlah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.
<h2> Memilih Elemen Kategori Testing </h2>
<ul>
<li>LabelText</li>
getByLabelText : < label for="search" />
<li>PlaceholderText</li>
getByPlaceholderText : < input placeholder="Search" />
<li>AltText</li>
getByAltText : < img alt="profile" />
<li>DisplayValue</li>
getByDisplayValue : < input value = "JavaScript" />
</ul>
<h2> Menginstal React Hook Testing Library </h2>
Kita dapat menginstall React Hook Testing Library dengan cara "npm install -D @testing-library/react-hooks"
