
//Menghitung Biaya Parkir
function HitungBiayaParkir() {
    let JamMasuk = document.getElementById('jam_masuk').value;
    let Jamkeluar = document.getElementById('jam_keluar').value;
    let lamaparkir = Jamkeluar - JamMasuk
    console.log(lamaparkir)
    document.getElementById('lamaparkir').innerHTML = lamaparkir

    //console.log(lamaparkir)
    let biayaparkir = 3000
    lamaparkir -= 2

    //Hitung sisa jam
    if(lamaparkir > 0){
        biayaparkir = biayaparkir + (lamaparkir * 1000)
    }   

    console.log(lamaparkir)

    console.log(biayaparkir)
    //tampilkan hasil
    document.getElementById('biaya_parkir').innerHTML = biayaparkir
}