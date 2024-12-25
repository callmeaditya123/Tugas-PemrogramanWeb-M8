// Data body data kamar 
let dataKamar = [ 
    { 
      idKamar: 1, 
      gambarRuangan: "suite.jpg", 
      jenisKamar: "suite", 
      harga: 400000, 
      fasilitas: "tv, ac, shower, bathub", 
    }, 
  ]; 
   
  // Data body data fasilitas 
  let dataFasilitas = [ 
    { 
      idFasilitas: 1, 
      nama: "1A", 
      fasilitas: "TV, AC, KULKAS, ROOM KARAOKE, KOLAM RENANG, PLAY STATION, BILIARD", 
      hargaWeekend: 600.0, 
      hargaWeekday: 400.0, 
      kuota: 4, 
      jamBuka: "07:00", 
      jamTutup: "22:00", 
    }, 
    { 
      idFasilitas: 2, 
      nama: "1B", 
      fasilitas: "TV, AC, KULKAS, ROOM KARAOKE, PLAY STATION", 
      hargaWeekend: 800.0, 
      hargaWeekday: 600.0, 
      kuota: 3, 
      jamBuka: "07:00", 
      jamTutup: "22:00", 
    }, 
    { 
      idFasilitas: 3, 
      nama: "1C", 
      fasilitas: "TV, AC, KULKAS, ROOM KARAOKE", 
      hargaWeekend: 1000.0, 
      hargaWeekday: 800.0, 
      kuota: 2, 
      jamBuka: "07:00", 
      jamTutup: "22:00", 
    }, 
  ]; 
   
  // Data select fasilitas 
  let typeFasilitas = [ 
    { 
      id: 1, 
      type: "fasilitas", 
      data: "hello world" 
    }, 
    { 
      id: 2, 
      type: "1A", 
      data: "TV, AC, KULKAS, ROOM KARAOKE, KOLAM RENANG", 
    }, 
    { 
      id: 3, 
      type: "1B", 
      data: "AC, TV, KULKAS, ROOM KARAOKE, SHOW, ALAM", 
    }, 
    { 
      id: 4, 
      type: "1C", 
      data: "TV, AC, KULKAS, ROOM KARAOKE", 
    }, 
  ]; 
   
  // form add data kamar 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
   
    const kamarId = document.getElementById("id-data-kamar").value; 
    const kamarRuangan = document.getElementById("gambar-ruangan").value; 
    const kamarJenis = document.getElementById("jenis-kamar").value; 
    const kamarFasilitas = document.getElementById("fasilitas").value; 
    const kamarHarga = document.getElementById("harga-kamar").value; 
   
    let ruanganKamar; 
   
    let fasilitas; 
   
    fasilitas = typeFasilitas.find((fas) => { 
      console.log(fas.type) 
      console.log(kamarFasilitas) 
      console.log(fas.type.trim() === kamarFasilitas.trim()) 
      return fas.type.trim() === kamarFasilitas.trim(); 
    }); 
   
    if(!fasilitas) { 
      fasilitas = "fasilitas tidak di temukan" 
    } 
   
    if (kamarRuangan === "premium") { 
      ruanganKamar = "single.jpg"; 
    } else if (kamarRuangan === "double.jpg") { 
      ruanganKamar = ".jpg"; 
    } else { 
      ruanganKamar = "suite.jpg"; 
    } 
   
    dataKamar = [ 
      ...dataKamar, 
      { 
        idKamar: kamarId, 
        gambarRuangan: ruanganKamar, 
        jenisKamar: kamarJenis, 
        harga: kamarHarga, 
        fasilitas: fasilitas.data, 
      }, 
    ]; 
   
    renderDataKamar(); 
  }; 
   
  // Features select fasilitas  
  const selectFasilitas = document.getElementById("fasilitas"); 
  const renderSelectFasilitas = () => { 
    const render = typeFasilitas.map( 
      (typeFasl) => 
        ` 
        <option value=${typeFasl.type}>${typeFasl.type}</option> 
      ` 
    ); 
   
    selectFasilitas.innerHTML = render.join(""); 
  }; 
  renderSelectFasilitas(); 
   
  // Features Set Html On Js 
  const bodyDataKamar = document.getElementById("body-data-kamar"); 
  const renderDataKamar = () => { 
    const render = dataKamar.map( 
      (kamar) => 
        `<tr> 
  <td rowspan="2">${kamar.idKamar}</td> 
  <td rowspan="2" class="item-image"> 
    <img src="${kamar.gambarRuangan}" alt="${kamar.jenisKamar}" /> 
  </td> 
  <td rowspan="2">${kamar.jenisKamar}</td> 
  <td rowspan="2">${kamar.harga}</td> 
  </tr> 
  <tr> 
  <td>${kamar.fasilitas}</td> 
  </tr> ` 
    ); 
    console.log({ dataKamar }); 
    bodyDataKamar.innerHTML = render.join(""); 
  }; 
  renderDataKamar(); 
   
  // Feature add data fasilitas 
  const handleSubmitFasilitas = (e) => { 
    e.preventDefault(); 
    const fasilitasId = document.getElementById("id-fasilitas").value; 
    const fasilitasName = document.getElementById("name-fasilitas").value; 
    const fasilitasKuota = document.getElementById("kuota-fasilitas").value; 
    const fasilitasHargaWeekend = document.getElementById( 
      "harga-weekend-fasilitas" 
    ).value; 
    const fasilitasHargaWeekday = document.getElementById( 
      "harga-weekday-fasilitas" 
    ).value; 
    const fasilitasJamBuka = document.getElementById("jam-buka-fasilitas").value; 
    const fasilitasJamTutup = document.getElementById( 
      "jam-tutup-fasilitas" 
    ).value; 
   
    const fasilitasIsi = document.getElementById("isi-fasilitas").value; 
   
    const name = fasilitasName.toUpperCase(); 
    dataFasilitas = [ 
      ...dataFasilitas, 
      { 
        idFasilitas: fasilitasId, 
        nama: name, 
        fasilitas: fasilitasIsi, 
        hargaWeekend: fasilitasHargaWeekend, 
        hargaWeekday: fasilitasHargaWeekday, 
        kuota: fasilitasKuota, 
        jamBuka: fasilitasJamBuka, 
        jamTutup: fasilitasJamTutup, 
      }, 
    ]; 
   
    typeFasilitas = [ 
      ...typeFasilitas, 
      { 
        id: fasilitasId, 
        type: name, 
        data: fasilitasIsi, 
      }, 
    ]; 
   
    console.log({dataFasilitas}) 
    renderSelectFasilitas() 
    renderDataFasilitas(); 
  }; 
   
  // Features Set html on js 
  const bodyFasilitas = document.getElementById("body-fasilitas"); 
  const renderDataFasilitas = () => { 
    const render = dataFasilitas.map( 
      (fasl) => 
  ` 
  <tr> 
  <td>${fasl.idFasilitas}</td> 
  <td>${fasl.nama}</td> 
  <td>${fasl.fasilitas}</td> 
  <td>${fasl.hargaWeekend}</td> 
  <td>${fasl.hargaWeekday}</td> 
  <td>${fasl.kuota}</td> 
  <td>${fasl.jamBuka}</td> 
  <td>${fasl.jamTutup}</td> 
  </tr> 
  ` 
  ); 
  bodyFasilitas.innerHTML = render.join(''); 
  }; 
  renderDataFasilitas();