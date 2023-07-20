var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prodotto = /** @class */ (function () {
    function Prodotto(id, codProdott, quantita, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codProdott = codProdott;
        this.quantita = quantita;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Prodotto.prototype.getSaldo = function () {
        return this.saldo;
    };
    Prodotto.prototype.getAcquisto = function () {
        return this.prezzoivainclusa;
    };
    return Prodotto;
}());
var Vestito = /** @class */ (function (_super) {
    __extends(Vestito, _super);
    function Vestito(id, codProdott, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        var _this = 
        //Richiamo il super
        _super.call(this, id, codProdott, quantita, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) || this;
        _this.collezione = collezione;
        _this.capo = capo;
        _this.modello = modello;
        _this.colore = colore;
        return _this;
    }
    return Vestito;
}(Prodotto));
var capiList = [];
fetch("./json/Abbigliamento.json")
    .then(function (response) {
    if (response.ok)
        return response.json();
})
    .then(function (capi) {
    capi.forEach(function (capo) {
        capiList.push(new Vestito(capo.id, capo.codprodott, capo.collezione, capo.colore, capo.disponibile, capo.id, capo.modello, capo.prezzoivainclusa, capo.prezzoivaesclusa, capo.quantita, capo.saldo));
    });
    console.log(capiList[0].getSaldo());
});
