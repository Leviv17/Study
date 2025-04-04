var checkbox = document.getElementById('toggle_mode');

function applyTheme(isDark) {
    var areas = document.getElementById('areas');
    var logo = document.getElementById('logo');
    var select_serie = document.getElementsByClassName('select_serie');

    if (isDark) {
        areas.style.backgroundColor = '#2A362B'; 
        document.body.style.backgroundColor = '#1B1F1D'; 
        document.body.style.color = '#D4E9D4'; 

        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = '#2E4A32'; 
            button.style.color = '#E8F5E9'; 
            button.style.borderColor = '#6FA86F'; 
        });

        checkbox.style.backgroundColor = '#2E4A32';
        checkbox.style.color = '#E8F5E9';

        areas.style.borderColor = '#6FA86F';

        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = '#D4E9D4'; 
        });

        var listItems = document.querySelectorAll('li');
        listItems.forEach(function(item) {
            item.style.color = '#D4E9D4';
        });

        for (var i = 0; i < select_serie.length; i++) {
            select_serie[i].style.backgroundColor = '#2E4A32'; 
            select_serie[i].style.color = '#E8F5E9'; 
        }

        var titulo = document.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = '#D4E9D4'; 
        }

        var vestibularUece = document.querySelectorAll('.vestibular_uece');
        vestibularUece.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#7CA362';
        });
        var vestibularEnem = document.querySelectorAll('.vestibular_enem');
        vestibularEnem.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#9A7BAF';
        });
        var vestibularIta = document.querySelectorAll('.vestibular_ita');
        vestibularIta.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#6C8FAF';
        });

        var cardUece = document.querySelectorAll('.card_uece');
        cardUece.forEach(function(card) {
            card.style.backgroundColor = '#354837'; 
            card.style.color = 'white'; 
        });
        var cardEnem = document.querySelectorAll('.card_enem');
        cardEnem.forEach(function(card) {
            card.style.backgroundColor = '#3D3242'; 
            card.style.color = 'white'; 
        });
        var cardIta = document.querySelectorAll('.card_ita');
        cardIta.forEach(function(card) {
            card.style.backgroundColor = '#34444C'; 
            card.style.color = 'white'; 
        });

        var descriptions = document.querySelectorAll('.descricao');
        descriptions.forEach(function(description) {
            description.style.color = '#D4E9D4'; 
        });

        var materiaisTitulo = document.querySelector('.titulo'); 
        if (materiaisTitulo) {
            materiaisTitulo.style.color = '#D4E9D4'; 
        }

        var cardsExtras = document.querySelectorAll('.card');
        cardsExtras.forEach(function(card) {
            card.style.backgroundColor = '#2E2F2E'; 
            card.style.color = 'white'; 
        });

        var acessButtons = document.querySelectorAll('.acess');
        acessButtons.forEach(function(button) {
            button.style.backgroundColor = '#3A3D3A'; 
            button.style.color = '#E8F5E9'; 
            button.style.borderColor = '#6FA86F'; 
        });


        var links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.style.color = '#A8D5BA'; 
        });


        var cardsUece = document.querySelectorAll('.cards_uece');
        cardsUece.forEach(function(card) {
            card.style.backgroundColor = '#25392C'; 
        });

        var cardsEnem = document.querySelectorAll('.cards_enem');
        cardsEnem.forEach(function(card) {
            card.style.backgroundColor = '#32263A'; 
        });

        var cardsIta = document.querySelectorAll('.cards_ita');
        cardsIta.forEach(function(card) {
            card.style.backgroundColor = '#24333C'; 
        });


        logo.src = "https://i.pinimg.com/736x/74/34/b1/7434b124580bc55a4c9382add6b08cd8.jpg";
    } else {
        areas.style.backgroundColor = ''; 
        document.body.style.backgroundColor = ''; 
        document.body.style.color = ''; 

        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = ''; 
            button.style.color = ''; 
            button.style.borderColor = ''; 
        });

        checkbox.style.backgroundColor = '';
        checkbox.style.color = '';

        areas.style.borderColor = '';

        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = ''; 
        });

        var listItems = document.querySelectorAll('li');
        listItems.forEach(function(item) {
            item.style.color = '';
        });

        for (var i = 0; i < select_serie.length; i++) {
            select_serie[i].style.backgroundColor = '';
            select_serie[i].style.color = ''; 
        }

        var titulo = document.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = ''; 
        }

        var vestibularTitles = document.querySelectorAll('.vestibular_uece, .vestibular_enem, .vestibular_ita');
        vestibularTitles.forEach(function(title) {
            title.style.color = ''; 
        });

        var cards = document.querySelectorAll('.card_uece, .card_enem, .card_ita');
        cards.forEach(function(card) {
            card.style.backgroundColor = ''; 
            card.style.color = ''; 
        });

        var descriptions = document.querySelectorAll('.descricao');
        descriptions.forEach(function(description) {
            description.style.color = ''; 
        });

        var materiaisTitulo = document.querySelector('.titulo'); 
        if (materiaisTitulo) {
            materiaisTitulo.style.color = ''; 
        }

        var cardsExtras = document.querySelectorAll('.card');
        cardsExtras.forEach(function(card) {
            card.style.backgroundColor = ''; 
            card.style.color = ''; 
        });

        var acessButtons = document.querySelectorAll('.acess');
        acessButtons.forEach(function(button) {
            button.style.backgroundColor = ''; 
            button.style.color = ''; 
            button.style.borderColor = ''; 
        });

        var links = document.querySelectorAll(' a');
        links.forEach(function(link) {
            link.style.color = '';
        });

        var cardsUece = document.querySelectorAll('.cards_uece');
        cardsUece.forEach(function(card) {
            card.style.backgroundColor = '';
        });

        var cardsEnem = document.querySelectorAll('.cards_enem');
        cardsEnem.forEach(function(card) {
            card.style.backgroundColor = ''; 
        });

        var cardsIta = document.querySelectorAll('.cards_ita');
        cardsIta.forEach(function(card) {
            card.style.backgroundColor = ''; 
        });

        logo.src = "https://i.pinimg.com/736x/01/be/20/01be2016a4e9ab272f91139d02fa831a.jpg";
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                applyTheme(checkbox.checked); 
            }
        });
    });

    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

checkbox.addEventListener('change', function() {
    applyTheme(this.checked);
});

applyTheme(checkbox.checked);

    function go_to_top() {
        window.scrollTo({
        top: 0,
        behavior:"smooth"
        })
    }

    function sel_area(area)  {
        var navAreas = document.getElementById('areas');
        var mainCont = document.getElementById('container');

        if (area === 'home') {
            navAreas.innerHTML = `
            <ul>
                <li><strong><button onclick="sel_area('home')">Início</button></strong></li>
                <li><strong><button onclick="sel_area('materias')">Ensino Médio</button></strong></li>
                <li><strong><button onclick="sel_area('redacoes')">Redações</button></strong></li>
                <li><strong><button onclick="sel_area('simulados')">Simulados</button></strong></li>
                <li><strong><button onclick="sel_area('extra')">Materiais</button></strong></li>
            </ul>
            <div class="theme">🌓<input type="checkbox" id="toggle_mode"></div>
            `;
            mainCont.innerHTML = `
            <p class="titulo"><strong>Início</strong></p>
            <p>
                Olá! Bem vindo(a) ao Study, um projeto iniciado em 2023 com o objetivo de auxiliar estudantes no estudo de diversas matérias para vestibular ou ensino médio. Clique em alguma 
                das áreas acima para acessar uma das áreas presentes no site.
            </p>
            <img id="logo" src="https://i.pinimg.com/736x/01/be/20/01be2016a4e9ab272f91139d02fa831a.jpg" alt="logo do projeto study">
            `;
        }
        if (area === 'materias') {
            navAreas.innerHTML = `
            <ul>
                <li><strong><button onclick="sel_area('home')">Início</button></strong></li>
                <li><strong><button onclick="sel_area('materias')">Ensino Médio</button></strong></li>
                <li><strong><button onclick="sel_area('redacoes')">Redações</button></strong></li>
                <li><strong><button onclick="sel_area('simulados')">Simulados</button></strong></li>
                <li><strong><button onclick="sel_area('extra')">Materiais</button></strong></li>
            </ul>
            <div class="theme">🌓<input type="checkbox" id="toggle_mode"></div>
            `;
            mainCont.innerHTML = `
            <p class="titulo"><strong>Ensino Médio</strong></p>
            <p>
                Aqui estão as séries com as matérias estudadas e os assuntos normalmente vistos em cada uma durante o período do
                ensino médio e que muitas vezes são cobrados em vestibulares:
            </p>
            <div class="series">
                <a href="#serie1" class="select_serie"><button class="btn_serie">1° ano</button></a>
                <a href="#serie2" class="select_serie"><button class="btn_serie">2° ano</button></a>
                <a href="#serie3" class="select_serie"><button class="btn_serie">3° ano</button></a>
            </div>
            <br>
            <p id="serie1"><strong>1° ano</strong></p>
            <p class="materia"><strong>Inglês</strong></p>
            <ul class="lista_materias">
                <li>Prefixos and Sufixos</li>
                <li>Classes Gramaticais</li>
                <li>Artigos</li>
                <li>Pronomes</li>
                <li>Verb To Be</li>
                <li>Modal Verbs</li>
                <li>Formas do Imperativo</li>
                <li>Simple Present</li>
                <li>Simple Past</li>
                <li>Present Continuous</li>
            </ul>
            <br>
            <p class="materia"><strong>Espanhol</strong></p>
            <ul class="lista_materias">
                <li>Acentuação gráfica</li>
                <li>Acento diferencial</li>
                <li>Pontuação</li>
                <li>Artigos, Contrações e artigo neutro LO</li>
                <li>Gênero e número dos substantivos</li>
                <li>Os adjetivos</li>
                <li>As preposições</li>
                <li>Uso do verbo GUSTAR</li>
                <li>Pronomes pessoais</li>
                <li>Voseo</li>
                <li>Pronome pessoal complemento direto e indireto</li>
                <li>Os porquês</li>
                <li>Uso de MUY/ MUCHO</li>
                <li>Uso dos termos MIENTRAS e SIN EMBARGO</li>
                <li>Advérbio</li>
                <li>Heterotônico e Heterogenérico</li>
                <li>Palavras homógrafas e homófonas</li>
                <li>Interjeições</li>
                <li>Monossílabos homônimos</li>
            </ul>
            <br>
            <p class="materia"><strong>Português</strong></p>
            <ul class="lista_materias">
                <li>Linguagem, língua e fala</li>
                <li>Linguagem verbal e não verbal</li>
                <li>Norma culta e língua falada</li>
                <li>Como a língua se modifica</li>
                <li>Ortografia, convenção e efeitos no cotidiano</li>
                <li>Novo acordo ortográfico</li>
                <li>História da língua portuguesa.</li>
                <li>O que é um texto?</li>
                <li>Funções da linguagem</li>
                <li>Semântica: palavras homônimas e parônimas</li>
                <li>Figuras de palavra- Metáfora, Metonímia, Catacrese, Antonomásia, Sinestesia e Comparação</li>
                <li>Sinônimos, heperônimos e antônimos</li>
                <li>Fonologia</li>
                <li>Ortografia</li>
                <li>Afixos (prefixos e sufixos)</li>
                <li>Dígrafo, encontro consonantal e encontro vocálico</li>
                <li>Processos de formação de palavras</li>
                <li>Regras de acentuação gráfica</li>
                <li>Uso do hífen</li>
                <li>Palavras derivadas e neologismo</li>
                <li>Onomatopeia</li>
                <li>O que são gírias e como usá-las?</li>
            </ul>
            <br>
            <p class="materia"><strong>Literatura</strong></p>
            <ul class="lista_materias">
                <li>Artes, suas manifestações e linguagens</li>
                <li>Literário e não literário</li>
                <li>A arte Literária e suas funções</li>
                <li>Linguagem denotativa, conotativa e figuras de linguagem</li>
                <li>Foco Narrativo</li>
                <li>Gêneros literários</li>
                <li>Estrutura dos textos narrativos</li>
                <li>Gênero lírico</li>
                <li>Gênero dramático</li>
                <li>Crônica</li>
                <li>Conto</li>
                <li>Romance</li>
                <li>Novela</li>
                <li>Metalinguagem</li>
                <li>Intertextualidade</li>
                <li>Função poética</li>
                <li>Literatura infanto-juvenil</li>
                <li>Literatura de Cordel</li>
                <li>Trovadorismo</li>
                <li>Prosa medieval: novelas de cavalaria, cronicões e livros de linhagem</li>
                <li>Teatro de Gil Vicente: autos e farsas</li>
                <li>Características gerais do Classicismo</li>
                <li>Camões: épico e lírico</li>
                <li>O contexto histórico do Barroco em Portugal e no Brasil</li>
                <li>Arcadismo em Portugal</li>
                <li>Arcadismo no Brasil</li>
                <li>Contexto histórico do Romantismo na Europa</li>
                <li>Contexto histórico do Romantismo em portugal</li>
                <li>Primeira Geração do Romantismo no Brasil</li>
                <li>Características do Ultrarromantismo</li>
                <li>Condorerismo brasileiro e a campanha abolicionista</li>
                <li>Romantismo - prosa</li>
                <li>Romantismo poesia</li>
            </ul>
            <br>
            <p class="materia"><strong>Matemática</strong></p>
            <ul class="lista_materias">
                <li>Teoria dos conjuntos</li>
                <li>Operações entre conjuntos</li>
                <li>Relações de pertinencia entre conjuntos</li>
                <li>Plano e produto cartesiano</li>
                <li>Representação gráfica do produto cartesianio</li>
                <li>Conceito de Funções</li>
                <li>Produtos notáveis: evidência e diferença de dois quadrados</li>
                <li>Produtos notáveis: trinômio do quadrado perfeito e diferença de dois cubos</li>
                <li>Equação polinomial de 1º grau e 2º graus</li>
                <li>Equações incompletas de 2º grau</li>
                <li>Função polinomial do 1º grau (função afim)</li>
                <li>Função polinomial do 2º grau</li>
                <li>Gráficos das funções polinomiais</li>
                <li>Inequações de 1º grau</li>
                <li>Inequações de 2º grau</li>
                <li>Inequação quociente</li>
                <li>Inequações produto</li>
                <li>Função modular</li>
                <li>Inequação Modular</li>
                <li>Função exponencial</li>
                <li>Gráfico da função exponencial</li>
                <li>Logaritmo</li>
                <li>Função logarítmica</li>
                <li>Inequação logarítmica</li>
                <li>Gráfico da função logarítmica</li>
            </ul>
            <br>
            <p class="materia"><strong>História</strong></p>
            <ul class="lista_materias">
                <li>História, tempo e fontes historiográficas</li>
                <li>Diversidade cultural, conflitos e vida em sociedade o Cultura Material e imaterial; patrimônio e diversidade cultural no Brasil</li>
                <li>Pré-história</li>
                <li>Mesopotâmia</li>
                <li>Egito Antigo</li>
                <li>Hebreus</li>
                <li>Fenícios</li>
                <li>Persas</li>
                <li>Civilização grega</li>
                <li>Civilização grega - período pré-homérico, homérico e arcaico</li>
                <li>Civilização grega - período clássico e helenístico</li>
                <li>Roma antiga - monarquia e república</li>
                <li>Roma antiga - Império Romano</li>
                <li>Organização social na antiguidade clássica</li>
                <li>Povos germânicos</li>
                <li>Idade Média - Surgimento do Feudalismo</li>
                <li>O papel da Igreja Católica na Idade Média</li>
                <li>Cultura Medieval e o feudalismo</li>
                <li>Império Bizantino</li>
                <li>Mundo árabe</li>
                <li>A África no período medieval</li>
                <li>Reinos africanos</li>
                <li>Principais civilizações africanas</li>
                <li>As Cruzadas</li>
                <li>Renascimento cultural e urbano</li>
                <li>A Peste Negra e a crise do século XIV</li>
                <li>Formação das monarquias nacionais</li>
                <li>Renascimento cultural</li>
                <li>Reformas religiosas</li>
                <li>Contrarreforma católica</li>
                <li>Absolutismo</li>
            </ul>
            <br>
            <p class="materia"><strong>Química</strong></p>
            <ul class="lista_materias">
                <li>Origem da química e símbolos da linguagem da química</li>
                <li>Unidades de medidas na química</li>
                <li>Classificação das substâncias e dos sistemas</li>
                <li>Alotropia</li>
                <li>Transformações físicas e químicas</li>
                <li>Propriedades físicas e químicas da matéria</li>
                <li>Estados físicos da matéria</li>
                <li>Composição química dos materiais</li>
                <li>Processos físicos de separação de misturas</li>
                <li>Modelos atômicos</li>
                <li>Partículas fundamentais do átomo</li>
                <li>Número atômico, número de massa e elemento químico</li>
                <li>Isótonos, isóbaros e isótopos</li>
                <li>Átomos, íons e espécies isoeletrônicas</li>
                <li>Estrutura eletrônica dos átomos</li>
                <li>Histórico e organização da tabela periódica</li>
                <li>Propriedades periódicas dos elementos químicos</li>
                <li>Regra do octeto</li>
                <li>Ligação iônica e propriedades dos compostos iônicos</li>
                <li>Ligação covalente</li>
                <li>Propriedades dos compostos covalentes</li>
                <li>Ligação metálica</li>
                <li>Geometria molecular</li>
                <li>Polaridade das ligações covalentes</li>
                <li>Polaridade das moléculas</li>
                <li>Hibridização</li>
                <li>Nanotecnologia</li>
                <li>Mol</li>
                <li>Volume molar</li>
                <li>Fórmulas molecular, percentual e mínima</li>
                <li>Balanceamento das equações</li>
                <li>Lei de Lavoisier (Leis Ponderais)</li>
                <li>Leis Ponderais (Proust e Dalton)</li>
            </ul>
            <br>
            <p class="materia"><strong>Física</strong></p>
            <ul class="lista_materias">
                <li>A física ao longo da história</li>
                <li>Sistema internacional de unidades</li>
                <li>Grandezas vetoriais e escalares</li>
                <li>Vetores</li>
                <li>Velocidade</li>
                <li>Movimento Uniforme</li>
                <li>Movimento uniformemente variado</li>
                <li>Lançamento vertical / queda livre</li>
                <li>Lançamento horizontal e oblíquo</li>
                <li>Movimentos circulares</li>
                <li>As Leis de Newton</li>
                <li>Força peso</li>
                <li>Força atrito, força normal de contato e tração</li>
                <li>Atrito</li>
                <li>Força resultante</li>
                <li>Polias</li>
                <li>Impulso e quantidade de movimento</li>
                <li>Estática dos corpos extensos</li>
                <li>Plano inclinado</li>
                <li>Sistemas mecânicos com mais de um corpo</li>
                <li>O que é energia?</li>
                <li>Energia cinética</li>
                <li>Energia potencial gravitacional</li>
                <li>Energia potencial elástica</li>
                <li>Conservação da energia mecânica</li>
                <li>Consumo de energia</li>
                <li>Transformações energéticas</li>
                <li>Trabalho</li>
                <li>Potência</li>
                <li>Aceleração Gravitacional</li>
                <li>Gravitação Universal e Leis de Kepler</li>
                <li>Movimentos de corpos celestes</li>
                <li>Equilíbrio e Torque</li>
                <li>Centro de Massa e Alavanca</li>
                <li>Pressão</li>
                <li>Empuxo e o Teorema de Arquimedes</li>
                <li>Densidade</li>
            </ul>
            <br>
            <p class="materia"><strong>Geografia</strong></p>
            <ul class="lista_materias">
                <li>Coordenadas geográficas e a rosa dos ventos</li>
                <li>Coordenadas geográficas – latitude e longitude</li>
                <li>GPS – História e funcionamento.</li>
                <li>Fusos horários</li>
                <li>Cartografia</li>
                <li>Escalas cartográficas e resolução de exercícios</li>
                <li>Origem do Universo, formação da Terra e do Sistema Solar.</li>
                <li>História geológica da Terra</li>
                <li>Movimento de translação</li>
                <li>Rotação</li>
                <li>Sistema solar</li>
                <li>Deriva Continental</li>
                <li>Tectônica de placas</li>
                <li>Eras geológicas</li>
                <li>Litosfera e sua dinâmica</li>
                <li>Agentes formadores da paisagem</li>
                <li>Agentes formadores do relevo</li>
                <li>Tectonismo e vulcanismo</li>
                <li>Agentes externos de relevo</li>
                <li>Formação e degradação do solo</li>
                <li>Hidrosfera</li>
                <li>Hidrografia: conceitos gerais</li>
                <li>Hidrografia do Brasil</li>
                <li>Grandes bacias hidrográficas no mundo</li>
                <li>Bacias hidrográficas brasileiras</li>
                <li>Grandes reservas hídricas subterrâneas brasileiras</li>
                <li>Crise hídrica no Brasil e no mundo</li>
                <li>Atmosfera</li>
                <li>Climatologia - fatores que influenciam no clima</li>
                <li>Principais características das zonas climáticas da Terra e principais tipos de clima</li>
                <li>Fenômenos meterorológicos e previsão do tempo</li>
                <li>Principais tipos climáticos do Brasil</li>
                <li>Efeito estufa</li>
                <li>Camada de ozônio</li>
                <li>Aquecimento Global</li>
                <li>Domínios morfoclimáticos: Paisagens naturais do Brasil</li>
                <li>Domínios morfoclimáticos</li>
                <li>Principais fatores de degradação dos biomas brasileiros</li>
                <li>Estrutura geológica brasileira</li>
                <li>Recursos minerais brasileiros</li>
                <li>Relevo brasileiro - classificação de Aroldo de Azevedo</li>
                <li>Conceito de paisagem</li>
                <li>Conceitos de espaço, lugar e território</li>
            </ul>
            <br>
            <p class="materia"><strong>Biologia</strong></p>
            <ul class="lista_materias">
                <li>Características básicas dos seres vivos</li>
                <li>Termos usados na classificação dos seres vivos</li>
                <li>Métodos Científicos</li>
                <li>Teorias sobre a origem da vida</li>
                <li>Compostos inorgânicos - água e seres vivos</li>
                <li>Compostos inorgânicos - sais minerais e seres vivos</li>
                <li>Vitaminas</li>
                <li>Compostos orgânicos - Carboidratos</li>
                <li>Compostos orgânicos - Lipídios</li>
                <li>Compostos orgânicos - Proteínas</li>
                <li>Compostos orgânicos - Enzimas</li>
                <li>Tipos de Microscópios</li>
                <li>Características gerais das células</li>
                <li>Membrana plasmática</li>
                <li>Mitocôndrias</li>
                <li>Organelas celulares</li>
                <li>Transportes transmembrana - passivos</li>
                <li>Bomba de sódio e potássio</li>
                <li>Fagocitose, pinocitose e digestão intracelular</li>
                <li>Respiração celular</li>
                <li>Fermentação alcóolica e láctica</li>
                <li>Fotossíntese</li>
                <li>Fotossíntese - determinação pela temperatura e pelo CO2, velocidade da fotossíntese</li>
                <li>Quimiossíntese e fotossíntese bacteriana</li>
                <li>DNA E RNA</li>
                <li>Testes de DNA</li>
                <li>Transgênicos</li>
                <li>Células tronco</li>
                <li>Clonagem e suas promessas terapêuticas</li>
                <li>Cromossomos e cariótipo</li>
                <li>Projeto Genoma Humano</li>
                <li>Mitose e meiose</li>
                <li>Reprodução sexuada</li>
                <li>Reprodução assexuada</li>
                <li>Gametogênese</li>
                <li>Sistema reprodutor introdução</li>
                <li>Sistema genital masculino</li>
                <li>Sistema genital feminino</li>
                <li>Métodos contraceptivos</li>
                <li>Vitelo, polo animal, vegetal e mórula</li>
                <li>Embriologia: os tipos de óvulos e clivagens</li>
                <li>Blastulação e gastrulação</li>
                <li>Neurulação e organogênese</li>
                <li>Anexos embrionários</li>
                <li>Fertilização in vitro</li>
                <li>Tecido epitelial</li>
                <li>Tecido conjuntivo</li>
                <li>Tecido muscular</li>
                <li>Tecido nervoso</li>
            </ul>
            <br>
            <p class="materia"><strong>Redação</strong></p>
            <ul class="lista_materias">
                <li>Tipologia textual - Injunção</li>
                <li>Como usar a intertextualidade no texto</li>
                <li>Carta pessoal</li>
                <li>E-mail pessoal</li>
                <li>Reportagem: Linguagem e estrutura</li>
                <li>Foco narrativo, personagem, tempo, espaço, enredo</li>
                <li>Modalidade fantástica: conto de fadas, conto fantástico, conto de ficção científica.</li>
            </ul>
            <br>
            <p class="materia"><strong>Sociologia</strong></p>
            <ul class="lista_materias">
                <li>Processo de construção do conhecimento humano e formação do pensamento sociológico</li>
                <li>A Revolução Industrial, formação das Ciências Sociais e o Surgimento da Sociologia como Ciência</li>
                <li>Émile Durkheim: O Fato Social, Coisa, Solidariedades e O Suicídio</li>
                <li>Max Weber: Ação Social, dominação</li>
                <li>Karl Marx: Materialismo Histórico</li>
                <li>A formação dos grupos humanos, suas inter-relações e transformações</li>
                <li>Comunidade, sociedades e controle social</li>
                <li>Instituições sociais e controle social</li>
                <li>O controle social como princípio de normatização das relações interpessoais</li>
                <li>A questão da diversidade e o direito à diferença</li>
                <li>Unidade humana e a identidade: o etnocentrismo</li>
                <li>Indústria Cultural e os Meios de Comunicação de Massa</li>
                <li>As várias concepções do conceito de ideologia</li>
            </ul>
            <br>
            <p class="materia"><strong>Educação Física</strong></p>
            <ul class="lista_materias">
                <li>Cultura Corporal do Movimento</li>
                <li>Jogos e Esportes</li>
                <li>Danças e Atividades Rítmicas</li>
                <li>Ginástica</li>
                <li>Determinantes da Atividade Física</li>
                <li>Lutas</li>
                <li>Distúrbios Alimentares</li>
            </ul>
            <br>
            <p class="materia"><strong>Filosofia</strong></p>
            <ul class="lista_materias">
                <li>Definições de filosofia</li>
                <li>O senso comum e a razão filosófica</li>
                <li>Os físicos gregos e a passagem do pensamento mítico ao pensamento racional</li>
                <li>Filósofos da natureza</li>
                <li>Filósofos pré-socráticos</li>
                <li>Filosofia clássica</li>
                <li>Sócrates</li>
                <li>Maiêutica e ironia socráticas</li>
                <li>Platão e o mundo das ideias</li>
                <li>Platão e o mito da caverna</li>
                <li>Platão: justiça e política</li>
                <li>Formas de governo em Platão</li>
                <li>Aristóteles</li>
                <li>A lógica aristotélica</li>
                <li>A felicidade em Aristóteles</li>
                <li>Aristóteles e a metafísica</li>
                <li>Razão e fé</li>
            </ul>
            <br>
            <button onclick="go_to_top()" class="topo">↑</button>
            <br>


            <p id="serie2"><strong>2° ano</strong></p>
            <p class="materia"><strong>Inglês</strong></p>
            <ul class="lista_materias">
                <li>Adverbs os frequency</li>
                <li>Past continuous</li>
                <li>Prepositions</li>
                <li>Must, have to and should</li>
                <li>Repositions on, in and at</li>
                <li>Making questions</li>
                <li>Future with will and be going to</li>
                <li>Present Perfect Continuous</li>
                <li>Comparatives and superlatives</li>
                <li>Plural nouns</li>
            </ul>
            <br>
            <p class="materia"><strong>Espanhol</strong></p>
            <ul class="lista_materias">
                <li>Pronomes relativos e reflexivos</li>
                <li>Conjunções subordinadas e coordenativas</li>
                <li>Pronomes e determinantes indefinidos</li>
                <li>Pronomes interrogativos</li>
                <li>Verbos regulares no presente do indicativo</li>
                <li>Números ordinais e cardinais</li>
                <li>Horas</li>
                <li>Pretérito perfeito, imperfeito e mais que perfeito</li>
                <li>Futuro imperfeito e perfeito</li>
                <li>Divergências Léxicas</li>
                <li>Locução verbal</li>
            </ul>
            <br>
            <p class="materia"><strong>Português</strong></p>
            <ul class="lista_materias">
                <li>Substantivos</li>
                <li>Adjetivos</li>
                <li>Numerais</li>
                <li>Artigos</li>
                <li>Pronomes relativos, indefinidos e interrogativos</li>
                <li>Pronomes pessoais, possessivos e demonstrativos</li>
                <li>Advérbios e locuções adverbiais</li>
                <li>Conjunções coordenativas e subordinadas</li>
                <li>Conjunções e Interjeições</li>
                <li>Preposições</li>
                <li>Modos e tempos verbais</li>
                <li>Vozes verbais</li>
                <li>Locuções verbais</li>
                <li>Formas nominais</li>
            </ul>
            <br>
            <p class="materia"><strong>Literatura</strong></p>
            <ul class="lista_materias">
                <li>Realismo</li>
                <li>Machado de Assis</li>
                <li>Naturalismo no Brasil</li>
                <li>Impressionismo na literatura brasileira</li>
                <li>Parnasianismo</li>
                <li>Simbolismo</li>
                <li>Pré-modernismo</li>
            </ul>
            <br>
            <p class="materia"><strong>Matemática</strong></p>
            <ul class="lista_materias">
                <li>Trigonometria</li>
                <li>Equação trigonométrica</li>
                <li>Função trigonométrica</li>
                <li>Operações com matrizes</li>
                <li>Matrizes: determinantes e regra de Sarrus</li>
                <li>Sistemas lineares</li>
                <li>Progressões Geométricas</li>
                <li>Logaritmos</li>
                <li>Ciclo trigonométrico</li>
                <li>Leis dos senos e cossenos</li>
                <li>Função seno, cosseno e tangente</li>
                <li>Probabilidade</li>
                <li>Estatística</li>
                <li>Análise combinatória</li>
                <li>Geometria espacial</li>
            </ul>
            <br>
            <p class="materia"><strong>História</strong></p>
            <ul class="lista_materias">
                <li>Absolutismo</li>
                <li>As grandes navegações</li>
                <li>Mercantilismo</li>
                <li>América colonial</li>
                <li>Administração colonial portuguesa e espanhola</li>
                <li>Civilizações pré-colombianas</li>
                <li>Expansão ultramarina portuguesa</li>
                <li>Descobrimento do Brasil</li>
                <li>Brasil colônia</li>
                <li>União Ibérica</li>
                <li>Expansão bandeirante</li>
                <li>Economia mineradora</li>
                <li>Origem e evolução do movimento Iluminista</li>
                <li>Revolução francesa</li>
                <li>Independências da América Latina</li>
                <li>Socialismo, comunismo e anarquismo</li>
                <li>Revolução industrial</li>
                <li>Renascimento</li>
                <li>Segundo reinado no Brasil</li>
                <li>Período regencial</li>
                <li>O fim da escravidão e do império</li>
                <li>O século XIX na Europa e nos Estados Unidos</li>
                <li>Período napoleônico</li>
            </ul>
            <br>
            <p class="materia"><strong>Química</strong></p>
            <ul class="lista_materias">
                <li>Sais e Óxidos</li>
                <li>Análise qualitativa da acidez e do pH</li>
                <li>Reações</li>
                <li>Concentração dos reagentes</li>
                <li>Cálculos estequiométricos</li>
                <li>Propriedades coligativas</li>
                <li>Entalpia de reação e de ligação</li>
                <li>Velocidade das reações químicas</li>
                <li>Termoquímica</li>
                <li>Soluções</li>
                <li>Dispersões</li>
                <li>Teoria das colisões</li>
                <li>Energia de ativação</li>
                <li>Cinética química</li>
                <li>Eletroquímica</li>
                <li>Equilíbrio iônico</li>
                <li>Sistemas-tampão</li>
                <li>Classificação das soluções</li>
                <li>Pureza do material</li>
                <li>Química orgânica</li>
                <li>Molaridade</li>
                <li>Gases</li>
            </ul>
            <br>
            <p class="materia"><strong>Física</strong></p>
            <ul class="lista_materias">
                <li>Calor x temperatura</li>
                <li>Calorimetria</li>
                <li>Escalas térmicas</li>
                <li>Transmissão de calor</li>
                <li>Termodinâmica</li>
                <li>Mudanças de estado</li>
                <li>Dilatação térmica dos sólidos e líquidos</li>
                <li>Comportamento térmico dos gases</li>
                <li>Óptica geométrica</li>
                <li>Reflexão e refração</li>
                <li>Ondulatória</li>
                <li>Acústica</li>
                <li>Fenômenos ondulatórios</li>
                <li>Propagação do som</li>
                <li>Características fisiológicas do som</li>
            </ul>
            <br>
            <p class="materia"><strong>Geografia</strong></p>
            <ul class="lista_materias">
                <li>Conceitos de espaço, lugar e território</li>
                <li>Demografia</li>
                <li>População mundial</li>
                <li>Aspectos gerais da população brasileira</li>
                <li>Indicadores socioeconômicos e desigualdades sociais</li>
                <li>Movimentos migratórios</li>
                <li>Urbanização mundial e brasileira</li>
                <li>Problemas ambientais em áreas urbanas</li>
                <li>Atividades agrárias no Brasil</li>
                <li>Globalização</li>
                <li>Industrialização mundial e brasileira</li>
                <li>Economias desenvolvidas: a industrialização precursora</li>
                <li>Economias em transição: a industrialização planificada</li>
                <li>Economias emergentes: a industrialização recente</li>
                <li>Dinâmica populacional</li>
                <li>O comércio internacional</li>
                <li>Delimitação e demarcação de terras indígenas e quilombolas</li>
                <li>Dinâmica territorial das comunidades tradicionais</li>
                <li>Conflitos armados</li>
                <li>Atuação de organismos internacionais</li>
                <li>Desenvolvimento humano</li>
                <li>O processo de desertificação</li>
            </ul>
            <br>
            <p class="materia"><strong>Biologia</strong></p>
            <ul class="lista_materias">
                <li>Taxonomia</li>
                <li>Vírus</li>
                <li>Reino protista</li>
                <li>Reino fungi</li>
                <li>Reino monera</li>
                <li>Reino plantae</li>
                <li>Angiospermas</li>
                <li>Reino animalia</li>
                <li>Tendências evolutivas nos grupos animais</li>
                <li>Animais invertebrados</li>
                <li>Cordados</li>
                <li>Anatomia e fisiologia humanas</li>
                <li>Esqueleto humano</li>
                <li>Doenças bacterianas</li>
                <li>Algas</li>
                <li>Protozoários</li>
                <li>Doenças causadas por protozoários</li>
                <li>Fungos</li>
                <li>Vegetais, folhas, flores e frutos</li>
            </ul>
            <br>
            <p class="materia"><strong>Redação</strong></p>
            <ul class="lista_materias">
                <li>Tipologia textual - Narração</li>
                <li>O artigo de opinião como gênero textual</li>
            </ul>
            <br>
            <p class="materia"><strong>Sociologia</strong></p>
            <ul class="lista_materias">
                <li>O papel do Estado</li>
                <li>Cidadania</li>
                <li>Movimentos sociais</li>
                <li>Tipos de Estado</li>
                <li>Estado moderno</li>
                <li>Trabalho para Marx, Durkheim e Weber</li>
                <li>Lutas políticas</li>
                <li>Minorias sociais</li>
                <li>Relações interpessoais</li>
                <li>Cultura e diversidade</li>
                <li>Consumismo e comunicação em massa</li>
                <li>Violências simbólicas, físicas e psicológicas</li>
                <li>Problemas étnico-raciais</li>
            </ul>
            <br>
            <p class="materia"><strong>Filosofia</strong></p>
            <ul class="lista_materias">
                <li>Amor platônico</li>
                <li>Ética e moral</li>
                <li>A ética aristotélica</li>
                <li>Immanuel Kant</li>
                <li>A ética kantiana</li>
                <li>A metafísica na modernidade</li>
                <li>Filosofia da ciência</li>
                <li>Filosofia do renascimento</li>
                <li>Filosofia iluminista</li>
                <li>Filosofia moderna</li>
                <li>Maquiavel</li>
                <li>Friedrich Nietzsche</li>
                <li>O empirismo inglês</li>
                <li>Dualismo mente e corpo de Descartes</li>
                <li>Conceito de estética na filosofia</li>
            </ul>
            <br>
            <button onclick="go_to_top()" class="topo">↑</button>
            <br>


            <p id="serie3"><strong>3° ano</strong></p>
            <p class="materia"><strong>Inglês</strong></p>
            <ul class="lista_materias">
                <li>Future continuous</li>
                <li>Contable and Uncontable nouns</li>
                <li>Present perfect</li>
                <li>Modal verbs</li>
                <li>Past perfect</li>
                <li>Passive sentences</li>
                <li>If clauses</li>
                <li>Noun clauses</li>
                <li>Phrasal verbs</li>
                <li>Reading strategies</li>
                <li>Interpretação de diferentes gêneros textuais em inglês</li>
                <li>Falsos cognatos</li>
                <li>Tempos verbais</li>
            </ul>
            <br>
            <p class="materia"><strong>Espanhol</strong></p>
            <ul class="lista_materias">
                <li>Particípio</li>
                <li>Gerúndio</li>
                <li>Imperativo</li>
                <li>Voz passiva</li>
                <li>Voz passiva sintética</li>
                <li>Presente do subjuntivo</li>
                <li>Pretérito imperfeito do subjuntivo</li>
                <li>Pretérito perfeito do subjuntivo</li>
                <li>Pretérito mais que perfeito do subjuntivo</li>
                <li>Prefixos negativos</li>
                <li>Palavras compostas</li>
                <li>Plural</li>
                <li>Interpretação de textos em espanhol</li>
                <li>Gêneros textuais</li>
                <li>Cultura hispânica</li>
            </ul>
            <br>
            <p class="materia"><strong>Português</strong></p>
            <ul class="lista_materias">
                <li>Frase, oração e período</li>
                <li>Sujeito e seus tipos (incluindo orações sem sujeito)</li>
                <li>Predicados</li>
                <li>Transitividade e tipos de predicado</li>
                <li>Predicativo</li>
                <li>Período composto</li>
                <li>Orações coordenadas e subordinadas</li>
                <li>Oração reduzida</li>
                <li>Consolidação morfossintática</li>
                <li>Classificação e relações semânticas</li>
                <li>Sinais de pontuação e os efeitos de sentido</li>
                <li>Colocação dos pronomes oblíquos átonos</li>
                <li>Concordância nominal</li>
                <li>Concordância verbal</li>
                <li>Recursos coesivos</li>
                <li>Transitividade verbal</li>
            </ul>
            <br>
            <p class="materia"><strong>Literatura</strong></p>
            <ul class="lista_materias">
                <li>Modernismo</li>
                <li>A geração de 30: prosa</li>
                <li>Autores e obras da geração de 30</li>
                <li>Concretismo</li>
                <li>Tropicalismo</li>
                <li>Poesia marginal</li>
                <li>Literatura atual brasileira</li>
            </ul>
            <br>
            <p class="materia"><strong>Matemática</strong></p>
            <ul class="lista_materias">
                <li>Definições e elementos de um círculo</li>
                <li>Área e Perímetro de um círculo</li>
                <li>Inscrição e Circunscrição de figuras</li>
                <li>Ângulos e relações métricas da circunferência</li>
                <li>Poliedros</li>
                <li>Prismas</li>
                <li>Pirâmides</li>
                <li>Sólidos de revolução</li>
                <li>Cilindros</li>
                <li>Cones</li>
                <li>Esferas</li>
                <li>Inscrição e Circunscrição de Sólidos</li>
                <li>Fatorial e números binomiais</li>
                <li>Binômio de Newton</li>
                <li>Princípio fundamental da contagem</li>
                <li>Análise combinatória</li>
                <li>Permutações</li>
                <li>Combinações</li>
                <li>Arranjos simples</li>
                <li>Estudo do ponto e reta</li>
                <li>Posições relativas entre duas retas</li>
                <li>Circunferência e círculo</li>
                <li>Equação de circunferência</li>
                <li>Pontos internos e pontos externos à circunferência</li>
                <li>Posições relativas entre circunferências</li>
                <li>O conjunto dos números complexos</li>
                <li>Forma geométrica/Polar de um número Complexo</li>
                <li>Desvio padrão e variância</li>
            </ul>
            <br>
            <p class="materia"><strong>História</strong></p>
            <ul class="lista_materias">
                <li>Do Neocolonialismo à Belle Époque</li>
                <li>Primeira Guerra Mundial</li>
                <li>Revolução Russa</li>
                <li>República Oligárquica no Brasil</li>
                <li>Totalitarismo</li>
                <li>Ascensão do nazi-fascismo</li>
                <li>Segunda Guerra Mundial</li>
                <li>Era Vargas</li>
                <li>Estado Novo</li>
                <li>Período democrático brasileiro: de 1945 a 1954</li>
                <li>O golpe militar e o fim do regime democrático</li>
                <li>Atos institucionais</li>
                <li>Militares no poder</li>
                <li>Movimentos sociais de 1968</li>
                <li>Constiuição de 1988</li>
                <li>Guerra Fria</li>
                <li>Fim do comunismo</li>
                <li>O Apartheid nos EUA e os movimentos negros</li>
                <li>Mundo globalizado</li>
            </ul>
            <br>
            <p class="materia"><strong>Química</strong></p>
            <ul class="lista_materias">
                <li>Radiação e radioatividade</li>
                <li>Emissões e reações nucleares</li>
                <li>Leis das emissões radioativas</li>
                <li>Decaimento nuclear</li>
                <li>Radioisótopos e ou traçadores radioativos</li>
                <li>Acidentes radioativos no Brasil e no Mundo e suas implicações</li>
                <li>Princípios gerais da eletroquímica</li>
                <li>Oxirredução, transferência de elétrons e NOX</li>
                <li>Agente oxidante e agente redutor</li>
                <li>Balanceamento de equações químicas de oxirredução</li>
                <li>Funcionamento das pilhas e baterias</li>
                <li>Origem da eletrólise</li>
                <li>Eletrólise ígnea e aquosa</li>
                <li>História da Química Orgânica</li>
                <li>Princípios gerais da química orgânica</li>
                <li>Postulados de Kekulé</li>
                <li>Classificação de átomos de carbono e de cadeias carbônicas</li>
                <li>Nomenclatura de compostos orgânicos</li>
                <li>Propriedades físicas dos compostos orgânicos</li>
                <li>Temperatura de ebulição e solubilidade dos compostos orgânicos</li>
                <li>Função química: hidrocarbonetos</li>
                <li>Funções químicas: álcool, enol e fenol</li>
                <li>Éter</li>
                <li>Aldeído</li>
                <li>Cetona</li>
                <li>Ácido carboxílico</li>
                <li>Éster</li>
                <li>Amina</li>
                <li>Amida</li>
                <li>Petróleo e outros combustíveis</li>
                <li>Origem e classificação dos polímeros</li>
                <li>Isomeria espacial geométrica</li>
                <li>Isomeria espacial óptica</li>
                <li>Conceitos de ácido e base de Arrhenius, Bronsted-Lowry</li>
                <li>Regra de Markovnikov</li>
                <li>Reações de simples troca</li>
                <li>Reações de alogenção dos alcanos</li>
                <li>Oxidação de álcoois</li>
                <li>Reações Químicas</li>
            </ul>
            <br>
            <p class="materia"><strong>Física</strong></p>
            <ul class="lista_materias">
                <li>Carga elétrica</li>
                <li>Eletrostática e eletrização dos corpos</li>
                <li>Força elétrica</li>
                <li>Campo elétrico</li>
                <li>Potencial elétrico</li>
                <li>Capacidade eletrostática</li>
                <li>Corrente elétrica</li>
                <li>Circuitos elétricos</li>
                <li>Resistência elétrica</li>
                <li>Resistividade</li>
                <li>Resistores e associação de resistores</li>
                <li>Potência elétrica</li>
                <li>Geradores elétricos e transmissão de energia elétrica</li>
                <li>Recepetores elétricos</li>
                <li>Teoria da Relatividade Geral</li>
            </ul>
            <br>
            <p class="materia"><strong>Geografia</strong></p>
            <ul class="lista_materias">
                <li>Industrialização brasileira</li>
                <li>Abertura comercial no Brasil</li>
                <li>Economia brasileira após a abertura política</li>
                <li>Produção mundial de energia</li>
                <li>Produção brasileira de energia</li>
                <li>Características da população mundial</li>
                <li>Fluxos migratórios</li>
                <li>Estrutura da população</li>
                <li>Formação e diversidade cultural da população brasileira</li>
                <li>Aspectos da população brasileiras</li>
                <li>Espaço urbano no mundo contemporâneo</li>
                <li>Urbanização brasileira</li>
                <li>Organização da produção agropecuária</li>
                <li>A agropecuária no Brasil</li>
            </ul>
            <br>
            <p class="materia"><strong>Biologia</strong></p>
            <ul class="lista_materias">
                <li>Introdução à genética</li>
                <li>Quadro de punnet</li>
                <li>Probabilidade aplicada à genética</li>
                <li>Heredograma</li>
                <li>Primeira Lei de Mendel</li>
                <li>Segunda Lei de Mendel</li>
                <li>Polialelia e dominância incompleta</li>
                <li>Genética dos fatores sanguíneos</li>
                <li>Linkage</li>
                <li>Herança ligada ao sexo</li>
                <li>Epistasia e poligenia</li>
                <li>Evolução - Lamarckismo</li>
                <li>Darwin e a seleção natural</li>
                <li>Darwinismo</li>
                <li>Comparação entre Darwin e Lamarck</li>
                <li>Neodarwinismo</li>
                <li>Lei de Hardy Weinberg</li>
                <li>Evidências evolutivas</li>
                <li>Ecologia - termos gerais</li>
                <li>Relações ecológicas</li>
                <li>Cadeias alimentares</li>
                <li>Pirâmides ecológicas</li>
                <li>Equilíbrio dos ecossistemas</li>
                <li>Ciclo da água</li>
                <li>Ciclo do carbono</li>
                <li>Ciclo do oxigênio</li>
                <li>Ciclo do nitrogênio</li>
                <li>Sucessão ecológica</li>
                <li>Desequilíbrio ambiental</li>
                <li>Poluição sonora, térmica e radioativa</li>
                <li>Poluição do ar, chuva ácida e inversão térmica</li>
                <li>O lixo que produzimos</li>
                <li>Derramamento de petróleo</li>
                <li>Eutrofização</li>
                <li>Produtos descartáveis</li>
                <li>Grandes Biomas terrestres</li>
                <li>Biomas Brasileiros</li>
                <li>Ecossistemas aquáticos</li>
            </ul>
            <br>
            <p class="materia"><strong>Redação</strong></p>
            <ul class="lista_materias">
                <li>Como delimitar a proposta de tema da redação Enem</li>
                <li>Como fazer a introdução da redação do Enem</li>
                <li>Como fazer os parágrafos de desenvolvimento da redação Enem</li>
                <li>Técnicas de argumentação na redação Enem</li>
                <li>Tese, argumento e opinião</li>
                <li>Coesão e coerência</li>
                <li>Impessoalidade na redação Enem</li>
                <li>Proposta de intervenção na conclusão</li>
                <li>Como fazer uma boa conclusão na Redação Enem</li>
                <li>As competências cobradas na redação do Enem</li>
                <li>Redações nota 1000</li>
                <li>Citações de filmes</li>
                <li>Citações diretas e indiretas</li>
                <li>Variedades linguísticas e a Redação Enem</li>
                <li>Norma culta, norma-padrão e norma popular</li>
            </ul>
            <br>
            <p class="materia"><strong>Sociologia</strong></p>
            <ul class="lista_materias">
                <li>Estado e direitos do cidadão a partir da Idade Moderna</li>
                <li>Política, poder e estado</li>
                <li>A história da formação do pensamento sociológico brasileiro</li>
                <li>Como a tecnologia está transformando as relações sociais</li>
                <li>Classes sociais ontem e hoje</li>
                <li>Era informacional e sociedade</li>
            </ul>
            <br>
            <p class="materia"><strong>Filosofia</strong></p>
            <ul class="lista_materias">
                <li>A ideia de fenomenologia de Hegel a Hussert</li>
                <li>Merleau-Ponty</li>
                <li>Heidegger e a destruição da metafísica</li>
                <li>Arthur Shopenhauer</li>
                <li>Existencialismo cristão</li>
                <li>O que é indústria cultural</li>
                <li>Foucault: verdade e poder</li>
                <li>Foucault: questões da microfísica do poder</li>
                <li>Wittgenstein e a filosofia da linguagem</li>
                <li>A filosofia no Brasil</li>
                <li>A questão indígena no Brasil e o cristianismo</li>
                <li>Qual a diferença entre direita e esquerda na política?</li>
                <li>Política no Brasil hoje: polarização e fanatismo</li>
                <li>Utilitarismo</li>
            </ul>
            <br>
            <button onclick="go_to_top()" class="topo">↑</button>
            <br>
            `;
        }
        if (area === 'redacoes') {
            navAreas.innerHTML = `
            <ul>
            <li><strong><button onclick="sel_area('home')">Início</button></strong></li>
            <li><strong><button onclick="sel_area('materias')">Ensino Médio</button></strong></li>
            <li><strong><button onclick="sel_area('redacoes')">Redações</button></strong></li>
            <li><strong><button onclick="sel_area('simulados')">Simulados</button></strong></li>
            <li><strong><button onclick="sel_area('extra')">Materiais</button></strong></li>
            </ul>
            <div class="theme">🌓<input type="checkbox" id="toggle_mode"></div>
            `;
            mainCont.innerHTML = `
            <p class="titulo"><strong>Treinar Redações</strong></p>
            <p>
                Uma coisa muito importante na preparação para vestibulares se trata do trino de redações. Atualmente há 
                inúmeros modelos distintos de redações solicitadas em vestibulares, no entanto alguns dos mais cobiçados no
                estado do Ceará são a UECE, o ENEM e o ITA que seguem estilos de textos distintos, com estruturas diferentes entre si.
                São essas estruturas e alguns sites para treino que estarão sendo disponibilizados nessa área.
            </p>
            <p class="vestibular_uece"><strong>UECE</strong></p>
            <div class="cards_uece">
                <a href="https://aprovatotal.com.br/vestibular-uece/" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Como Funciona" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feito antes de tudo é compreender como funciona
                            o vestibular da UECE, incluindo datas, fases, modelos de prova, cursos mais 
                            disputados, assuntos, entre outras informações.
                        </p>
                    </div>
                </a>
                <a href="https://chatgpt.com/?model=auto" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/512px-ChatGPT-Logo.svg.png" alt="ChatGPT" class="logo">
                        <p class="nome"><strong>ChatGPT</strong></p>
                        <p class="descricao">
                            Embora o ChatGPT seja visto com maus olhos atualmente devido a sua má utilização
                            ele ainda pode ser usado de maneira eficiente na correção e no treino de redações
                            de diversos vestibulares, incluindo modelo UECE. Embora sua avaliação nem sempre 
                            seja totalmente igual a avaliação oficial do vestibular ela é a plataforma digital
                            gratuita mais segura e mais eficaz encontrada.
                        </p>
                    </div>
                </a>
                <a href="https://profbrunocarvalho.com.br/blog/172" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="Texto" class="logo">
                        <p class="nome"><strong>Gêneros Textuais</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado para um site com todos os
                            gêneros textuais que podem cair na UECE, os principais são: depoimento, 
                            artigo de opinião, carta aberta, narração, biografia, crônica, editorial e relato.
                        </p>
                    </div>
                </a>
            </div>
            <p class="vestibular_enem"><strong>ENEM</strong></p>
            <div class="cards_enem">
                <a href="https://www.ead.com.br/blog/o-que-e-enem" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Ponto de interrogação" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feita é entender mais sobre o ENEM, o
                            que pode levar no dia, como ele pode ajudar a ingressar em uma faculdade
                            nacional ou internacional, entre outras informações.
                        </p>
                    </div>
                </a>
                <a href="https://app.glau.com.vc/aluno/inicio" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://app.glau.com.vc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-192x192.1a71ab0d.png&w=1920&q=75" alt="Glau" class="logo">
                        <p class="nome"><strong>Glau</strong></p>
                        <p class="descricao">
                            O Glau se trata de um site voltado principalmente a ajudar estudantes,
                            concurseiros e vestibulantes no treino de redações, ele disponibiliza 
                            suporte para vários modelos de avaliação de redação baseados no ENEM e
                            em vestibulares como Fuvest, Vunesp, UERJ, entre outras. Com feedbacks
                            super rápidos, notas sobre a redação e a nota que você poderia ganhar
                            com ela.
                        </p>
                    </div>
                </a>
                <a href="https://blog.imaginie.com.br/texto-dissertativo-argumentativo/" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="Texto" class="logo">
                        <p class="nome"><strong>Estrutura do Texto</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado para um site com algumas
                            orientações sobre o modelo de redação dissertativa-argumentativa, incluindo
                            a estrutura completa do texto.
                        </p>
                    </div>
                </a>
            </div>
            <p class="vestibular_ita"><strong>ITA</strong></p>
            <div class="cards_ita">
                <a href="https://vestibulares.estrategia.com/portal/enem-e-vestibulares/vestibulares/vestibular-ita/" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Ponto de interrogação" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feito antes de tudo é compreender como funciona
                            o vestibular do ITA, incluindo informações como modelo de prova e redação, cursos
                            disponíveis e fases da prova.
                        </p>
                    </div>
                </a>
                <a href="https://chatgpt.com/?model=auto" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/512px-ChatGPT-Logo.svg.png" alt="ChatGPT" class="logo">
                        <p class="nome"><strong>ChatGPT</strong></p>
                        <p class="descricao">
                            O ChatGPT é possivelmente o único meio digital que consegue fornecer uma ajuda decente
                            de forma gratuita para o treino desse estilo de redação dissertativa-argumentativa do ITA, no 
                            entanto para adequa-lo ao modelo do vestibular deve-se informar primeiramente os
                            critérios de avaliação que ele usa e qual a nota máxima definida para as dissertações
                            (informações no próximo card).
                        </p>
                    </div>
                </a>
                <a href="https://www.corrijame.com.br/bancas-e-suas-redacoes/como-funciona-a-redacao-do-ita" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="" class="logo">
                        <p class="nome"><strong>Modelo de Avaliação</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado para um site com algumas
                            orientações sobre o modelo de redação e os critérios que o ITA utiliza para
                            avaliar as redações dos candidatos.
                        </p>
                    </div>
                </a>
            </div>
            `;
        }
        if (area === 'simulados') {
            navAreas.innerHTML = `
            <ul>
            <li><strong><button onclick="sel_area('home')">Início</button></strong></li>
            <li><strong><button onclick="sel_area('materias')">Ensino Médio</button></strong></li>
            <li><strong><button onclick="sel_area('redacoes')">Redações</button></strong></li>
            <li><strong><button onclick="sel_area('simulados')">Simulados</button></strong></li>
            <li><strong><button onclick="sel_area('extra')">Materiais</button></strong></li>
            </ul>
            <div class="theme">🌓<input type="checkbox" id="toggle_mode"></div>
            `;
            mainCont.innerHTML = `
            <p class="titulo"><strong>Simulados</strong></p>
            <p>
                Aqui estão alguns simulados gratuitos, sites e provas anteriores para treinar e testar conhecimentos sobre três dos vestibulares mais cobiçados no estado do Ceará:
            </p>
            <p class="vestibular_uece"><strong>UECE</strong></p>
            <div class="cards_uece">
                <a href="https://aprovatotal.com.br/vestibular-uece/" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Ponto de interrogação" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feito antes de tudo é compreender como funciona
                            o vestibular da UECE, incluindo datas, fases, modelos de prova, cursos mais 
                            disputados, entre outras informações.
                        </p>
                    </div>
                </a>
                <a href="https://vestibulares.estrategia.com/portal/enem-e-vestibulares/vestibulares/o-que-cai-no-vestibular-da-uece/" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://images.vexels.com/media/users/3/324281/isolated/preview/0f51a9cf991b496b090447c55597eb1f-book-icon-in-green-color.png" alt="Livro aberto" class="logo">
                        <p class="nome"><strong>Assuntos que Caem</strong></p>
                        <p class="descricao">
                            No estudo para o vestibular da UECE, a coisa mais essencial, além da redação,
                            são os assuntos que normalmente caem na prova, pois assim o aluno poderá se
                            preparar melhor para ela.
                        </p>
                    </div>
                </a>
                <a href="https://app.estuda.com/questoes_provas/?inicio=1&instituicao=114" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://apiceconsultoria.com/inscricoes/img/icone-vestibular-01.png" alt="Prova corrigida" class="logo">
                        <p class="nome"><strong>Simulados</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado(a) para um site com vários
                            simulados da UECE que utilizam-se das provas anteriores para treino, com
                            gabarito de cada questão após a resposta.
                        </p>
                    </div>
                </a>
                <a href="https://servicos.aridesa.com.br/provascomentadas/" target="_blank" class="link_card">
                    <div class="card_uece">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="Prova" class="logo">
                        <p class="nome"><strong>Provas Anteriores</strong></p>
                        <p class="descricao">
                            Outra coisa que ajuda muito na hora do estudo é revisar algumas provas
                            anteriores da UECE. Ao pressionar esse card você será redirecionado a um site
                            onde há correção de todas as provas desde 2008.
                        </p>
                    </div>
                </a>
            </div>
            <p class="vestibular_enem"><strong>ENEM</strong></p>
            <div class="cards_enem">
                <a href="https://www.ead.com.br/blog/o-que-e-enem" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Ponto de interrogação" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feita é entender mais sobre o ENEM, o
                            que pode levar no dia, como ele pode ajudar a ingressar em uma faculdade
                            nacional ou internacional, entre outras informações.
                        </p>
                    </div>
                </a>
                <a href="https://www.todamateria.com.br/assuntos-que-mais-caem-no-enem/" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://images.vexels.com/media/users/3/324281/isolated/preview/0f51a9cf991b496b090447c55597eb1f-book-icon-in-green-color.png" alt="Livro aberto" class="logo">
                        <p class="nome"><strong>Assuntos que Caem</strong></p>
                        <p class="descricao">
                            No estudo para o ENEM, a coisa mais essencial, além do treino da redação,
                            são os assuntos que normalmente caem na prova, pois assim o aluno poderá
                            se preparar melhor para ele.
                        </p>
                    </div>
                </a>
                <a href="https://quizenem.com/tipos-de-simulado" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://apiceconsultoria.com/inscricoes/img/icone-vestibular-01.png" alt="Prova corrigida" class="logo">
                        <p class="nome"><strong>Simulados</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado(a) para um site de
                            simulados ENEM, que possui simulados com tempo, de áreas específicas e
                            simulados gerais para um treino mais amplo.
                        </p>
                    </div>
                </a>
                <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos" target="_blank" class="link_card">
                    <div class="card_enem">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="Prova" class="logo">
                        <p class="nome"><strong>Provas Anteriores</strong></p>
                        <p class="descricao">
                            Outra coisa que juda muito na hora do estudo é revisar algumas provas
                            anteriores do ENEM. Ao pressionar esse card você será redirecionado para
                            um site com todas as provas e gabaritos até hoje.
                        </p>
                    </div>
                </a>
            </div>
            <p class="vestibular_ita"><strong>ITA</strong></p>
            <div class="cards_ita">
                <a href="https://vestibulares.estrategia.com/portal/enem-e-vestibulares/vestibulares/vestibular-ita/" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://cdn-icons-png.flaticon.com/512/5726/5726624.png" alt="Ponto de interrogação" class="logo">
                        <p class="nome"><strong>Como Funciona</strong></p>
                        <p class="descricao">
                            A primeira coisa que deve ser feito antes de tudo é compreender como funciona
                            o vestibular do ITA, incluindo informações como modelo de prova e redação, cursos
                            disponíveis e fases da prova.
                        </p>
                    </div>
                </a>
                <a href="https://beduka.com/blog/dicas/faculdades/o-que-estudar-para-o-ita/" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://images.vexels.com/media/users/3/324281/isolated/preview/0f51a9cf991b496b090447c55597eb1f-book-icon-in-green-color.png" alt="Livro aberto" class="logo">
                        <p class="nome"><strong>Assuntos que Caem</strong></p>
                        <p class="descricao">
                            No estudo para o vestibular da UECE, a coisa mais essencial, além da redação,
                            são os assuntos que normalmente caem na prova, pois assim o aluno poderá se
                            preparar melhor para ela.
                        </p>
                    </div>
                </a>
                <a href="https://cosseno.com/provas-anteriores/ITA" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://apiceconsultoria.com/inscricoes/img/icone-vestibular-01.png" alt="Prova corrigida" class="logo">
                        <p class="nome"><strong>Simulados</strong></p>
                        <p class="descricao">
                            Ao pressionar esse card você será redirecionado(a) para um site com vários
                            simulados do ITA que utilizam-se das provas anteriores para treino, com
                            gabarito de cada questão após a resposta.
                        </p>
                    </div>
                </a>
                <a href="https://vestibular.ita.br/provas.htm" target="_blank" class="link_card">
                    <div class="card_ita">
                        <img src="https://images.vexels.com/content/130100/preview/document-circle-icon-f619f9.png" alt="Prova" class="logo">
                        <p class="nome"><strong>Provas Anteriores</strong></p>
                        <p class="descricao">
                            Outra coisa que juda muito na hora do estudo é revisar algumas provas
                            anteriores do ITA. Ao pressionar esse card você será redirecionado para
                            um site com provas do ITA desde 2008 até 2024.
                        </p>
                    </div>
                </a>
            </div>
            `;
        }
        if (area === 'extra') {
            navAreas.innerHTML = `
            <ul>
            <li><strong><button onclick="sel_area('home')">Início</button></strong></li>
            <li><strong><button onclick="sel_area('materias')">Ensino Médio</button></strong></li>
            <li><strong><button onclick="sel_area('redacoes')">Redações</button></strong></li>
            <li><strong><button onclick="sel_area('simulados')">Simulados</button></strong></li>
            <li><strong><button onclick="sel_area('extra')">Materiais</button></strong></li>
            </ul>
            <div class="theme">🌓<input type="checkbox" id="toggle_mode"></div>
            `;
            mainCont.innerHTML = `
            <p class="titulo"><strong>Materiais para Estudo</strong></p>
            <p>
                Aqui estão disponibilizados alguns sites úteis que podem auxiliar em seus estudos, como corretores de redação com IA, criador de mapas mentais, plataformas de cursos gratuitas 
                e bancos de questões para vestibulares.
            </p>
            <div class="cards">
                <a href="https://www.mindmeister.com/app/folders" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://cdn.productivity.directory/tools/758a0983-a73b-41a0-b3b5-48688cce678e" alt="MindMeister" class="logo">
                    <p class="nome"><strong>MindMeister</strong></p>
                    <p class="descricao">
                        O MindMeister se trata de um site gratuito voltado a criação de mapas mentais, cada mapa mental
                        criado pelo(a) estudante fica salvo dentro de sua conta.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.w3schools.com/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://avatars.githubusercontent.com/u/77673807?v=4" alt="W3schools" class="logo">
                    <p class="nome"><strong>W3schools</strong></p>
                    <p class="descricao">
                        W3Schools é um site voltado ao aprendizado de tecnologias web, ele
                        inclui informações sobre diversas linguagens de programação.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.studyfetch.com/platform/studyset/67a8a3c366c8eef900422a94" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://store-images.s-microsoft.com/image/apps.14069.119987e4-edf3-4a8b-91bb-ce7c3137526c.d6f84194-4ddf-482e-8629-8c4cd602a9e3.ef40887b-634d-40db-8616-387ce74e7158" alt="Study Fetch" class="logo">
                    <p class="nome"><strong>Study Fetch</strong></p>
                    <p class="descricao">
                        StudyFetch oferece ferramentas de aprendizado baseadas em IA, 
                        como geração de flashcards e quizzes a partir de vídeos ou PDFs.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://web.cria.net.br/?pagina=1" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://web.cria.net.br/assets/Logo.c6c19163.svg" alt="CRIA" class="logo">
                    <p class="nome"><strong>CRIA - Corretor de Redações</strong></p>
                    <p class="descricao">
                        CRIA se trata de uma plataforma de correção de redações que utiliza inteligência
                        artificial para fornecer feedback detalhado. Ele oferece suporte a diversos gêneros textuais.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://aluno.coredacao.com/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://media.licdn.com/dms/image/v2/D4D0BAQE13bfDExLKew/company-logo_200_200/company-logo_200_200/0/1694016520019/coredao_logo?e=2147483647&v=beta&t=ZmBe_xcack0HLGkm-8KRqJykQVp5sIzaLxyNs82Saq4" alt="coRedação" class="logo">
                    <p class="nome"><strong>coRedação</strong></p>
                    <p class="descricao">
                        coRedação oferece correções instantâneas e gratuitas de redações, com marcação de erros,
                        sugestões de melhorias e notas por competência.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://quizlet.com/latest" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://cdn-icons-png.freepik.com/512/10011/10011225.png" alt="Quizlet" class="logo">
                    <p class="nome"><strong>Quizlet</strong></p>
                    <p class="descricao">
                        Quizlet é um site de aprendizagem simples que permite a pessoa
                        criar cartões, jogos e ferramentas ou acessar alguns já criados.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://pt.khanacademy.org/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://img.icons8.com/plasticine/200/khan-academy.png" alt="Khan Academy" class="logo">
                    <p class="nome"><strong>Khan Academy</strong></p>
                    <p class="descricao">
                        Khan Academy é um site gratuito voltado ao ensino de diversas matérias
                        por meio de textos, videoaulas e atividades, seguindo um modelo de cursos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.ev.org.br/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://seeklogo.com/images/B/bradesco-icon-logo-9924102675-seeklogo.com.png" alt="Fundação Bradesco" class="logo">
                    <p class="nome"><strong>Fundação Bradesco</strong></p>
                    <p class="descricao">
                        Fundação Bradesco se trata de uma plataforma de cursos e trilhas totalmente
                        gratuita e com certificados validados pela própria Bradesco.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://habitica.com/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://static.wikia.nocookie.net/habitrpg/images/b/b3/Promo_android.png/revision/latest?cb=20151211080154" alt="Habitica" class="logo">
                    <p class="nome"><strong>Habitica</strong></p>
                    <p class="descricao">
                        Habitica é um site bem diferenciado que ajuda a pessoa a organizar
                        sua rotina por meio de um RPG personalizado com aquilo que ela quer melhorar.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.geogebra.org/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Geogebra.svg/640px-Geogebra.svg.png" alt="Geogebra" class="logo">
                    <p class="nome"><strong>Geogebra</strong></p>
                    <p class="descricao">
                        Geogebra é um site voltado ao estudo da matemática por meio de elementos
                        práticos, como gráficos, jogos, diversos tipos de calculadoras, etc.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://filosofianaescola.com/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://filosofianaescola.com/wp-content/themes/filosofia_na_escola/assets/img/logo.svg" alt="Filosofia na Escola" class="logo">
                    <p class="nome"><strong>Filosofia na Escola</strong></p>
                    <p class="descricao">
                        Filosofia na Escola é um site semelhante ao Khan Academy, porém voltado
                        especificamente ao estudo da filosofia por meio de explicações, atividades
                        e alguns vídeos que estão disponíveis no canal oficial do youtube.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://learnenglish.britishcouncil.org/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://play-lh.googleusercontent.com/V0D8RnpUxoQIFAxXiEyIT2-9XjTfm0TUA1aRtdFG2PFOLkGX_hlvxUW_U1aOL8rkQZ0" alt="British Council" class="logo">
                    <p class="nome"><strong>British Council</strong></p>
                    <p class="descricao">
                        British Council é uma plataforma educacional voltada a aprendizagem da
                        língua inglesa, com histórias, jogos e atividades para testar conhecimentos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.profedeele.es/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.profedeele.es&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2" alt="ProfedeELE" class="logo">
                    <p class="nome"><strong>ProfedeELE</strong></p>
                    <p class="descricao">
                        ProfedeELE é uma plataforma educacional voltada a aprendizagem da
                        língua espanhola, com vídeos, jogos e atividades para testar conhecimentos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.historiadomundo.com.br/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qsyktcHC9OYFMQQLocuwabfiLzncCXmpAQ&s" alt="História do Mundo" class="logo">
                    <p class="nome"><strong>História do Mundo</strong></p>
                    <p class="descricao">
                        História do Mundo é um site educativo sobre história, ele possui
                        os principais eventos históricos já presenciados pela humanidade.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://app.senecalearning.com/courses" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://static.wikia.nocookie.net/logopedia/images/a/a1/Seneca_Learning_icon.png/revision/latest?cb=20200420132600" alt="Seneca" class="logo">
                    <p class="nome"><strong>Seneca</strong></p>
                    <p class="descricao">
                        Seneca é um site que usa conhecimentos em neurociência e IA para
                        facilitar o aprendizado de alunos do ensino médio e fundamental.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://quizizz.com/admin" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://i0.wp.com/www.cristic.com/wp-content/uploads/2023/05/cristic-herramientas-tic-educativas-profesores-evaluacion-quizizz.png?fit=300%2C300&ssl=1" alt="Quizizz" class="logo">
                    <p class="nome"><strong>Quizizz</strong></p>
                    <p class="descricao">
                        Quizizz é um site de quizzes e jogos desenvolvidos por alunos e 
                        professores para testar conhecimentos sobre diversos assuntos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://app.estuda.com/usuarios" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://s.zst.com.br/prod/cupons/long-term-cached-logos/2023-9-1_21:35:33-19011-Logo-200x200.png" alt="Estuda.com" class="logo">
                    <p class="nome"><strong>Estuda.com</strong></p>
                    <p class="descricao">
                        Estuda.com é um site com diversas questões com resoluções e
                        vídeos para que o aluno possa se preparar e forma eficaz para vestibulares.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.cursou.com.br/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-yZcfBfow9tIRnK0F5TGOR7AkgMmU4NXWw&s" alt="Cursou" class="logo">
                    <p class="nome"><strong>Cursou</strong></p>
                    <p class="descricao">
                        Na Cursou você encontra mais de 4 mil cursos gratuitos 
                        para você aprender a qualquer hora e lugar sobre diversos assuntos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://www.cursoemvideo.com/cursos/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://yt3.googleusercontent.com/ytc/AIdro_m-8zZRJBWMwnaHcJgQv2IRr0dLcqCv1yKcQHgSEZ26jHw=s900-c-k-c0x00ffffff-no-rj" alt="Curso em Vídeo" class="logo">
                    <p class="nome"><strong>Curso em Vídeo</strong></p>
                    <p class="descricao">
                        Curso em Vídeo se trata de uma plataforma de cursos
                        relacionados a tecnologia recheada de vídeos explicativos sobre vários assuntos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://pt.quizur.com/" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qtDkc9l4QiLZq6ed1hXPnfH4t3ClOZF8iQwZBnuvMGe-LGQMWvf3aZhJnFyojR1hHAQ&usqp=CAU" alt="Quizur" class="logo">
                    <p class="nome"><strong>Quizur</strong></p>
                    <p class="descricao">
                        Embora o Quizur seja prioritariamente um site lúdico
                        ainda é possível encontrar diversos quizzes para estudar e até mesmo criar o seu próprio.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://projetoagathaedu.com.br/app/index.php" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y1nz56uuUp5HvgMBwFAfA-rmIUvTloauIg&s" alt="Projeto Agatha" class="logo">
                    <p class="nome"><strong>Projeto Agatha</strong></p>
                    <p class="descricao">
                        O Projeto Agatha se trata de um site educacional
                        que dispõe de diversos recursos, desde planos de estudo até questões de concursos.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
                <a href="https://brainly.com/?source=regflowPage&cb=1735248036362" target="_blank" class="link_card">
                <div class="card">
                    <img src="https://play-lh.googleusercontent.com/bF0SIQHBJ8a8mXmPJS6lnCAo-U0kHaNjSL1yOCVw94QzkyMBzP-0YYzQnlfrt7ogqqw" alt="Projeto Agatha" class="logo">
                    <p class="nome"><strong>Brainly</strong></p>
                    <p class="descricao">
                        O Brainly se trata de um site popular educacional
                        onde os estudantes podem fazer perguntas e responder questões, auxiliando na resolução de atividades.
                    </p>
                        <button class="acess">Acessar</button>
                </div>
                </a>
            </div>
            `;
        }

var checkbox = document.getElementById('toggle_mode');

function applyTheme(isDark) {
    var areas = document.getElementById('areas');
    var logo = document.getElementById('logo');
    var select_serie = document.getElementsByClassName('select_serie');

    if (isDark) {
        areas.style.backgroundColor = '#2A362B'; 
        document.body.style.backgroundColor = '#1B1F1D';
        document.body.style.color = '#D4E9D4'; 

        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = '#2E4A32'; 
            button.style.color = '#E8F5E9'; 
            button.style.borderColor = '#6FA86F'; 
        });

        checkbox.style.backgroundColor = '#2E4A32';
        checkbox.style.color = '#E8F5E9';

        areas.style.borderColor = '#6FA86F';

        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = '#D4E9D4'; 
        });

        var listItems = document.querySelectorAll('li');
        listItems.forEach(function(item) {
            item.style.color = '#D4E9D4';
        });

        for (var i = 0; i < select_serie.length; i++) {
            select_serie[i].style.backgroundColor = '#2E4A32';
            select_serie[i].style.color = '#E8F5E9';
        }

        var titulo = document.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = '#D4E9D4';
        }

        var vestibularUece = document.querySelectorAll('.vestibular_uece');
        vestibularUece.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#7CA362';
        });
        var vestibularEnem = document.querySelectorAll('.vestibular_enem');
        vestibularEnem.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#9A7BAF';
        });
        var vestibularIta = document.querySelectorAll('.vestibular_ita');
        vestibularIta.forEach(function(title) {
            title.style.color = 'white'; 
            title.style.backgroundColor = '#6C8FAF';
        });

        var cardUece = document.querySelectorAll('.card_uece');
        cardUece.forEach(function(card) {
            card.style.backgroundColor = '#354837';
            card.style.color = 'white'; 
        });
        var cardEnem = document.querySelectorAll('.card_enem');
        cardEnem.forEach(function(card) {
            card.style.backgroundColor = '#3D3242';
            card.style.color = 'white'; 
        });
        var cardIta = document.querySelectorAll('.card_ita');
        cardIta.forEach(function(card) {
            card.style.backgroundColor = '#34444C'; 
            card.style.color = 'white'; 
        });

        var descriptions = document.querySelectorAll('.descricao');
        descriptions.forEach(function(description) {
            description.style.color = '#D4E9D4';
        });

        var materiaisTitulo = document.querySelector('.titulo'); 
        if (materiaisTitulo) {
            materiaisTitulo.style.color = '#D4E9D4'; 
        }

        var cardsExtras = document.querySelectorAll('.card');
        cardsExtras.forEach(function(card) {
            card.style.backgroundColor = '#2E2F2E'; 
            card.style.color = 'white'; 
        });

        var acessButtons = document.querySelectorAll('.acess');
        acessButtons.forEach(function(button) {
            button.style.backgroundColor = '#3A3D3A'; 
            button.style.color = '#E8F5E9'; 
            button.style.borderColor = '#6FA86F'; 
        });

        var links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.style.color = '#A8D5BA'; 
        });

        var cardsUece = document.querySelectorAll('.cards_uece');
        cardsUece.forEach(function(card) {
            card.style.backgroundColor = '#25392C'; 
        });

        var cardsEnem = document.querySelectorAll('.cards_enem');
        cardsEnem.forEach(function(card) {
            card.style.backgroundColor = '#32263A'; 
        });

        var cardsIta = document.querySelectorAll('.cards_ita');
        cardsIta.forEach(function(card) {
            card.style.backgroundColor = '#24333C'; 
        });

        logo.src = "https://i.pinimg.com/736x/74/34/b1/7434b124580bc55a4c9382add6b08cd8.jpg";
    } else {
        areas.style.backgroundColor = '';
        document.body.style.backgroundColor = ''; 
        document.body.style.color = '';

        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = ''; 
            button.style.color = ''; 
            button.style.borderColor = ''; 
        });


        checkbox.style.backgroundColor = '';
        checkbox.style.color = '';

 
        areas.style.borderColor = '';

 
        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = '';
        });

        var listItems = document.querySelectorAll('li');
        listItems.forEach(function(item) {
            item.style.color = '';
        });

        for (var i = 0; i < select_serie.length; i++) {
            select_serie[i].style.backgroundColor = ''; 
            select_serie[i].style.color = '';
        }

        var titulo = document.querySelector('.titulo');
        if (titulo) {
            titulo.style.color = ''; 
        }

        var vestibularTitles = document.querySelectorAll('.vestibular_uece, .vestibular_enem, .vestibular_ita');
        vestibularTitles.forEach(function(title) {
            title.style.color = ''; 
        });

        var cards = document.querySelectorAll('.card_uece, .card_enem, .card_ita');
        cards.forEach(function(card) {
            card.style.backgroundColor = ''; 
            card.style.color = ''; 
        });

        var descriptions = document.querySelectorAll('.descricao');
        descriptions.forEach(function(description) {
            description.style.color = ''; 
        });


        var materiaisTitulo = document.querySelector('.titulo');
        if (materiaisTitulo) {
            materiaisTitulo.style.color = ''; 
        }

        var cardsExtras = document.querySelectorAll('.card');
        cardsExtras.forEach(function(card) {
            card.style.backgroundColor = ''; 
            card.style.color = ''; 
        });

        var acessButtons = document.querySelectorAll('.acess');
        acessButtons.forEach(function(button) {
            button.style.backgroundColor = ''; 
            button.style.color = ''; 
            button.style.borderColor = ''; 
        });

        var links = document.querySelectorAll(' a');
        links.forEach(function(link) {
            link.style.color = ''; 
        });


        var cardsUece = document.querySelectorAll('.cards_uece');
        cardsUece.forEach(function(card) {
            card.style.backgroundColor = '';
        });

        var cardsEnem = document.querySelectorAll('.cards_enem');
        cardsEnem.forEach(function(card) {
            card.style.backgroundColor = ''; 
        });

        var cardsIta = document.querySelectorAll('.cards_ita');
        cardsIta.forEach(function(card) {
            card.style.backgroundColor = ''; 
        });


        logo.src = "https://i.pinimg.com/736x/01/be/20/01be2016a4e9ab272f91139d02fa831a.jpg";
    }


    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                applyTheme(checkbox.checked); 
            }
        });
    });

    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

checkbox.addEventListener('change', function() {
    applyTheme(this.checked);
});

applyTheme(checkbox.checked);
}
