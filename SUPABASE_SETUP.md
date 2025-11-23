# Configuração do Supabase

Para conectar este projeto ao Supabase e carregar os dados dinamicamente, siga os passos abaixo:

## 1. Criar Projeto no Supabase

1. Acesse [Supabase.com](https://supabase.com/) e faça login.
2. Crie um novo projeto ("New Project").
3. Anote a **Project URL** e a **API Key (anon/public)** que aparecerão nas configurações do projeto (Settings > API).

## 2. Configurar Variáveis de Ambiente

1. Na raiz do projeto, crie um arquivo chamado `.env.local` (se não existir).
2. Adicione as seguintes linhas, substituindo pelos seus dados:

```env
VITE_SUPABASE_URL=sua_url_do_projeto
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 3. Criar Tabelas e Dados Iniciais

1. No painel do Supabase, vá para o **SQL Editor**.
2. Clique em "New Query".
3. Copie todo o conteúdo do arquivo `supabase/schema.sql` deste projeto.
4. Cole no editor SQL do Supabase e clique em **Run**.

Isso criará as tabelas `days`, `itinerary_items` e `wishlist_items` e preencherá com os dados iniciais do roteiro.

## 4. Rodar o Projeto

Reinicie o servidor de desenvolvimento se estiver rodando:

```bash
npm run dev
```

O aplicativo agora tentará buscar os dados do Supabase. Se a conexão for bem-sucedida, você verá um pequeno ícone "Supabase" no cabeçalho do app. Se falhar ou não estiver configurado, ele continuará usando os dados estáticos locais.
