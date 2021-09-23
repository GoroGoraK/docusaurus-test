---
sidebar_position: 3
---

# Paramètres de Job

## Objectif

L'objectif de cette partie sera de comprendre comment un traitement est identifié par _Spring Batch_ 
au travers de ses metadata et plus précisément, sur la gestion et l'utilisation de ses paramétres d'appel. 

### Traitement cible

Le traitement cible reste identique à la partie précédente, nous allons juste étudier le fonctionnement des paramètres _Spring Batch_.

### Structure physique

NA/

## Préambule

TODO Rappel de la table JOB PARAM et IDENTIFY

Avant de continuer l'exploration, retirez l'incrémenteur d'identifiant de notre _Job_.

## Ajout de paramètre d'entrée

Comme nous venons de le voir, un traitement batch est identifié par un ou plusieurs paramètres marqué comme étant un identifiant unique de traitement.

### Paramètres identifiant

### Paramètre non identifiant

## Redéfinition des paramètres de Job programmatiquement

TODO Redévelopper un commandLineRunner

## Accès aux paramètres de Job

TODO ${jobParameters#}

## Conclusion

Nous avons vu comment identifier un traitement _Spring Batch_, et gérer le contenu de cet identifiant.