export default function Posts(){
    const posts = [{usuario:"meowed", imagem:"gato-telefone", curtido:"respondeai", numero:"101.523"}, {usuario:"barked", imagem:"dog", curtido:"adorable_animals", numero:"99.159"}];    

    return(
      <div class="posts">
         {posts.map(Post)}
      </div>
    );
}

function Post({usuario, imagem, curtido, numero}){
  return(
    <div class="post">
      <Topo usuario={usuario}/>
      <Conteudo imagem={imagem}/>
      <Fundo curtido={curtido} numero={numero}/>    
    </div>
  );
}

function Topo({usuario}){
  return(
    <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${usuario}.svg`} />
          {usuario}
        </div>
        <div class="acoes">
          <Icone nome="ellipsis-horizontal"/>
        </div>
    </div>
  );
}

function Conteudo({imagem}){
  return(
    <div class="conteudo">
        <img src={`assets/img/${imagem}.svg`} />
    </div>
  );
}

function Fundo({curtido, numero}){
  return(
    <div class="fundo">
      <Acoes/>
      <div class="curtidas">
        <img src={`assets/img/${curtido}.svg`} />
        <div class="texto">
          Curtido por <strong>{curtido}</strong> e <strong>outras {numero} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

function Acoes(){
  const nomeIcones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

  return(
    <div class="acoes">
      <div>
        {nomeIcones.map(nome => <ion-icon name={nome}></ion-icon>)}
      </div>
      <div>
        <Icone nome="bookmark-outline"/>
      </div>
    </div>
  );
}

function Icone({nome}){
  return  <ion-icon name={nome}></ion-icon>;
}
