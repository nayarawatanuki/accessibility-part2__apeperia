<h1 align="center">
  <img alt="Apeperia" src="https://raw.githubusercontent.com/nayarawatanuki/accessibility-part2__apeperia/main/img/readme/apeperia__cover.png"/>
</h1>

### Índice

* [:pencil: Descrição do Projeto](#pencil-descrição-do-projeto)
* [:white_circle: Status do Projeto](#white_circle-status-do-projeto)
* [:hammer: Funcionalidades e Demonstração da Aplicação](#hammer-funcionalidades-e-demonstração-da-aplicação)
* [:open_file_folder: Acesso ao Projeto](#open_file_folder-acesso-ao-projeto)
* [:rocket: Abrir e rodar o projeto](#rocket-abrir-e-rodar-o-projeto)
* [:keyboard: Tecnologias utilizadas](#keyboard-tecnologias-utilizadas)
* [:woman_technologist: Desenvolvedor(a) do Projeto](#woman_technologist-desenvolvedora-do-projeto)

</br>

## :pencil: Descrição do Projeto
O projeto **[Apeperia - parte 2](https://nayarawatanuki.github.io/accessibility-part2__apeperia/)**, é uma proposta de página web para uma plataforma que fornece construção e manutenção de aplicativos.

</br>Desenvolvido para o curso de **ACESSIBILIDADE WEB PARTE 2 - COMPONENTES ACESSIVEIS COM UM POUCO DE JAVASCRIPT** da plataforma [Alura](https://www.alura.com.br/).

</br>

## :white_circle: Status do Projeto
> Projeto concluído :white_check_mark:

</br>

## :hammer: Funcionalidades e Demonstração da Aplicação
Continuação do projeto [Apeperia - parte 1](https://github.com/nayarawatanuki/accessibility-part2__apeperia). </br>

O objetivo do curso foi mais focado na parte de `acessibilidade`,
pensando nisso, o projeto Apeperia foi disponibilizado pronto (`html` + `css` + `js`) e apenas 
realizado alterações, mais no arquivo `html` em si, deixando-o adequado para perfis de PCD.

Dicas e alterações:

- section Destaque:
  - troca da tag `h2` pela tag `p`, para melhor semântica;

- section Planos:
  - inclusão da tag `span` com a classe `hidden` dentro das tags `h3` e `a` (botão "Assinar plano"), para melhor acessibilidade de perfis de PCD;
  - troca da tag `h4` pela tag `span`;

- section Blog:
  - inclusão da tag `h3` para título da Lista de artigos;
  - troca da tag `ul` pela tag `ol`;
  - `ol`: uso do atributo `aria-labelledby` para ancorar ao título da lista `h3`;
  - `li`: criação do atributo `data-notice`, para identificar a postagem selecionada no carrossel;
  - remoção das descrições dentro do atributo `alt`, pois são imagens apenas representativas/opcionais, não necessárias para quem estar lendo ou ouvindo a página;
  - remoção das funções de dinamicas dos comportamentos dos slides em `css` para construir em [`carousel.js`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/js/carousel.js);
  - inclusão da tag `span` com a classe `hidden`, marcando o slide selecionado (slide atual), dentro das tags `li` dos controles do carrossel, para melhor acessibilidade. 
  - [`carousel.js`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/js/carousel.js): construção da função de troca de posição do `<span>slide atual</span>` e da função de dinamica de comportamento dos slides;

- section Destaques: 
  - [Destaques (`highlights/index.css`)](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/styles/layout/home/highlights/index.css): alteração da configuração de `display: block` para `display: none`, na classe `highlights__button`;
  - `div` de classe `dialogNewsletter` retirada da section e colacada após fechamento da tag `footer`;
  - inclusão de tag `div` com a classe `content-outside-dialog` em todo conteúdo antes do `modal` com classe `dialogNewsletter`;
  - [`dialog.js`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/js/dialog.js): construção das funções de configuração da navegabilidade da tecla `TAB` e da `ESC`, para melhor acessibilidade do `modal/dialog` de Newsletter, com auxilio da lib [`inert.js`](https://github.com/WICG/inert);

- section Contato:
  - troca da tag `p` pela tag `legend`;
  - inclusão da tag `fieldset` em volta de todo conteúdo da tag `form`;
  - configuração `border: 0;` para tag `<fieldset>` no arquivo [`reset.css`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/styles/reset.css);
  - [Contato (`contact/index.css`)](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/styles/layout/contact/index.css): ajustes na classe `contact-form__legend` incluindo a configuração `display: flex`;
  - [Contato (`contact/contact-field.css`)](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/styles/layout/contact/contact-field.css): ajustes para o `checkbox` "Receber destaques por email" ficar com melhor acessibilidade na leitura; 
  - criação do atributo id `zip-code` para função de validação de cep;
  - [`zip-code__validation.js`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/js/zip-code__validation.js): criada função para customizar a mensagem de erro quando o cep não for preenchido corretamente;
  - uso da lib [mailcheck](https://github.com/mailcheck/mailcheck) para validação do `input` de e-mail;
  - [`mailcheck.js`](https://github.com/nayarawatanuki/accessibility-part2__apeperia/blob/main/js/mailcheck.js): contrução da função para validar o `input` de e-mail e customização das mensagens/alertas de erro;

</br>

## :open_file_folder: Acesso ao projeto
Você pode acessar o [código fonte do projeto](https://github.com/nayarawatanuki/accessibility-part2__apeperia) ou 
[baixá-lo](https://github.com/nayarawatanuki/accessibility-part2__apeperia/archive/refs/heads/main.zip).

Caso obte por baixá-lo: 
Após baixar o projeto, você pode abrir com o VS Code. Para isso, abra o explorer (primeiro icone no menu) clique em:
- Abir pasta ou Open folder
- Procure o local onde o projeto está localizado e o selecione (Caso o projeto seja baixado em zip, é necessário extraí-lo antes de procurá-lo)
- Por fim, clique em Selecionar pasta ou Select Folder

</br>

## :rocket: Abrir e rodar o projeto
Caso tenha interesse em visualizar o que foi realizado: [Apeperia - parte 2](https://nayarawatanuki.github.io/accessibility-part2__apeperia/) 

Ou, caso prefira baixá-lo clicando [aqui](https://github.com/nayarawatanuki/accessibility-part2__apeperia/archive/refs/heads/main.zip).

> Após baixar o projeto, abra a pasta do projeto (Caso o projeto seja baixado em zip, é necessário extraí-lo antes de abrir), então clique no:
> - Aqruivo **``index.html``**
> - O projeto abrirá em seu navegador padrão (aconselho configurar para o Chrome, se possível)

</br>

## :keyboard: Tecnologias utilizadas
![HTML + CSS + JS](https://raw.githubusercontent.com/nayarawatanuki/accessibility-part2__apeperia/main/img/readme/html-css-js.PNG)</br>

</br>

## :woman_technologist: Desenvolvedor(a) do Projeto
:star: [Nayara Watanuki](https://github.com/nayarawatanuki)
