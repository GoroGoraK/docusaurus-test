---
sidebar_position: 1
---

# Tutorial Intro

Bienvenue à vous sur le tutoriel _Spring Batch_ !

Avant de parler tout de suite de technique (:unamused:), nous allons définir l'objectif global de ce tutoriel et nous assurer que que vous êtes prêt à suivre les différentes étapes de ce tutoriel.

Puis nous aborderons théoriquement (:weary:) le fonctionnement des batchs _Spring_.

:::info
Ce contenu s'appuie en grande partie sur la [documentation officielle de _Spring Batch_](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html).

N'hésitez pas à commenter, critiquer, améliorer, proposer des cas que vous aimeriez voir dans ce tutoriel en envoyant un mail [ici](mailto:gregory.lengagne@gmail.com?subject=[Tuto%20SpringBatch])
:::

## Objectifs

L'objectif global de ce tutoriel est de présenter le fonctionnement, ainsi qu'un ensemble de bonne pratique autour, du framework _Spring Batch_.

Pour cela, nous avoncerons pas à pas sur différents traitements que nous ferons évoluer au fil des sections de ce tutoriel.

Pour cette partie d'introduction, nous nous contenterons que d'un minimum de théorie :smiley:.

## Pré-requis

:::caution Attention
- Vous disposez d'**un poste de développement** _Java_ récent (**IDE** (**_integrated development environment_**) : [_Eclipse_](https://www.eclipse.org/downloads/) / [_IntelliJ_](https://www.jetbrains.com/idea/download/?fromIDE=), [_Maven_](https://maven.apache.org/download.cgi?Preferred=ftp://ftp.osuosl.org/pub/apache/)) **correctement configuré** (variables d'environnement ou IDE configuré pour l'utilisation de maven et java).

- Une connaissance des basiques **_Java_** est primordiale (8+).

- Une connaissance des basiques de l'outils **_Maven_** est nécessaire (3.8.X+).

- Une connaissance des concepts objets **_Spring_** est souhaitable.
:::

## Concept de base

### Pourquoi Spring Batch

Le framework _Spring Batch_ offre un cadre de développement axé sur le traitement métier plus ou moins complexe d'un **large volume** de données.

Son fonctionnement s'appuie sur différents outils qu'il convient de connaitre, c'est ce que nous allons explorer tout au long de ce tutoriel.

### Fonctionnement de Spring Batch

Afin de comprendre comment fonctionne _Spring Batch_, on peut s'appuyer sur ce schéma très simplifié :

| __![Spring Batch Diagram](/img/tutorial-introduction/spring_batch_diagram.png)__ |
|:--:|
| __Image Credits - [Figure 3. Batch Stereotypes](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#domainLanguageOfBatch)__ |

Un _JobLauncher_` lance **un** _Job_ qui s'appuie sur **une ou plusieurs** _Step_.

L'ensemble de ces éléments communiquent avec un _JobRepository_ qui stocke les informations de traitement (_metadata Spring Batch_) en base de données (embarquée par défaut).

#### JobLauncher

Le _JobLauncher_ est l'objet utilisé par _Spring_ pour lancer notre _Job_, il sera auto configuré par l'annotation `@EnableBatchProcessing`.

#### Job

Le _bean Spring_ (annoté `@Bean`) _Job_ sera l'objet à configurer pour ordonnancer les étapes (_Step_) de notre traitement.

Un _Job_ est défini par 1..* _Step_.

#### Step

Le `@Bean` _Step_ sera l'objet à configurer pour définir un traitement.

On peut distinguer deux approches s'appuyant sur différents outils pour développer une _Step_ :

- Approche par _Tasklet_
  - Une tasklet représente une tâche bien défini (ex : Vérifier un dossier, lire un fichier, ...)
  - Une _Step_ est composée d'une seule _Tasklet_
  - L'enchainement des traitements au sein d'une Tasklet se fait les unes après les autres

- Approche par _chunks_
  - Traitement par lot (ex : X premières lignes, puis X lignes suivantes, ...)
  - Le traitement s'articule principalement autour de _Reader_, _Processor_, _Writer_

#### JobRepository

L'ensemble de ces outils propre à _Spring Batch_ s'appuie sur un _JobRepository_, il s'agit du _repository_ de lecture / écriture de la grappe de _metadata_ (grappe qu'on verra plus tard dans le tutoriel).

:::info Info
- Un glossaire expliquant chaque outils est disponible [ici](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#glossary).
:::

## Sujets abordés

- Initialisation : Création d'un premier batch `Spring`
  
  - Structure du projet : Création d'une application `Java` avec `Maven`.
  
  - Configuration Spring : Chargement du context `Spring`.
  
- Premier batch : Mise en place d'un premier batch `Spring` composé d'une `Tasklet`.

  - Mon premier `Job`

    - Configuration Spring : Découverte des `Bean` Spring Batch :
      - `Tasklet` : Création et configuration de la première `Taklet`.
      - `Step` : Configuration de la première `Step` composée de notre première `Tasklet`.
      - `Job` : Configuration du premier `Job` composé de notre première `Step`.
  
    - Testing : Ajout de test `JUnits`
      - Test Unitaire (TU) : Ajout de test sans contexte `Spring`.
      - Test d'Intégration (TI) : Ajout de test avec contexte `Spring`.

- Traitement par lot : Ajout d'un traitement de fichier.

  - DataSource : Définition basique d'une base de données
    - Mono DataSource
    - Multi DataSource

  - Ajout d'un traitement par lot (`Chunck`) au batch
    - Traitement d'un fichier `XML`

- Listener : Ajout de log, vérification de traitement

  - JobListener
    - Traitement pré-batch
    - Traitement post-batch

  - StepListener
    - Vérification de traitement
    - Traitement des erreurs
    - 
- Traitement des erreurs : Amélioration du premier batch

  - Configuration _Job_ / _Step_

  - Découverte des listeners

  - Filtre des erreurs

  - Politique de relance des batchs

  - Paramètres du batch / `JobParameter`
    - Définition de paramètres d'entrée
    - Passage d'information dans les paramètres du Job

Nous allons pouvoir attaquer les choses sérieuses ! Vous pouvez commencer à dépiler les différentes parties de ce tutoriel.

:::caution Attention
Ce tutoriel s'appuie sur la documentation officielle de _Spring Batch_ et sur l'expérience relative d'une personne.
De ce fait, vérifiez toujours auprès de votre référent technique les pratiques en vigueur dans votre milieu de développement.
:::