function calculateTotal() {
    const nomorIdentitas = document.getElementById('nomor_identitas').value;
    const durasiMenginap = document.getElementById('durasi_menginap').value;
    const harga = parseFloat(document.getElementById('harga').value);
    const breakfast = document.getElementById('breakfast').checked;

    // Validasi Nomor Identitas
    const errorIdentitas = document.getElementById('errorIdentitas');
    if (nomorIdentitas.length !== 16) {
        errorIdentitas.textContent = "Isian salah, harus 16 digit";
        return;
    } else {
        errorIdentitas.textContent = "";
    }

    // Validasi Durasi Menginap
    const errorDurasi = document.getElementById('errorDurasi');
    if (isNaN(durasiMenginap) || durasiMenginap <= 0) {
        errorDurasi.textContent = "Isian salah, harus diisi dengan angka";
        return;
    } else {
        errorDurasi.textContent = "";
    }

    // Hitung Total Bayar
    let totalBayar = harga * durasiMenginap;

    // Diskon jika lama menginap lebih dari 3 hari
    if (durasiMenginap > 3) {
        totalBayar *= 0.9; // Diskon 10%
    }

    // Tambahan biaya breakfast
    if (breakfast) {
        totalBayar += 80000; // Tambahan biaya breakfast
    }

    // Tampilkan Total Bayar
    document.getElementById('total_bayar').value = totalBayar.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

    // Tampilkan Resume Pemesanan
    displayResume(nomorIdentitas, durasiMenginap, totalBayar);
}

// Fungsi untuk menampilkan resume pemesanan
function displayResume(nomorIdentitas, durasiMenginap, totalBayar) {
    const namaPemesan = document.getElementById('nama_pemesan').value;
    const tipeKamar = document.getElementById('tipe_kamar').value;
    
    let resumeHTML = `
      <h3>Resume Pemesanan</h3>
      <p>Nama Pemesan: ${namaPemesan}</p>
      <p>Nomor Identitas: ${nomorIdentitas}</p>
      <p>Tipe Kamar: ${tipeKamar}</p>
      <p>Durasi Menginap: ${durasiMenginap} Hari</p>
      <p>Total Bayar: ${totalBayar.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>`;
    
    document.getElementById('resume').innerHTML = resumeHTML;
    document.getElementById('resume').style.display = 'block';
}