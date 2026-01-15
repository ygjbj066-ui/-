<h2>محاكي السيارة</h2>

<div>
  RPM: <span id="rpm">800</span>
</div>

<div>
  MAF: <span id="maf">2.5</span> V
</div>

<hr>

<button onclick="setState('good')">MAF سليم</button>
<button onclick="setState('dirty')">MAF متسخ</button>
<button onclick="setState('disconnect')">MAF مفصول</button>

<p id="msg"></p>let rpm = 800;
let maf = 2.5;

function update() {
  document.getElementById("rpm").innerText = rpm;
  document.getElementById("maf").innerText = maf;
}

function setState(state) {
  if (state === "good") {
    rpm = 800;
    maf = 2.5;
    document.getElementById("msg").innerText = "الحساس يعمل بشكل طبيعي";
  }

  if (state === "dirty") {
    rpm = 650;
    maf = 1.2;
    document.getElementById("msg").innerText = "قراءة ضعيفة – قد يظهر كود P0101";
  }

  if (state === "disconnect") {
    rpm = 1200;
    maf = 0;
    document.getElementById("msg").innerText = "الحساس مفصول – المحرك غير مستقر";
  }

  update();
}

update();
