---
sidebar_position: 1
---

# Tutorial Intro

Bienvenue à vous sur le tutoriel _Spring Batch_ !

Avant de parler tout de suite de technique (:unamused:), nous allons définir l'objectif global de ce tutoriel 
et nous assurer que que vous êtes prêt à en suivre les différentes étapes.

Puis nous aborderons théoriquement (:weary:) le fonctionnement des batchs _Spring_.

Enfin, nous serons prêt à mettre les mains dans le code :smiley:

:::info
Ce contenu s'appuie en grande partie sur la [documentation officielle de _Spring Batch_](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html).

N'hésitez pas à commenter, critiquer, améliorer, proposer des cas que vous aimeriez voir dans ce tutoriel en envoyant un mail [ici](mailto:gregory.lengagne@gmail.com?subject=[Tuto%20SpringBatch])
:::

## Objectif global

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

## Un peu de thérie...

### Pourquoi Spring Batch

Le framework _Spring Batch_ offre un cadre de développement axé sur le **traitement métier** plus ou moins complexe **d'un large volume de données**.

Son fonctionnement s'appuie sur différents outils qu'il convient de connaitre et d'apprendre à utiliser, 
c'est ce que nous allons explorer tout au long de ce tutoriel.

### Fonctionnement de Spring Batch

Afin de comprendre comment fonctionne _Spring Batch_, on peut s'appuyer sur ce schéma très simplifié :

| __![Spring Batch Diagram](/img/tutorial-introduction/spring_batch_diagram.png)__ |
|:--:|
| __Image Credits - [Figure 3. Batch Stereotypes](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#domainLanguageOfBatch)__ |

Un _JobLauncher_` lance **un** _Job_ qui s'appuie sur **une ou plusieurs** _Step_.

L'ensemble de ces éléments communiquent avec un _JobRepository_ qui stocke les informations de traitement (_metadata Spring Batch_) en base de données (embarquée par défaut).

#### JobLauncher

Le _JobLauncher_ est l'objet utilisé par _Spring_ pour lancer notre _Job_ 

Il sera auto configuré par l'annotation `@EnableBatchProcessing`, qu'on placera de préférence sur la _classe_ de configuration globale, ou sur la _classe_ contenant la méthode _main_.

#### Job

Le _bean Spring_ (annoté `@Bean`) _Job_ sera l'objet à configurer pour ordonnancer les étapes (_Step_) de notre traitement.

Un _Job_ est défini par 1..* _Step_.

#### Step

Le `@Bean` _Step_ sera l'objet à configurer pour définir un traitement.

On peut distinguer deux approches s'appuyant sur différents outils pour développer une _Step_ :

- Approche par _Tasklet_
  - Une tasklet représente une tâche bien définie (ex : Vérifier la présence, ou le contenu d'un dossier en entrée, ...)
  - Une _Step_ est composée d'une seule _Tasklet_
  - L'enchainement des traitements au sein d'une _Tasklet_ se fait les unes après les autres

- Approche par _chunks_
  - Traitement par lot (ex : X premières lignes, puis X lignes suivantes, ...)
  - Le traitement s'articule principalement autour de _Reader_, _Processor_, _Writer_

#### JobRepository

L'ensemble de ces outils propre à _Spring Batch_ s'appuie sur un _JobRepository_, il s'agit du _repository_ de lecture / écriture de la grappe de _metadata_ (grappe qu'on verra plus tard dans le tutoriel).
Il sera aussi auto configuré par l'annotation `@EnableBatchProcessing`

:::info Info
- Un glossaire expliquant chaque outils est disponible [ici](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#glossary).
:::

## Et c'est parti !

Nous allons pouvoir attaquer les choses sérieuses ! Vous pouvez commencer à dépiler les différentes parties de ce tutoriel.

:::caution Attention
Ce tutoriel s'appuie sur la documentation officielle de _Spring Batch_ et sur l'expérience relative d'une personne.
De ce fait, vérifiez toujours auprès de votre référent technique les pratiques en vigueur dans votre milieu de développement.
:::