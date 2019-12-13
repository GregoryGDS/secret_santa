DOCUMENTATION : 


Fonctionalités Front (fonctionalités accessibls avec des boutons et TERMINÉES): 

L'URL est composée de http://192.168.99.100: (par défaut)
                      http://localhost:      (remplacer avec selon la machine)
Technologies utilisées : html /ejs / js / jquery / ajax
Rafraîchissement manuel de la page requis afin de reset les valeurs présentes dans les div d'affichage.


FONCTIONNALITÉS USER :

    - Ajouter un utilisateur (Nom, groupe assigné avec liste dynamique basée sur les groupes en BDD) : create_a_user

    - Obtenir des données utilisateur via un ID entré en formulaire : get_a_user

    - Modifier le nom d'un utilisateur en passant son ID : update_a_user


FONCTIONNALITÉS GROUPES : 

    - Ajouter un nouveau groupe (Nom) : create_a_group

    - Voir les membres d'un groupe (Nom de chaque membre en fonction du nom de groupe retourné via une liste dynamique) : get_all_user_in_group (présent dans userController car plus simple à gérer dedans = id_user et nom_group étant présent dans les info user)


FONCTIONNALITÉS SOUHAITS :

    - Assigner un souhait à une personne via l'ID-Utilisateur : create_a_whish_from_user




Fonctionalitée Back (Les fonctions ont été créée mais nous n'avont pas eut le temps de les relier au front):

    - Affichage de tout les Users :	list_all_users

    - Effacer un User : delete_a_user

    - Afficher tous les groupes : get_all_group

    - Afficher le nom d'un groupe en fonction de son ID : get_a_group

    - Changer le nom d'un groupe : update_a_group

    - Supprimer un groupe : delete_a_group

    - Afficher un Wish en fonction de son ID : get_a_whish

    - Mettre à jour un Wish : update_a_whish

    - Supprimer un Wish : delete_a_whish

    - Afficher la liste des souhaits d'un User en fonction de ID User : get_list_whish_from_user



Fonctionalité presque implantée : 

    - Mélange des user d'un groupe (utilisé pour shuffleTotal) : shuffle
        Cete fonction est censé être utiliser par shuffleTotal, elle prend en paramètre une liste et la mélange de façon aléatoire.

    - Laison entre un User et son secret-santa : shuffleTotal
        Cette fonction est censé parcourir chaque Group et grace à shuffle, les mélanger puis pour chaque User de ce Group, elle lui affecte le User de l'indice suivant en tant que secret santa (qui correspond à un element de User dans la BDD)