let torches = [];
const types = [
    'Sorc Torch',
    'Paladin Torch',
    'Necro Torch',
    'Druid Torch',
    'Amazon Torch',
    'Assassin Torch',
    'Barbar Torch'
];

function generateTorch() {
    let attribute = 10 + random(10);
    let resistance = 10 + random(10);
    torches.push({
        type: types[random(types.length)],
        attribute: attribute,
        resistance: resistance,
    });
}

function generate() {
    var torchCount = document.getElementById("torch-count").value || 1;
    console.log(torchCount);
    for (let i = 1; i <= torchCount; i++) {
        generateTorch();
    }
    render();
}

function clearAll() {
    torches = [];
    render();
}

function random(value) {
    return Math.floor(Math.random() * value);
}

function render() {
    var ul = document.getElementById("torches");
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
    torches.forEach(torch => {
        var li = document.createElement("li");
        li.appendChild(
            renderSingleTorch(torch)
        );
        ul.appendChild(li);
    });
}

function renderSingleTorch(torch) {
    var div = document.createElement("div");
    div.className += " torches";
    var div1 = document.createElement("div");
    div1.className += " torch";
    var span1 = document.createElement("span");
    span1.appendChild(
        document.createTextNode(
            torch.type
        )
    );
    div1.appendChild(span1)

    var div2 = document.createElement("div");
    div2.className += " torch";
    var span2 = document.createElement("span");
    span2.appendChild(
        document.createTextNode(
          torch.attribute
        )
    );
    div2.appendChild(span2)

    var div3 = document.createElement("div");
    div3.className += " torch";
    var span3 = document.createElement("span");
    span3.appendChild(
        document.createTextNode(
            torch.resistance
        )
    );
    div3.appendChild(span3)

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    return div;
}
