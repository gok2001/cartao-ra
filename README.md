# Cartão Profissional em Realidade Aumentada

Projeto da atividade de Realidade Aumentada usando **MindAR + A-Frame + Image Tracking**.

## Estrutura

- `index.html` — cena WebAR
- `css/style.css` — interface
- `js/app.js` — mensagens de estado do tracking
- `assets/images/cartao.png` — cartão usado como target
- `assets/targets/targets.mind` — **gerar no compilador do MindAR**
- `docs/testes-tracking.md` — registro dos testes

## Gerar o target `.mind`

O arquivo `.mind` não pode ser criado manualmente como texto: ele contém os dados de features extraídos da imagem.

1. Abra o Image Target Compiler do MindAR:
   https://hiukim.github.io/mind-ar-js-doc/tools/compile/
2. Envie `assets/images/cartao.png`.
3. Inicie a compilação.
4. Confira a visualização dos pontos/features.
5. Baixe `targets.mind`.
6. Coloque o arquivo em:
   `assets/targets/targets.mind`

A documentação do MindAR explica que a compilação pré-processa a imagem e extrai pontos de interesse usados posteriormente para detectar e rastrear o target.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `cartao-ra`.
2. Envie todos os arquivos deste projeto.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Salve.
6. Abra a URL HTTPS fornecida pelo GitHub Pages no celular.
7. Permita a câmera.
8. Aponte para o cartão.

## Observação

O GitHub Pages precisa servir o projeto por HTTPS para que o navegador possa utilizar a câmera normalmente.
