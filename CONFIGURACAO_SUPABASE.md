# 🚀 Como Configurar o Supabase

## Passo 1: Obter as Chaves do Supabase

1. **Acesse seu projeto no Supabase**:
   - Vá para [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Clique no seu projeto

2. **Encontre as configurações**:
   - No menu lateral, clique em **"Settings"** (Configurações)
   - Clique em **"API"**

3. **Copie as informações necessárias**:
   - **Project URL**: Algo como `https://xxxxxxxx.supabase.co`
   - **anon public key**: Uma chave longa que começa com `eyJ...`

## Passo 2: Configurar as Variáveis de Ambiente

1. **Crie um arquivo `.env`** na raiz do projeto (mesmo nível do `package.json`)

2. **Cole as informações** no arquivo `.env`:
```env
VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ IMPORTANTE**: Substitua os valores pelos seus dados reais do Supabase!

## Passo 3: Executar as Migrações do Banco

1. **No Supabase Dashboard**:
   - Vá para **"SQL Editor"** no menu lateral
   - Clique em **"New Query"**

2. **Cole o código SQL**:
   - Copie todo o conteúdo do arquivo `supabase/migrations/create_admin_system.sql`
   - Cole no editor SQL
   - Clique em **"Run"** para executar

## Passo 4: Configurar Autenticação (Para o Painel Admin)

1. **No Supabase Dashboard**:
   - Vá para **"Authentication"** → **"Users"**
   - Clique em **"Add user"**
   - Crie um usuário para você acessar o painel:
     - **Email**: seu-email@exemplo.com
     - **Password**: sua-senha-segura
     - Marque **"Auto Confirm User"**

## Passo 5: Testar a Configuração

1. **Reinicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

2. **Teste o site**:
   - Acesse a página principal
   - Faça login com qualquer email/senha
   - Os dados devem ser salvos no Supabase

3. **Teste o painel admin**:
   - Acesse `/admin` na URL
   - Faça login com o usuário que você criou
   - Você deve ver o painel com os dados

## 🔧 Verificar se Está Funcionando

### Verificar Tabelas:
1. No Supabase → **"Table Editor"**
2. Você deve ver as tabelas `clients` e `clicks`

### Verificar Dados:
1. Acesse o site e faça login
2. No Supabase → **"Table Editor"** → **"clients"**
3. Você deve ver os dados do cliente

### Verificar Painel:
1. Acesse `/admin`
2. Faça login
3. Você deve ver os clientes e estatísticas

## ❌ Problemas Comuns

### "Invalid API key":
- Verifique se copiou a chave correta
- Certifique-se que não há espaços extras

### "Project not found":
- Verifique se a URL está correta
- Certifique-se que o projeto está ativo

### "Permission denied":
- Execute as migrações SQL
- Verifique se as políticas RLS foram criadas

## 📞 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique o console do navegador (F12) para erros
2. Verifique se o arquivo `.env` está na raiz do projeto
3. Certifique-se que executou as migrações SQL
4. Reinicie o servidor (`npm run dev`)

**Tudo pronto!** 🎉