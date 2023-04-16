CALL npm install
CALL rmdir frontend /s /q 
CALL rmdir public /s /q 
CALL git clone https://github.com/Abyss-Services/frontend 
CALL cd frontend 
CALL npm install 
CALL npm run build 
CALL move ./public ../public 
CALL cd .. 
