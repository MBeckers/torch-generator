let torches = [];
let earnings = 0;
let winnings = 0;
const torchCost = 300;

const adder = (previousValue, currentValue) => previousValue + value(currentValue);

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

function value(torch) {
    switch (torch.type) {
        case "Sorc Torch":
            return storch(torch);
        case "Paladin Torch":
            return ptorch(torch);
        case "Amazon Torch":
            return ztorch(torch);
        case "Necro Torch":
            return ntorch(torch);
        case "Assassin Torch":
            return atorch(torch);
        case "Druid Torch":
            return dtorch(torch);
        case "Barbar Torch":
            return btorch(torch);
        default:
            return 100;
    }
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

    win = document.getElementById("value");
    win.innerText = winnings;
}



function renderSingleTorch(torch) {
    var div = document.createElement("div");
    div.className += "torches";
    var div1 = document.createElement("div");
    div1.className += "torch-name";
    var span1 = document.createElement("span");
    span1.appendChild(
        document.createTextNode(
            torch.type
        )
    );
    div1.appendChild(span1)

    var div2 = document.createElement("div");
    div2.className += "torch";
    var span2 = document.createElement("span");
    span2.appendChild(
        document.createTextNode(
          torch.attribute
        )
    );
    div2.appendChild(span2)

    var div3 = document.createElement("div");
    div3.className += "torch";
    var span3 = document.createElement("span");
    span3.appendChild(
        document.createTextNode(
            torch.resistance
        )
    );
    div3.appendChild(span3)

    var div4 = document.createElement("div");
    div4.className += "torch";
    var span3 = document.createElement("span");
    span3.appendChild(
        document.createTextNode(
            value(torch)
        )
    );
    div4.appendChild(span3);

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);

    return div;
}

function generate() {
    clearAll()
    var torchCount = document.getElementById("torch-count").value || 1;
    for (let i = 1; i <= torchCount; i++) {
        generateTorch();
    }

    let cost = torchCount * torchCost;
    earnings = torches.reduce(adder,0);
    winnings = earnings - cost;

    render();
}
