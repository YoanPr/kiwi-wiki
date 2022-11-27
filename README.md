Meilleur kiwi du monde ! kiwi ou wiki ? Je ne sais plus. Mais c'est le meilleur ! 

Instalation du backend:
cd backend
npm install
npx knex --knexfile=./src/knexfile.js  migrate:latest
Dans le fichier /src/knexfile.js modifier "filename: '../dev.sqlite3'" par "'./dev.sqlite3'"
npm run dev
