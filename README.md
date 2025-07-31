# Angular 20 + NestJS 11 API con Azure Entra ID y OBO

## Instalación

```bash
# Backend
cd backend
cp .env.template .env
npm install
npm run start

# Frontend
cd frontend
npm install
npm run start
```

## Flujo

- Angular realiza login con Azure Entra ID.
- Usa token para llamar a API NestJS protegida.
- NestJS usa OBO para autenticarse ante otros recursos.
