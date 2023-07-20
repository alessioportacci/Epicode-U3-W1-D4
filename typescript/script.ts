abstract class Prodotto
{
    //Campi della classe 
    id:number
    codProdott:number
    quantita:number
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(
                id:number,
                codProdott:number,
                quantita:number,
                prezzoivaesclusa:number,
                prezzoivainclusa:number,
                disponibile:string,
                saldo:number,
               )
    {
        this.id = id
        this.codProdott = codProdott
        this.quantita = quantita
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getSaldo():number
    {
        return this.saldo
    }

    getAcquisto()
    {
        return this.prezzoivainclusa
    }

}

class Vestito extends Prodotto
{
    collezione:string
    capo:string
    modello:number
    colore:string

    constructor(id:number,
                codProdott:number,
                collezione:string,
                capo:string,
                modello:number,
                quantita:number,
                colore:string,
                prezzoivaesclusa:number,
                prezzoivainclusa:number,
                disponibile:string,
                saldo:number,)
    {
        //Richiamo il super
        super(id, 
              codProdott, 
              quantita, 
              prezzoivaesclusa, 
              prezzoivainclusa, 
              disponibile, 
              saldo)
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.colore = colore
    }
}

const capiList:Vestito[] = []

fetch("./json/Abbigliamento.json")
    .then(response =>
        {
            if(response.ok) return response.json()
        })
    .then(capi =>
        {
            capi.forEach(capo => 
            {
                capiList.push(new Vestito(capo.id, 
                                          capo.codprodott, 
                                          capo.collezione, 
                                          capo.colore, 
                                          capo.disponibile, 
                                          capo.id, capo.modello,
                                          capo.prezzoivainclusa, 
                                          capo.prezzoivaesclusa, 
                                          capo.quantita, 
                                          capo.saldo
                                         )
                             )
            });

            console.log(capiList[0].getSaldo())
        })

