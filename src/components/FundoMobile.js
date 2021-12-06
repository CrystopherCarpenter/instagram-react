
export default function FundoMobile(){
    const nomeIcones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];

    return(
        <div class="fundo-mobile">
            {nomeIcones.map(nome => <ion-icon name={nome}></ion-icon>)}
        </div>
    )
}

