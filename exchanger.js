class currencyExchanger{
    constructor(container, rates) {
        this.currencyNames = Object.keys(rates);
        this.currencyRates = Object.values(rates);
        this.fromRate = 3.67281;
        this.toRate = 3.67281;
        this.fromInput = document.createElement("input");
        this.toInput = document.createElement("input");
        this.fromInput.type = "number";
        this.toInput.type = "number";
        this.fromInput.addEventListener("input", () => {
            this.calculate();
        })
        this.toInput.addEventListener("input", () => {
            this.recalculate();
        })

        this.inputContainer = document.createElement("div");
        this.inputContainer.classList.add("input_container");

        this.listContainer = document.createElement("div");
        this.listContainer.classList.add("list_container");

        container.appendChild(this.inputContainer);
        this.inputContainer.appendChild(this.fromInput);
        this.inputContainer.appendChild(this.toInput);
        container.appendChild(this.listContainer);
        this.createFromList(this.listContainer, this.currencyNames, this.currencyRates);
        this.createToList(this.listContainer, this.currencyNames, this.currencyRates);
    }

    calculate() {
        this.toInput.value = (this.fromInput.value * this.toRate) / this.fromRate;
    }

    recalculate() {
        this.fromInput.value = (this.toInput.value * this.fromRate) / this.toRate;
    }

    createFromList(container, currencyName, currencyRate) {
        let list = this.createList(container, currencyName, currencyRate);
        list.onchange = () => {
            this.fromRate = list.value;
            this.recalculate();
        }
    }

    createToList(container, currencyName, currencyRate) {
        let list = this.createList(container, currencyName, currencyRate);
        list.onchange = () => {
            this.toRate = list.value;
            this.calculate();
        }
    }

    createList(container, currencyName, currencyRate) {
        const list = document.createElement('select');
        for (let i = 0; i < currencyName.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = currencyName[i];
            option.value = currencyRate[i];
            list.appendChild(option);
        }
        container.appendChild(list);
        return list;
    }
}