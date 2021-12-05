export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo/>
                <LogoMobile/>
                <InstagramMobile/>
                <Pesquisa/>
                <Icones/>
                <IconesMobile/>
                
            </div>
        </div>
    );
}

function Logo(){
    return(
        <div class="logo">
             <Icone nome="logo-instagram"/>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function LogoMobile(){
    return(
        <div class="logo-mobile">
             <Icone nome="logo-instagram"/>
        </div>
    );
}

function InstagramMobile(){
    return(
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    );
}

function Pesquisa(){
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div> 
    );
}

function Icones(){
    const nomeIcones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return(
        <div class="icones">
            {nomeIcones.map(nome=><ion-icon name={nome}></ion-icon>)}
        </div>
    );
}

function Icone({nome}){
    return  <ion-icon name={nome}></ion-icon>;
}

function IconesMobile(){
    return(
        <div class="icones-mobile">
            <Icone nome="paper-plane-outline"/>
        </div>
    );
}