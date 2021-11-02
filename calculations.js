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
            document.createTextNode(
                torch.type + ' ' + torch.attribute + ' ' + torch.resistance
            )
        );
        ul.appendChild(li);
    });
}
