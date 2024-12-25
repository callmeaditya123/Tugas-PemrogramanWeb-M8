let dataPesanan = { 
    idPemesanan: null, 
    namaPemesan: "", 
    nomorIdentitas: 0, 
    jenisKelamin: "", 
    tipeKamar: "", 
    durasiPenginapan: 0, 
    diskon: 0, 
    hargaAwal: 0, 
    totalBayar: 0, 
    hargaKamar: 0, 
    tanggalPesan: "", 
    breakfast: false, 
  }; 
   
  const dataKamar = [ 
    { 
      tipeKamar: "standar", 
      harga: 250000, 
    }, 
    { 
      tipeKamar: "deluxe", 
      harga: 300000, 
    }, 
    { 
      tipeKamar: "family", 
      harga: 350000, 
    }, 
  ]; 

  const hargaBreakfast = 80000; 
  document.getElementById("nomorIdentitasMessage").style.display = "none"; 
   
  const fungsiDiskon = (harga, durasiPenginapan) => { 
    if (durasiPenginapan > 3) { 
      return (harga * 10) / 100; 
    } else { 
      return 0; 
    } 
  }; 
   
  const fungsiTotalBayar = (harga, diskon, breakfast) => { 
    switch (breakfast) { 
      case true: 
        return harga + hargaBreakfast - diskon; 
      case false: 
        return harga - diskon; 
      default: 
        return harga; 
    } 
  }; 
   

  const handleTipeKamar = (e) => { 
    const tipeKamar = e.target.value; 
    const kamarPilihan = dataKamar.find((fil) => { 
      return fil.tipeKamar === tipeKamar; 
    }); 
   
    dataPesanan = { 
      ...dataPesanan, 
      tipeKamar, 
      hargaAwal: kamarPilihan.harga, 
      totalBayar: kamarPilihan.harga, 
      hargaKamar: kamarPilihan.harga, 
    }; 
   
    document.getElementById("harga").value = kamarPilihan.harga; 
    setTotalBayar(); 
  }; 
   
  const handleDurasiMenginap = (e) => { 
    const durasiMenginap = Number(e.target.value); 
    const diskonPesanan = fungsiDiskon(dataPesanan.hargaKamar, durasiMenginap); 
    const totalBayar = fungsiTotalBayar( 
      dataPesanan.hargaKamar, 
      diskonPesanan, 
      dataPesanan.breakfast 
    ); 
   
    dataPesanan = { 
      ...dataPesanan, 
      durasiPenginapan: durasiMenginap, 
      totalBayar: totalBayar, 
      diskon: diskonPesanan, 
    }; 
   
    setTotalBayar(); 
  }; 
   
  const handleBreakfast = (e) => { 
    const breakfast = e.target.checked; 
   
    if (breakfast) { 
      dataPesanan = { 
        ...dataPesanan, 
        breakfast, 
        hargaAwal: dataPesanan.hargaAwal + hargaBreakfast, 
        totalBayar: dataPesanan.totalBayar + hargaBreakfast, 
      }; 
    } else { 
      dataPesanan = { 
        ...dataPesanan, 
        breakfast, 
      }; 
    } 
   
    setTotalBayar(); 
  }; 
   
  const handleNomorIdentitas = (e) => { 
    const nomorIdentitas = e.target.value; 
    const nomorIdentitasMessage = document.getElementById( 
      "nomorIdentitasMessage" 
    ); 
   
    if (nomorIdentitas.length <= 16) { 
      nomorIdentitasMessage.style.display = "table-row"; 
    } else { 
      nomorIdentitasMessage.style.display = "none"; 
    } 
   
    dataPesanan = { 
      ...dataPesanan, 
      nomorIdentitas, 
    }; 
   
    setTotalBayar(); 
  }; 
   
  const handleSubmit = (e) => { 
    e.preventDefault(); 
   
    const idPemesanan = document.getElementById("idPemesanan").value; 
    const namaPemesan = document.getElementById("namaPemesan").value; 
    const jenisKelamin = document.getElementById("jk").value; 
    const tanggalPesan = document.getElementById("tanggalPesan").value; 
   
    const resumePemesanan = document.querySelector(".resumePemesanan"); 
   
    dataPesanan = { 
      ...dataPesanan, 
      idPemesanan, 
      namaPemesan: namaPemesan, 
      jenisKelamin: jenisKelamin, 
      tanggalPesan, 
    }; 
   
    let notaPemesananHotel = `<pre> 
    Nama Pemesan      = ${dataPesanan.namaPemesan} 
    Nomor Identitas   = ${dataPesanan.nomorIdentitas} 
    Jenis Kelamin     = ${dataPesanan.jenisKelamin} 
    Tipe Kamar        = ${dataPesanan.tipeKamar} 
    Durasi Penginapan = ${dataPesanan.durasiPenginapan} 
    <---------------------------------------------------> 
    Jumlah bayar      = ${dataPesanan.hargaAwal} 
    Diskon            = ${dataPesanan.diskon} 
    <===================================================>
    Total Bayar       = ${dataPesanan.totalBayar} 
    </pre>`; 
   
    resumePemesanan.innerHTML = `<h1 style="padding-left: 12px;">Nota pemesanan 
  Hotel</h1>${notaPemesananHotel}`; 
   
    setTotalBayar(); 
  }; 
   
  const setTotalBayar = () => { 
    return (document.getElementById("totalBayar").value = dataPesanan.totalBayar); 
  }; 