Elementos html que estão entro de um flex container (filhos) são chamados de flex items.
Podemos manipular várias propriedades tanto no container pai quanto nos filhos
```css
/* Tornando um container flex: */
display: flex;

/* Direção dos elementos: */
flex-direction: row, row-reverse, column, columns-reverse ...

/* quebra linha */
flex-wrap: nowrap, wrap,wrap-reverse ...

/* junção dos dois anteriores: */
flex-flow: row, wrap
```

Alinhando itens dentrode um container flexbox:

```css
/* Alinha itens de acordo com a direção: */
justify-content: center, space-between, space-arround... ;

/* Alinha itens de acordo com cross-axis: */
align-items: stretch, flex-start ... ;

/* Alinha itens de acordo ao cross-axis */
align-content: stretch,  space-between, space-arround ... ;

```