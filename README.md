# coding-project-template

--Project set up
git clone https://github.com/hmartinot13-a11y/fullstack-capstone-project.git

cd fullstack-capstone-project

-- To access MongoDB CLI
//mongosh mongodb://root:ni6VWAfyx6YDGDLOBnSKNTQc@172.21.20.147:27017

--créer le dump 
//mongodump --uri="mongodb://root:ni6VWAfyx6YDGDLOBnSKNTQc@172.21.20.147:27017" --out=/home/project/fullstack-capstone-project/mongodump

--restaurer la db
//mongorestore --drop /home/project/fullstack-capstone-project/mongodump
mongorestore --uri="mongodb://root:ni6VWAfyx6YDGDLOBnSKNTQc@172.21.20.147:27017" --drop /home/project/fullstack-capstone-project/mongodump