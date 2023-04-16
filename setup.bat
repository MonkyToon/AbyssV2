npm install
rmdir frontend /s /q
rmdir public /s /q
git clone https://github.com/Abyss-Services/frontend
cd frontend
npm install
npm run build
move ./public ../public
cd ..
