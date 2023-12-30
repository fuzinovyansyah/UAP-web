// Data pengguna yang valid (contoh sederhana)
const validUsers = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Tambahkan pengguna lain di sini jika diperlukan
];

// Fungsi untuk memeriksa kredensial
function authenticateUser(username, password) {
    return validUsers.some(user => user.username === username && user.password === password);
}

// Tangkap form login
const loginForm = document.getElementById('loginForm');

// Tambahkan event listener untuk saat form disubmit
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Hindari pengiriman form

    // Dapatkan nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lakukan verifikasi kredensial
    if (authenticateUser(username, password)) {
        alert('Login berhasil!');
        // Tambahkan logika untuk redirect ke halaman setelah login berhasil
    } else {
        alert('Login gagal. Username atau password salah.');
    }
});
