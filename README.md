# Abyss V2
<a target="_blank" href="https://heroku.com/deploy/?template=https://github.com/abyss-services/Deployable"><img alt="Deploy to Heroku" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg"></a>
<a target="_blank" href="https://replit.com/github/abyss-services/Deployable"><img alt="Run on Replit" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg"></a>
<a target="_blank" href="https://glitch.com/edit/#!/import/github/abyss-services/Deployable"><img alt="Remix on Glitch" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg"></a>
<a target="_blank" href="https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/abyss-services/Deployable"><img alt="Deploy to IBM Cloud" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/ibmcloud.svg"></a>
<a target="_blank" href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/abyss-services/Deployable"><img alt="Deploy to Amplify Console" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/amplifyconsole.svg"></a>
<a target="_blank" href="https://deploy.cloud.run/?git_repo=https://github.com/abyss-services/Deployable"><img alt="Run on Google Cloud" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/googlecloud.svg"></a>
<a target="_blank" href="https://railway.app/new/template?template=https://github.com/abyss-services/Deployable"><img alt="Deploy on Railway" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg"></a>
<a target="_blank" href="https://vercel.com/new/clone?repository-url=https://github.com/abyss-services/Deployable"><img alt="Deploy to Vercel" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg"></a>
<a target="_blank" href="https://app.netlify.com/start/deploy?repository=https://github.com/abyss-services/Deployable"><img alt="Deploy to Netlify" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/netlify.svg"></a>
<a target="_blank" href="https://app.koyeb.com/deploy?type=git&repository=github.com/abyss-services/Deployable"><img alt="Deploy to Koyeb" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg"></a>
<a target="_blank" href="https://render.com/deploy?repo=https://github.com/abyss-services/Deployable}"><img alt="Deploy to Render" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg"></a>
                                                    Abyss is a web browser that uses services workers and the tomphttp NPM package to serve html files. Our frontend consists of svelte files to reduce loading times.

Currently, Abyss supports the wide majority of websites, and we are working to support more each day.

We use the Ultraviolet backend developed by Titanium-Network to serve our files. The repo is here: https://github.com/titaniumnetwork-dev/Ultraviolet.

## Running the browser
Run these commands in your terminal in order to download and start Abyss V2.                            
Ubuntu (alternatively run the start.sh file):
```shell
git clone https://github.com/abyss-services/Deployable
npm install
git clone https://github.com/Abyss-Services/frontend
cd frontend
npm install
npm run build
cp -r ./public ../public
cd ..
npm start
```
Windows:
```shell
git clone https://github.com/abyss-services/Deployable
npm install
git clone https://github.com/Abyss-Services/frontend
cd frontend
npm install
npm run build
copy -r ./public ../public
cd ..
npm start
```
If you do not have git installed, run the following for Ubuntu, or install it here for Windows: https://git-scm.com/downloads.
```shell
sudo apt update && sudo apt upgrade
sudo apt install git
```
If you do not have nodejs installed, run the following for Ubuntu or install it for Windows here: https://nodejs.org/en.
```shell
sudo apt update && sudo apt upgrade
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs
```

## Configuration
The default port is port 3000. You may change the port by following the directions listed below.

Ubuntu Directions:
```shell
cp .env.example .env
nano .env
```
Edit the port there, then use Ctrl+S to save the file.

Windows Directions:
Rename .env.example to .env
Edit the port in the .env file.

## License

GNU Affero General Public License v3.0.

Read the license before modifying the browser.
