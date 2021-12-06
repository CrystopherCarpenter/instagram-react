export default function Stories(){
    const nomesStories = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

    return(
        <div class="stories">
            {nomesStories.map(Story)}
            <Setinha/>
        </div>
    );
}

function Story( nome ){
    return(
        <div class="story">
            <div class="imagem">
              <img src={`assets/img/${nome}.svg`} />
            </div>
            <div class="usuario">
              {nome}
            </div>
        </div>
    );
}

function Setinha(){
    return(
        <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}
