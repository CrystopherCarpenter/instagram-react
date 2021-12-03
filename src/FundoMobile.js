const nomeIcones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
let icones;

export default function FundoMobile(){
    return(
        <div class="fundo-mobile">
            {icones = nomeIcones.map(nome => <ion-icon name={nome}></ion-icon>)}
        </div>
    )
}

