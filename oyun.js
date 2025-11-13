const oyunAlani = document.getElementById('oyun-alani');

// --- Sahne Tanımları ---

// Sahne 1: Başlangıç
function sahne1() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😐</span>
        <h2>Ay Işığı Koyu</h2>
        <p>Berfin gözlerini açtığında kendini Ay Işığı Koyu'nda buldu. Karşısında Kuzey Balat duruyordu. Kuzey endişeli görünüyordu. Berfin ne yapmalıydı?</p>
        <button class="secenek-btn" onclick="sahneDogru()">A) Hemen yanına koş.</button>
        <button class="secenek-btn" onclick="sahneYanlis()">B) Saklan ve ne yapacağını izle.</button>
    `;
}

// Sahne 2: Yanlış Yol (Ağlama)
function sahneYanlis() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😢</span>
        <h2>Yanlış Yol...</h2>
        <p>Berfin saklanmayı seçti. Kuzey etrafa bakınır, kimseyi göremeyince omuzları düşer. Gözleri yaşlarla doldu. 'Yine mi yalnız kaldım...' diye fısıldadı.</p>
        <p><strong>💔 Rüyadan sarsılarak uyandın.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Başa Dön</button>
    `;
}

// Sahne 3: Doğru Yol ve Teklif
function sahneDogru() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">🥰</span>
        <h2>Doğru Yol!</h2>
        <p>Berfin koşarak Kuzey'e sarıldı. Kuzey'in yüzü aydınlandı. Gülümsedi ve elini Berfin'in yanağına koydu.</p>
        <p>"Berfin'im... Bu anı bekliyordum." Derin bir nefes aldı ve cebinden bir kutu çıkardı. Diz çöktü.</p>
        <p><strong>💍 "Berfin Balat, benimle evlenir misin?"</strong></p>
        <button class="secenek-btn" onclick="sahneFinalEvet()">EVET</button>
        <button class="secenek-btn" onclick="sahneFinalHayir()">HAYIR</button>
    `;
}

// Sahne 4: Final - EVET
function sahneFinalEvet() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">🥳</span>
        <h2>MUTLU SON!</h2>
        <p>Berfin heyecanla "EVET!" diye bağırdı. Kuzey'in sevinçten gözleri doldu. Yüzüğü parmağına taktı ve Berfin'i kucakladı.</p>
        <p><strong>👰‍♀️ Hayatının en güzel rüyası gerçek oldu.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Yeniden Oyna</button>
    `;
}

// Sahne 5: Final - HAYIR
function sahneFinalHayir() {
    oyunAlani.innerHTML = `
        <span id="karakter-emoji">😭</span>
        <h2>KÖTÜ SON...</h2>
        <p>Berfin sessizce başını iki yana salladı. Kuzey'in yüzündeki tüm ışık söndü. Yüzük kutusunu kapattı ve kalktı. Gözlerinden yaşlar süzülüyordu.</p>
        <p><strong>🌑 Rüya, bir kabusa dönüştü.</strong></p>
        <button class="secenek-btn" onclick="sahne1()">Yeniden Oyna</button>
    `;
}

// Oyunu Başlat
sahne1();
