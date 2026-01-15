function updateStatus(status) {
    const rpm = document.getElementById('rpm');
    const maf = document.getElementById('maf');
    const msg = document.getElementById('msg');

    if (status === 'good') {
        rpm.innerText = "800";
        maf.innerText = "2.5";
        msg.innerText = "النظام يعمل بشكل سليم ✅";
        msg.style.color = "#4ade80";
    } else if (status === 'dirty') {
        rpm.innerText = "720";
        maf.innerText = "1.8";
        msg.innerText = "تنبيه: الحساس متسخ ⚠️";
        msg.style.color = "#fbbf24";
    } else if (status === 'disconnect') {
        rpm.innerText = "1100";
        maf.innerText = "0.0";
        msg.innerText = "خطأ: الحساس مفصول 🚨";
        msg.style.color = "#f87171";
    }
}
