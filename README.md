# Présentation du projet:

*Back office de création de post à destination d’utilisateur d’une mutuelle. De l’IA et de la logique interne analyse les posts et les documents des utilisateurs pour leur associer des tags et pouvoir leur recommander les meilleurs posts*

**Le projet se compose de 2 parties différentes:**

- **Front-end**

    Le front est fait en vueJS 3 en Typescript. Nous utilisons tailwind pour le CSS ainsi que du SASS pour les éléments demandant du style plus poussé.

- **Back-end**

	Le back est fait à partir de NestJS utilisé avec du TypeScript. Nous utilisons PostGres pour la base de données. Nous utilisons Tesseract pour faire de l’OCR sur les documents uploadés. Nous utilisons aussi AWS S3 pour stocker les vidéos  et podcast, a cela s’associe AWS Transcribe pour analyser ces fichiers et en ressortir du texte que nous allons ensuite ajouter a des tags. Au niveau de l’intelligence du projet, nous calculons le score d’un tag pour chaque utilisateur en calculant de la manière suivante. 

**Calcul de l’importance du tag pour l’utilisateur:**

*exponential((356 - uploadDateDocument) / 365)*

C**alcul de l’importance du post pour l’utilisateur:** 

*SommeDesTagsDuPostEtDeLeurPriorite * ImportanceDesTagsPourUtilisateur*

## QuickStart:
### Initialisation:
Se rendre sur AWS:
- Créer un bucket S3 nommé hackaton-esgi dans le zone (Paris) eu-west-3
- Créer un user avec les accès:
    - AmazonS3FullAccess
    - AmazonTranscribeFullAccess
- Copier le **.env.exemple** en un **.env** dans luciole-back
- Créer une **accessKey** pour cet Users et remplir les champs du **.env**
- Vous pouvez ensuite faire un **docker compose up -d** à la racine du projet et aller sur http://localhost:3000/
