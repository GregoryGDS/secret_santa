## URL
```
127.0.0.1:3000
```

## Launch docker
```
docker-compose up
```

## Access to docker
```
docker exec -ti Nom_Container bash
```

## Voir tous les ports en écoute
lsof -i -P -n

## Tuer un processus avec son PID
kill -9 PID


Projet :
Groupe de 4 et un groupe de 3.
Si il n'y a plus de grèves, je ferais une soutenance le vendredi apres-midi. Sinon ce sera le projet à rendre pour vendredi 17h max.

Le projet porte sur la création d'une application pour gérer les secret santa.
- L'application doit avoir :
- L'ajout d'un groupe d'utilisateurs (CRUD)
- L'ajout d'utilisateurs (CRUD) lié a un groupe
- Affecter un utilisateur à un autre utilisateur du même groupe de manière aléatoire (personne à qui elle doit offrir un cadeau)
- Réalisation d'un front en HTML,CSS avec des appels à l'api en JS ou jQuery (utilisation d'un framework comme react ou angular seulement si vous maîtrisez celui-ci)

FRONT NON OPTIONNEL

Bonus : ajout d'authentification par JWT
Bonus : ajout d'appel vers une api externe (amazon par exemple)

Vous devrez me fournir un git bien gérer (Gitflow) et une collection postman si vous n'avez pas le temps de finir votre front (le front est obligatoire !). Un docker prêt à l'emploi est un plus

Vous m'enverrez votre git (front, back et docker), ainsi qu'un document texte expliquant simplement votre projet (votre organisation, qui à fait quoi, vos difficulté, etc) par mail sur jacques.atacan@capyweb.fr (une personne par groupe).
