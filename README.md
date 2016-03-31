# ShopExplora Cloud Project - Amazon Web Service

##Install NodeJs

curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -

yum -y install nodejs


##Download Source Code from Github

wget --no-check-certificate https://github.com/dineshtechnology/shopexplora/tarball/master -O - | tar xz

##Rename the downloaded folder for easy access

mv mv [dineshtechnology-shopexplora-*****/] shopexplora

##Setup NPM Packages

npm install


##Setup Forever 

npm install forever -g


##Setup Forever service

npm install forever-service -g


##Setup NodeJs App as a service

sudo forever-service install shopexplora

## Remover forever service
sudo forever-service delete shopexplora

##Service Operations

- sudo service shopexplora start 
- sudo service shopexplora stop
- sudo service shopexplora restart
- sudo service shopexplora status
