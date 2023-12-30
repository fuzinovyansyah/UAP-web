let dataBarang = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 }
];

function data(kodeBarang) {
    let barang = dataBarang.find(item => item.kode === kodeBarang);
    return barang ? barang.harga : 0;
}

function kirim() {
    let input_kode = document.getElementById("input_kode").value;
    let input_jumlah = document.getElementById("input_jumlah").value;

    let harga_barang = data(input_kode);
    let total_harga = parseInt(input_jumlah) * harga_barang;

    alert("Total Belanja: " + total_harga);

    let uang = prompt("Masukkan uang :");

    if (uang === null || uang === '') {
        alert("Input uang tidak valid atau dibatalkan.");
        return;
    }

    uang = parseInt(uang);

    if (isNaN(uang)) {
        alert("Input uang tidak valid.");
        return;
    }

    let kembalian = uang - total_harga;

    if (kembalian >= 0) {
        alert(
            "Total Belanja: " + total_harga +
            "\nUang yang Diberikan: " + uang +
            "\nKembalian: " + kembalian
        );
    } else {
        alert("Uang yang diberikan kurang.");
    }
}

// function data(code) {
//     switch (code) {
//         case "001":
//             return 100;
//         case "002":
//             return 150;
//         case "003":
//             return 1500;
//         default:
//             return 0;
//     }
// }