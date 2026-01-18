let engine = {
  rpm: 800,
  temp: 90,
  maf: 2.5,
  tps: 0.6,
  ect: 3.2
};

let current = "maf";

function selectSensor(name) {
  current = name;
  document.getElementById("current").innerText = name.toUpperCase();
}

function measure() {
  document.getElementById("meter").innerText = engine[current];
}

function update() {
  document.getElementById("rpm").innerText = engine.rpm;
  document.getElementById("temp").innerText = engine.temp;
}

update();
