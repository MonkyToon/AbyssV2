# Abyss V2

Abyss is a web browser that uses services workers and the tomphttp NPM package to serve html files. Our frontend consists of svelte files to reduce loading times.

Currently, Abyss supports the wide majority of websites, and we are working to support more each day.

We use the Ultraviolet backend developed by Titanium-Network to serve our files. The repo is here: https://github.com/titaniumnetwork-dev/Ultraviolet.

## Running the browser
Run these commands in your terminal in order to download and start Abyss V2.

```shell
git clone https://github.com/abyss-services/Deployable
npm install
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
