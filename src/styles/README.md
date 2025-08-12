# Organização de Estilos

## Estrutura

```
src/styles/
├── GlobalStyles.js   # Estilos globais (reset, variáveis CSS, etc.)
├── theme.js          # Tema com cores, espaçamentos, etc.
└── README.md         # Esta documentação
```

## Padrões de Organização

### 1. **Styled Components** (Recomendado)
- ✅ Use styled-components para estilos específicos de componentes
- ✅ Mantém o CSS junto com o componente
- ✅ Evita conflitos de nomes de classes

### 2. **Componentes Compartilhados**
- ✅ Crie componentes reutilizáveis em `src/components/shared/`
- ✅ Evite duplicação de código
- ✅ Exemplo: `Logo.jsx`, `HeaderFooter.jsx`

### 3. **Estilos Globais**
- ✅ Use `GlobalStyles.js` para reset CSS e estilos base
- ✅ Defina variáveis CSS globais aqui

### 4. **Tema**
- ✅ Use `theme.js` para centralizar cores, espaçamentos, etc.
- ✅ Facilita mudanças de design em todo o projeto

## Quando Usar Cada Abordagem

### **Styled Components** (Principal)
- Estilos específicos de componentes
- Estados (hover, focus, etc.)
- Responsividade específica

### **GlobalStyles**
- Reset CSS
- Estilos base (body, html, etc.)
- Variáveis CSS globais

### **Tema**
- Cores do projeto
- Espaçamentos padrão
- Breakpoints
- Sombras

## Exemplos de Uso

```jsx
// Componente com styled-components
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
`;

// Usando o tema
<ThemeProvider theme={theme}>
  <Button>Clique aqui</Button>
</ThemeProvider>
```
