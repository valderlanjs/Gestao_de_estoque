# Gestor de Estoque em ReactJS

## Tecnologias Utilizadas

 - ReactJS
 - JavaScript
 - CSS
 - HTML
 - GIT

## Autor
 **Valderlan José da Silva** 

# Aplicação

 Esta aplicação SPA (Single Page Application), é um sistema de gestão de estoque, no qual, permite ao usuário listar, cadastrar, atualizar e excluir itens do estoque,
 nela foi utilizado o reac-router-dom entre outras funcionalidades do ReactJS.

## Arquivos Principais

`router.js`
 Este arquivo define as rotas da aplicação usando React Router Dom. Ele define as rotas para as páginas principais e páginas relacionadas aos itens da listagem.

 `app.js`
 O arquivo principal da aplicação, onde o roteador é fornecido e o contexto da listagem é inicializado.
 
 `RootLayout.jsx` O componente de layout principal da aplicação, que fornece a estrutura básica de todas as páginas.

`home.jsx` Página inicial da aplicação, que exibe um dashboard com estatísticas sobre a listagem e os itens.

## Pasta `items` 
Contém os componentes relalcionados aos itens do estoque.
    
- **`CreateItem.jsx`**: Componente para criar um novo item.
    
- **`Layout.jsx`**: Componente de layout para as páginas relacionadas aos itens.

- **`ListItems.jsx`**: Componente para listar todos os itensdo estoque.

- **`ShowItem.jsx`**: Componente para exibir detalhes de um item específico.

- **`UpdateItem.jsx`**: Componente para atualizar informações de um item existente.

## Hooks
**`useStock.js`**
Um hook personalizado que fornece acesso ao conrexto do estoque, incluindo funçoes para adicionar, atualizar, excluir e obter itens do estoque.

## Entidades

**`StockItem.js`**
Define a classe **StockItem** que representa um item na listagem, incluindo propriedade como, nome, descrição, quantidade, preço, etc.

## Componentes Reutilizáveis

**`ItemForm.jsx`**
Um componente de formulário reutilizável para adicionar e atualizar itens do estoque.

**`ItemsTable.jsx`**
Um compomente reutilizável para exibir uma tabela de itens do estoque.

**`DeleteButton.jsx`**
Um botão reutilizável para excluir itens.

# Como utilizar a aplicação

 Ao abrir a aplicação, essa é a tela inicial.
![Passo 1](/img/passo1.png)

 Dá para vê que possui a opção de cadastrar item. Ao clicar nessa opção, abrirá uma nova página com as funcionalidades de cadastrar um novo item. 


![Passo 2](/img/passo2.png)

Aqui em cadastrar um novo item, vê-se que tem todos os campos necessários para o cadastro, desde Nome até se está disponível ou não. 
![Passo 3](/img/passo3.png)

Após preencher todos os campos, é só clicar no botão **Salvar**, que apresentará uma alerta na tela, informando se foi cadastrado ou se deu algum erro

![Passo 4](/img/passo4.png)

![Passo 5](/img/passo5.png)

Logo em seguida, a aplicação irá redirecionar para a listagem dos itens, com o novo item cadastrado na página.

![Passo 6](/img/passo6.png)

No qual o mesmo, consta **Nome** do item, **Preço**, **Quantidade em estoque** e **Se está disponível**. Além também de ter ações de **Atualizar** o item, **Ver** e **Excluir**.

**Atualizar**:  ao clicar nesse botão, será redirecinado para outra pagina, no qual você pode atualizar as informações do item.

![Passo 7](/img/passo7.png)

Assim que abre as informações do item, poderá alterar todas as informações e assim atualiza-las.
![Passo 8](/img/passo8.png)

**Ver**: Aqui é possível vizualizar as informações do item.

![Passo 9](/img/passo9.png)

Logo em seguida tem todas as informações do item, além também de poder atualizar e excluir o item.

![Passo 10](/img/passo10.png)

Ao adicionar vários itens, percebe-se que os itens estão ordenados em ordem de menor preço ao de maior preço.

![Passo 11](/img/passo11.png)


## Link para poder utilizar


 [Live Demo](https://gestao-de-estoque.vercel.app/) 
 
