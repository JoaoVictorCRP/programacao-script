# Programação Script
Este é o repositório da matéria de programação script, com o professor Leonardo Raiz.
Nela aprenderemos frameworks modernos para o desenvolvimento de aplicações web.

---

## Para rodar o projeto

1. Acesse o diretório da aplicação.
-  O conteúdo das primeiras aulas estão em `/0-introducao-ao-next/first-app`. Para acessar, utilize o comando

```bash
    cd ./0-introducao-ao-next/first-app
```

2. Instale as dependências

```bash
    npm install
```

Após a instalação, basta rodar o projeto:

3. Rode o projeto (em modo de desenvolvimento)

```bash
    npm run dev
```

---

## Aprendizados

### Estilização
- Para que o css seja importado corretamente dentro de um único componente específico devemos incluir a extensão `.module.css`

### Renderização Condicional
- É possível realizarmos um componente de maneira condicional através da criação de um componente que verifica o estado de uma variável, este componente pode retornar um componente `children`, ou então null.
- Ver exemplo em `1-orientacao-a-objetos/render`.