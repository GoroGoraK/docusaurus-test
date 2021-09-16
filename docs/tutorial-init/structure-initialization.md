---
sidebar_position: 1
---

# Structure du projet

Nous partirons from _scratch_, de ce fait, commençoez par créer **un nouveau projet _Maven_** dans votre répertoire de travail.

Plusieurs méthodes sont possibles pour créer un projet _Maven_ :

- [Spring Init](https://start.spring.io/) qui permet, via une interface simple, d'initialiser un projet Spring avec un large choix de dépendance.
- Utiliser un [archetype](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html) mvn spécifique à Spring Batch (comme par exemple, [celui-ci](https://mvnrepository.com/artifact/org.springframework.batch/spring-batch-archetypes)).
- A la main.

:::note
C'est cette dernière qui sera présentée ici, elle sera toute aussi rapide pour notre tutoriel.
:::

## Objectifs

L'object de cette partie sera de créer pas à pas une coquille de projet `Maven` fonctionnelle.

Voici la structure à réaliser :

```
📦tutorial-spring-batch
┣ 📂src
┃ ┣ 📂main
┃ ┃ ┣ 📂java
┃ ┃ ┃   🔸fr.goro.tutorial.spring.batch
┃ ┃ ┃    ┃  ℹ️ Répertoire racine du code source de l'application
┃ ┃ ┃    ┗ 📜TutorialSpringBatchApplication.java
┃ ┃ ┗ 📂resources
┃ ┃     ℹ️ Resource de l'application
┃ ┣ 📂test
┃ ┃ ┣ 📂java
┃ ┃ ┃   ℹ️ Code source des tests unitaires de l'application
┃ ┃ ┗ 📂resources
┃ ┃     ℹ️ Resource des tests unitaires (jeux de données,...)
┃ ┗ 📂it
┃   ┣ 📂java
┃   ┃   ℹ️ Code source des tests d'intégration
┃   ┗ 📂resources
┃       ℹ️ Resource des tests d'intégration (configuration Spring, ...)
┗ 📜pom.xml
```

## Création du projet

On commence par créer le répertoire du projet **depuis votre répertoire de travail** (workspace)

```shell
mkdir tutorial-spring-batch

cd tutorial-spring-batch
```

:::note Note

Vous pouvez appeler le dossier comme bon vous semble. Ici, ce sera *tutorial-spring-batch* !

:::

## Initialisation de la structure

Nous allons désormais créer les dossiers de base de notre application conformément à la [documentation](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html) de Maven

```shell
mkdir -p src/main/java src/main/resources src/test/java src/test/resources src/it/java src/it/resources
```

:::note Note

Note: Vous aurez remarqué l'utilisation de sous dossier `java`/`resources` dans le package `it`, contrairement à la documentation Maven que vous vous étes empressés de lire (:stuck_out_tongue_winking_eye:), nous verrons plus tard l'intêret et l'impact de cette action ultérieurement dans le TP.

:::

## Initialisation du fichier Project Object Model

Vous pouvez créer le fichier `pom.xml` à la racine de votre projet *tutorial-spring-batch* avec ce contenu :

```shell
vi pom.xml
```

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>fr.goro.tutorial</groupId>
    <artifactId>tutorial-spring-batch</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>tutorial-spring-batch</name>
    <description>Tutoriel pour Spring Batch</description>
    <properties>
        <java.version>11</java.version>
    </properties>
</project>
~~~

:::tip astuce

Sous l'outils d'édition `vi` 

- Le raccourci clavier **i** permet d'entrer en mode insertion.

- Le raccourci clavier **escap** permet de quitter le mode en cours.

- Le raccourci clavier **:wq!** permet d'enregistrer et quitter le fichier.

:::

Le pom est le plus minimaliste qui soit.

:::note Note

Ce pom est inspiré de la [documentation officielle Spring Batch](https://spring.io/guides/gs/batch-processing/) généré via [Spring Initializr](https://start.spring.io/).

:::

:::info Pour aller plus loin

Pour creuser le sujet du `pom.xml` (héritage, aggrégration, ...), la documentation officielle est par [ici](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html).

:::

## Création de la class Main

Pour finir, nous allons créer le fichier `TutorialApplication.java` dans un package respectant la [norme](https://docs.oracle.com/javase/specs/jls/se6/html/packages.html#7.7).

```shell
mkdir -p src/main/java/fr/goro/tutorial/spring/batch

vi src/main/java/fr/goro/tutorial/spring/batch/TutorialSpringBatchApplication.java
```

Le contenu du fichier Java sera le suivant :

```jsx title="fr/goro/tutorial/spring/batch/TutorialSpringBatchApplication.java"
package fr.goro.tutorial.spring.batch;

/**
 * Classe main de l'application.
 */
public class TutorialSpringBatchApplication {

    /**
     * Méthode principale minimaliste de l'application : point d'entrée.
     *
     * En l'état, l'application affiche Hello World et termine avec un code retour à zéro.
     *
     * @param args les arguments passé en paramétre de l'application.
     */
    public static void main(String[] args) {
        System.out.println("Hello world");
        System.exit(0);
    }
}
```

## Test de l'application

A cette étape, nous n'allons pas encore développer de test automatisé, néanmoins,
nous pouvons nous assurer que notre application fonctionne.

- Construction de l'application :
```shell
mvn clean install
```

```text {3} title="Résultat de la commande"
...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
...
```

- Lancement de l'application :
```shell
java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar
```

```text title="Résultat de la commande"
Hello world
```

## Conclusion

A cette étape, nous avons bien un projet java qui tourne, passons maintenant à la partie Spring Batch.
