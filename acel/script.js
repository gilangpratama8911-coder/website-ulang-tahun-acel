var loveInterval;

function cekSandi() {
    var password = document.getElementById("input-sandi").value;
    var pesan = document.getElementById("pesan-sandi");

    if (password === "03-10-2026") {
        buatConfetti();

        pesan.textContent = "Sandi benar ❤️";

        const musik = document.getElementById("bg-music");

musik.play().catch(error => {
    console.log("Audio belum bisa diputar:", error);
});

    if (!loveInterval) {
        buatLove();
        setInterval(buatLove, 500);
    }

        // Putar musik
        var audio = document.getElementById("bg-music");

        if (audio) {
            audio.play().catch(function(error) {
                console.log("Musik belum bisa diputar:", error);
            });
        }

        // Pindah ke halaman ulang tahun
        setTimeout(function() {
            bukaHalaman("ucapan-ulang-tahun");
        }, 700);

        mulaiBalon();

        mulaiKembangApi();

        mulaiKelopak();

      } else {

        pesan.textContent = "Sandi salah ❌ Coba lagi.";

    }
}


// Fungsi untuk berpindah halaman
function bukaHalaman(id) {

    var semuaHalaman =
        document.querySelectorAll("body > section");

    semuaHalaman.forEach(function(halaman) {
        halaman.classList.remove("aktif");
    });

    var halamanTujuan =
        document.getElementById(id);

    if (halamanTujuan) {
        halamanTujuan.classList.add("aktif");
    } else {
        console.log("Halaman tidak ditemukan:", id);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Tombol lanjut
function lanjutKeUcapan() {
    animasiHatiBesar();
    bukaHalaman("isi-ucapan");
    mulaiMengetik();
}

function lanjutKePesan() {
    bukaHalaman("pesan-kesan");
}

function lanjutKeFoto() {
    bukaHalaman("foto-memori");
    mulaiGaleri();
}

const semuaFoto = document.querySelectorAll(".galeri img");

let fotoAktif = 0;
let intervalFoto = null;

function mulaiGaleri() {

    // Hentikan slideshow lama
    if (intervalFoto) {
        clearInterval(intervalFoto);
    }

    // Reset semua foto
    semuaFoto.forEach(function(foto) {
        foto.classList.remove("tampil");
        foto.classList.remove("keluar");
    });

    fotoAktif = 0;

    // Tampilkan foto pertama
    semuaFoto[fotoAktif].classList.add("tampil");

    // Ganti foto setiap 3 detik
    intervalFoto = setInterval(function() {

        let fotoLama = semuaFoto[fotoAktif];

        fotoLama.classList.remove("tampil");
        fotoLama.classList.add("keluar");

        fotoAktif++;

        // Setelah foto terakhir kembali ke foto pertama
        if (fotoAktif >= semuaFoto.length) {
            fotoAktif = 0;
        }

        let fotoBaru = semuaFoto[fotoAktif];

        fotoBaru.classList.remove("keluar");

        setTimeout(function() {
            fotoBaru.classList.add("tampil");
        }, 300);

        setTimeout(function() {
            fotoLama.classList.remove("keluar");
        }, 1000);

    }, 3000);
}

function lanjutKeVideo() {
    bukaHalaman("video");
}

function lanjutKePenutup() {
    bukaHalaman("penutup");
}


// Saat website pertama dibuka
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll("body > section").forEach(function(section) {
        section.classList.remove("aktif");
    });

    var halamanSandi = document.getElementById("halaman-sandi");

    if (halamanSandi) {
        halamanSandi.classList.add("aktif");
    }
});

function buatLove() {
    var love = document.createElement("div");

    love.className = "love";

    var jenisLove = ["❤️", "💗", "💕", "💖", "💓"];

    love.textContent =
        jenisLove[Math.floor(Math.random() * jenisLove.length)];

    love.style.left = Math.random() * 100 + "%";

    love.style.fontSize =
        (20 + Math.random() * 25) + "px";

    love.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.getElementById("love-container").appendChild(love);

    setTimeout(function() {
        love.remove();
    }, 7000);
}
function ketikTeks(element, teks, kecepatan, selesai) {
    var i = 0;

    element.classList.add("kursor");

    function ketik() {
        if (i < teks.length) {
            element.textContent += teks.charAt(i);
            i++;
            setTimeout(ketik, kecepatan);
        } else {
            element.classList.remove("kursor");

            if (selesai) {
                selesai();
            }
        }
    }

    ketik();
}

const teksUcapan = `haii selamat ulang tahun yang ke 17 yaa,
kamu sekarang dah 17 bukan acel yang 16
tahun lagii soo jadi lah yang terbaik yaww. ❤️`;

let posisiKetik = 0;
let sedangMengetik = false;

function mulaiMengetik() {

    // Supaya animasi tidak berjalan dua kali bersamaan
    if (sedangMengetik) return;

    sedangMengetik = true;
    posisiKetik = 0;

    const tempatTeks = document.getElementById("teks-ketik");

    tempatTeks.innerHTML = "";

    function ketik() {

        if (posisiKetik < teksUcapan.length) {

            tempatTeks.innerHTML += teksUcapan.charAt(posisiKetik);

            posisiKetik++;

            setTimeout(ketik, 45);

        } else {

            sedangMengetik = false;

        }
    }

    ketik();
}

function buatConfetti() {

    const warna = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff85a1"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            warna[Math.floor(Math.random() * warna.length)];

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function animasiHatiBesar() {

    const jumlahLove = 35;

    for (let i = 0; i < jumlahLove; i++) {

        const love = document.createElement("div");

        love.classList.add("love-bentuk");
        love.innerHTML = "❤️";

        // Posisi awal acak
        const mulaiX =
            (Math.random() * 1000) - 500;

        const mulaiY =
            (Math.random() * 800) - 400;

        love.style.setProperty(
            "--mulai-x",
            mulaiX + "px"
        );

        love.style.setProperty(
            "--mulai-y",
            mulaiY + "px"
        );

        // Rumus bentuk hati
        const t =
            (Math.PI * 2 * i) / jumlahLove;

        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

        love.style.setProperty(
            "--akhir-x",
            (x * 8) + "px"
        );

        love.style.setProperty(
            "--akhir-y",
            (-y * 8) + "px"
        );

        document.body.appendChild(love);


        // Hapus love kecil
        setTimeout(() => {
            love.remove();
        }, 5000);
    }


    // LOVE BESAR MUNCUL
    setTimeout(() => {

        const hatiBesar =
            document.createElement("div");

        hatiBesar.classList.add("hati-besar");

        hatiBesar.innerHTML = "❤️";

        document.body.appendChild(hatiBesar);


        // Hilangkan lagi
        setTimeout(() => {

            hatiBesar.style.transition =
                "1s";

            hatiBesar.style.opacity = "0";

            hatiBesar.style.transform =
                "translate(-50%, -50%) scale(2)";

            setTimeout(() => {
                hatiBesar.remove();
            }, 1000);

        }, 2000);

    }, 2500);
}

function buatBintang() {

    const container =
        document.getElementById("star-container");

    if (!container) return;

    // Membuat 60 bintang
    for (let i = 0; i < 60; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        // Posisi acak
        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        // Ukuran bintang acak
        const ukuran =
            Math.random() * 5 + 2;

        star.style.width =
            ukuran + "px";

        star.style.height =
            ukuran + "px";


        // Kecepatan kelap-kelip berbeda
        star.style.animationDuration =
            (Math.random() * 2 + 1) + "s";


        // Waktu mulai berbeda
        star.style.animationDelay =
            (Math.random() * 2) + "s";


        container.appendChild(star);
    }
}


/* Jalankan bintang */
buatBintang();

let hadiahSudahDibuka = false;

function bukaHadiah() {

    // Supaya hanya dibuka sekali
    if (hadiahSudahDibuka) return;

    hadiahSudahDibuka = true;

    const hadiah =
        document.querySelector(".gift-box");

    const teks =
        document.getElementById("gift-text");


    // Buka kotak
    hadiah.classList.add("terbuka");


    // Ganti tulisan
    teks.innerHTML = "✨ Surprise! ✨";


    // Love keluar dari hadiah
    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const love =
                document.createElement("div");

            love.innerHTML = "❤️";

            love.style.position = "fixed";

            love.style.left =
                (45 + Math.random() * 10) + "%";

            love.style.top = "50%";

            love.style.fontSize =
                (20 + Math.random() * 25) + "px";

            love.style.zIndex = "9999";

            love.style.pointerEvents = "none";

            love.style.transition =
                "all 1.5s ease";

            document.body.appendChild(love);


            setTimeout(() => {

                love.style.top =
                    (10 + Math.random() * 40) + "%";

                love.style.left =
                    (20 + Math.random() * 60) + "%";

                love.style.opacity = "0";

                love.style.transform =
                    "scale(1.5) rotate(360deg)";

            }, 50);


            setTimeout(() => {
                love.remove();
            }, 1700);

        }, i * 100);
    }
}

function buatBalon() {

    const warnaBalon = [
        "#ff4d6d",
        "#ff85a1",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#9b5de5"
    ];

    const balon = document.createElement("div");

    balon.classList.add("balon");


    // Warna acak
    const warna =
        warnaBalon[
            Math.floor(Math.random() * warnaBalon.length)
        ];

    balon.style.background = warna;
    balon.style.color = warna;


    // Posisi acak
    balon.style.left =
        Math.random() * 90 + "vw";


    // Ukuran acak
    const ukuran =
        Math.random() * 25 + 40;

    balon.style.width =
        ukuran + "px";

    balon.style.height =
        ukuran * 1.25 + "px";


    // Kecepatan acak
    const durasi =
        Math.random() * 4 + 6;

    balon.style.animationDuration =
        durasi + "s";


    document.body.appendChild(balon);


    // Hapus setelah selesai
    setTimeout(() => {
        balon.remove();
    }, durasi * 1000);
}

function mulaiBalon() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            buatBalon();
        }, i * 300);

    }
}

let amplopSudahDibuka = false;

function bukaAmplop() {

    if (amplopSudahDibuka) return;

    amplopSudahDibuka = true;

    const amplop =
        document.querySelector(".amplop");

    const petunjuk =
        document.getElementById("petunjuk-amplop");

    if (!amplop) return;


    /* BUKA AMPLOP */

    amplop.classList.add("terbuka");


    /* UBAH TULISAN */

    if (petunjuk) {

        petunjuk.innerHTML =
            "Surat kecil untukmu ❤️";

    }


    /* LOVE KECIL KELUAR */

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const love =
                document.createElement("div");

            love.innerHTML = "❤️";

            love.style.position = "fixed";

            love.style.left =
                (45 + Math.random() * 10) + "%";

            love.style.top = "45%";

            love.style.fontSize =
                (15 + Math.random() * 20) + "px";

            love.style.zIndex = "9999";

            love.style.pointerEvents = "none";

            love.style.transition =
                "all 1.5s ease";

            document.body.appendChild(love);


            setTimeout(() => {

                love.style.top =
                    (15 + Math.random() * 30) + "%";

                love.style.left =
                    (25 + Math.random() * 50) + "%";

                love.style.opacity = "0";

                love.style.transform =
                    "rotate(360deg) scale(1.5)";

            }, 50);


            setTimeout(() => {

                love.remove();

            }, 1700);


        }, i * 100);
    }
}

function ledakanKembangApi(x, y) {

    const warna = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#9b5de5",
        "#ffffff"
    ];

    const jumlahPartikel = 35;


    for (let i = 0; i < jumlahPartikel; i++) {

        const partikel =
            document.createElement("div");

        partikel.classList.add(
            "firework-particle"
        );


        /* POSISI LEDAKAN */

        partikel.style.left = x + "px";
        partikel.style.top = y + "px";


        /* WARNA ACAK */

        const warnaAcak =
            warna[
                Math.floor(
                    Math.random() * warna.length
                )
            ];

        partikel.style.background =
            warnaAcak;

        partikel.style.color =
            warnaAcak;


        /* ARAH LEDAKAN */

        const sudut =
            (Math.PI * 2 * i) /
            jumlahPartikel;

        const jarak =
            80 + Math.random() * 130;

        const arahX =
            Math.cos(sudut) * jarak;

        const arahY =
            Math.sin(sudut) * jarak;


        partikel.style.setProperty(
            "--firework-x",
            arahX + "px"
        );

        partikel.style.setProperty(
            "--firework-y",
            arahY + "px"
        );


        document.body.appendChild(
            partikel
        );


        /* HAPUS SETELAH SELESAI */

        setTimeout(function() {

            partikel.remove();

        }, 1500);
    }
}

function mulaiKembangApi() {

    let jumlahLedakan = 0;

    const timerKembangApi =
        setInterval(function() {

            const x =
                window.innerWidth *
                (0.15 + Math.random() * 0.7);

            const y =
                window.innerHeight *
                (0.15 + Math.random() * 0.45);


            ledakanKembangApi(x, y);

            jumlahLedakan++;


            /* Berhenti setelah 8 ledakan */

            if (jumlahLedakan >= 8) {

                clearInterval(
                    timerKembangApi
                );

            }

        }, 600);
}

function buatKelopak() {

    const kelopak =
        document.createElement("div");

    kelopak.classList.add("kelopak");

    // Bentuk kelopak
    const bentuk = [
        "🌸",
        "🌹",
        "🌺",
        "💮"
    ];

    kelopak.innerHTML =
        bentuk[
            Math.floor(
                Math.random() * bentuk.length
            )
        ];


    // Posisi acak
    kelopak.style.left =
        Math.random() * 100 + "vw";


    // Ukuran acak
    kelopak.style.fontSize =
        (15 + Math.random() * 20) + "px";


    // Kecepatan jatuh
    const durasi =
        6 + Math.random() * 5;

    kelopak.style.animationDuration =
        durasi + "s";


    document.body.appendChild(kelopak);


    // Hapus setelah jatuh
    setTimeout(function() {

        kelopak.remove();

    }, durasi * 1000);
}

let intervalKelopak = null;

function mulaiKelopak() {

    if (intervalKelopak) {
        clearInterval(intervalKelopak);
    }

    intervalKelopak = setInterval(function() {
        buatKelopak();
    }, 500);

    // Kelopak berhenti setelah 15 detik
    setTimeout(function() {

        clearInterval(intervalKelopak);
        intervalKelopak = null;

    }, 15000);
}

let lilinSudahPadam = false;

function tiupLilin() {

    // Supaya hanya bisa ditiup sekali
    if (lilinSudahPadam) return;

    lilinSudahPadam = true;


    const api =
        document.querySelector(".flame");

    const lilin =
        document.querySelector(".candle");

    const tombol =
        document.getElementById("tombol-tiup");


    if (!api || !lilin) return;


    // PADAMKAN API

    api.classList.add("padam");


    // MUNCULKAN ASAP

    const asap =
        document.createElement("div");

    asap.classList.add("asap-lilin");

    asap.innerHTML = "💨";

    lilin.appendChild(asap);


    // UBAH TOMBOL

    if (tombol) {

        tombol.innerHTML =
            "🕯️ Lilin sudah ditiup ❤️";

        tombol.classList.add("selesai");
    }


    // CONFETTI

    setTimeout(function() {

        if (typeof buatConfetti === "function") {

            buatConfetti();

        }

    }, 500);


    // HAPUS ASAP

    setTimeout(function() {

        asap.remove();

    }, 2000);
}

/* =========================
   MAGIC SPARKLE
   LAPTOP + HP
========================= */

function buatSparkle(x, y) {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle-mouse";

    const bentuk = [
        "✨",
        "⭐",
        "💫",
        "✦",
        "💖"
    ];

    sparkle.innerHTML =
        bentuk[Math.floor(Math.random() * bentuk.length)];

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    sparkle.style.fontSize =
        (12 + Math.random() * 15) + "px";

    sparkle.style.setProperty(
        "--x",
        (Math.random() * 50 - 25) + "px"
    );

    sparkle.style.setProperty(
        "--y",
        (Math.random() * 50 - 25) + "px"
    );

    document.body.appendChild(sparkle);

    setTimeout(function() {
        sparkle.remove();
    }, 1000);
}


/* =========================
   LAPTOP / PC
========================= */

document.addEventListener("mousemove", function(e) {

    buatSparkle(
        e.clientX,
        e.clientY
    );

});


/* =========================
   HP / TOUCHSCREEN
========================= */

document.addEventListener(
    "touchmove",
    function(e) {

        if (e.touches.length > 0) {

            const sentuhan = e.touches[0];

            buatSparkle(
                sentuhan.clientX,
                sentuhan.clientY
            );

        }

    },
    { passive: true }
);


/* Sparkle juga muncul saat layar disentuh */

document.addEventListener(
    "touchstart",
    function(e) {

        if (e.touches.length > 0) {

            const sentuhan = e.touches[0];

            for (let i = 0; i < 5; i++) {

                buatSparkle(
                    sentuhan.clientX,
                    sentuhan.clientY
                );

            }

        }

    },
    { passive: true }
);

/* =========================
   ANIMASI 21 - LOVE SAAT KLIK
========================= */

function buatLoveKlik(x, y) {

    const love = document.createElement("div");

    love.classList.add("love-klik");

    const bentukLove = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓"
    ];

    love.innerHTML =
        bentukLove[
            Math.floor(
                Math.random() * bentukLove.length
            )
        ];

    love.style.left = x + "px";
    love.style.top = y + "px";

    love.style.fontSize =
        (18 + Math.random() * 20) + "px";

    document.body.appendChild(love);


    setTimeout(function() {

        love.remove();

    }, 1300);
}


/* LAPTOP / PC */

document.addEventListener("click", function(e) {

    buatLoveKlik(
        e.clientX,
        e.clientY
    );

});

