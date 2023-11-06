const qrFormEl = document.getElementById('qrForm');
const qrImageEl = document.getElementById('qrImage');
const qrConrainerEl = document.getElementById('qrConrainer');
const qrInputTextEl = document.getElementById('qrInputText');

const renderQRCode = (url) => {
    if(!url) return;

    qrImageEl.src = url;
    qrConrainerEl.classList.add("show");
}


qrFormEl.addEventListener("submit",(event) => {
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrCodeURL = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    
    renderQRCode(qrCodeURL);
    console.log("text:-",text);
});


qrInputTextEl.addEventListener("keyup",() => {
    if(!qrInputTextEl.value.trim()) {
        qrConrainerEl.classList.remove("show");
    }
});

