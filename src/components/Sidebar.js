export default function Sidebar(){
    return(
        <div class="sidebar">
            <Usuario usuario="catanacomics" nome="Catana"/>
            <Sugestoes/>

            <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function Usuario({usuario, nome}){
    return(
        <div class="usuario">
            <img src={`assets/img/${usuario}.svg`} />
            <div class="texto">
              <strong>{usuario}</strong>
              {nome}
            </div>
        </div>
    );
}

function Sugestoes(){
    const sugestoes = [
        {usuario:"bad.vibes.memes", razao:"Segue você"},
        {usuario:"chibirdart", razao:"Segue você"},
        {usuario:"razoesparaacreditar", razao:"Novo no Instagram"},
        {usuario:"adorable_animals", razao:"Segue você"},
        {usuario:"smallcutecats", razao:"Segue você"},
    ];
    
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(Sugestao)}
        </div>
    );
}
function Sugestao({usuario, razao}){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={`assets/img/${usuario}.svg`} />
              <div class="texto">
                <div class="nome">{usuario}</div>
                <div class="razao">{razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}