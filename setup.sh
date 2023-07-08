npm install
rm -rf frontend
rm -rf public
git clone https://github.com/Abyss-Services/frontend -b newyork1
cd frontend
npm install
npm run build
cp -r ./public ../public
cd ..
