# Exercice TF1

Ce projet a été fait dans le adre d'un exercice pour TF1.

## Exécuter ce projet

Après avoir télécharger ce projet, il faut dans un premier temps installer les dépendances avec
`npm install`, puis l'exécuter avec `npm start`.

## Choix de conceptions

### Librairie react-horizontal-scrolling-menu

J'ai utilisé cette librairie car elle simplifie grandement la création d'un contenaire où l'on peut faire défiler des éléments.

### Librairie material-ui

Cette librairie a été utilisé pour simplifier la création de boutons icônes.
J'ai choisi cette librairie car je l'ai déjà beaucoup utilisé dans divers projets, je sais donc qu'elle est simple à prendre en main, qu'elle comporte beaucoup de fonctionnalités intéressantes et qu'elle est très fiable.

### Gestion des erreurs

Pour ce projet, j'ai simplifié certains points et il faudrait gérer un peu plus d'erreurs dans le cadre d'une mise en production.
  - Gérer une plus grande quantité de données. Dans cet exercice, je limite les résultats à 20 occurences, dans la réalité, il faudrait réfléchir à si l'onprend tous les résultats, est-ce qu'il faudrait ajouter des filtres et si l'on recueille une grande quantité de données, comment gérer les potentiels problèmes de performance.
  - Gérer les potentielles erreurs de données. Dans cet exercice, j'affiche tous éléments que je reçois. Dans la réalité, il faudrait vérifier que ces donnéessont correctes. Si elles le sont que partiellement, comme par exempleune image manquante, est-ce qu'il faudrait quand même afficher le programme, quitte à éventuellement perturber l'utilisateur avec un texte alternatif ou une image générique, ou alors le bon choix serait peut-être de ne pas afficher le programme.
  - il faudrait se mettre d'accord sur le nombre maximum de caractères qu'un titre peut avoir pour ne pas nuire à l'ergonomie de l'interface
  - Améliorations possible : Lorsque l'on passe la souris un programme, si son titer est trop long, l'afficher en entier.
