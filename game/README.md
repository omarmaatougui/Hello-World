# Mean-stack-game

#********* Created by **************

# ------- ABID YOUSSEF -----------
# ------- ZADDEM NADA ------------
# ------- MAATOUGUI OMAR ---------
# ------- AYOUNI MOLKA -----------


1 - il faut tout d'abord créer une base de données avec mongo sous le nom "word"
et créer une collection words.
        sudo mongo
        use word
        db.createCollection("words")
2 - importer le fichier out3.json qui se trouve dans le dossier db
        sudo mongoimport --db word --collection words --file out3.json
3 - installer les modules et lancer le serveur 
        npm install
        node server2.js

4 - lancer le client
        npm start


