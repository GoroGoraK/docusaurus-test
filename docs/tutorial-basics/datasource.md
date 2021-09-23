---
sidebar_position: 2
---

# DataSource

Suite à la lecture des _logs_ de traitement de votre premier batch, vous n'avez qu'une seule envie, c'est de comprendre le fonctionnement de cette _DataSource_ et ces fameuses _metadata_ :grin:.

Vous êtes au bon endroit :relaxed:.

## Objectif

L'objectif de cette partie sera de comprendre la configuration de _DataSource_ _Spring Batch_ via _Spring Boot_ et l'impact qu'à cette configuration sur le comportement de notre traitement.

Cette partie donnera des premiers éléments sur le modèle de données des metadatas utilisés par _Spring Batch_.

### Traitement cible

Le traitement cible change légèrement pour l'insertion en base de données du contenu du fichier texte en entrée.

```mermaid
stateDiagram-v2
  direction LR
  Traitement: Spring Batch Context
  [*] --> myFirstJob : 1
  state Traitement {
    direction LR
    JobTraitement:  Job Execution Context _
      state JobTraitement {
        direction LR
        myFirstJob --> myFirstStep : 2
        StepExecutionContext : Step Execution Context
        state StepExecutionContext {
          myFirstStep --> myFirstTasklet : 3
                    note right of myFirstTasklet 
              Log le contenu d'un fichier 
              dans la console dans la console
              <b>et insère en base de données</b>
          end note
        }
      }
    }
    myFirstJob --> [*] : 4
```

1. Lancement de notre _Job_ via _Launcher_ ou _Command Line_.
2. Lancement de notre _Step_ via notre _Job_.
3. Lancement de note _Tasklet_ via notre _Step_.
    1. Log dans la console.
    2. Insert dans la base de données.
4. Fin de traitement.

### Structure Physique

Voici la structure à atteindre lors de cette partie :

```{14,22}
📦tutorial-spring-batch
┣ 📂src
┃ ┣ 📂main
┃ ┃ ┣ 📂java
┃ ┃ ┃ ┗🔸fr.goro.tutorial.spring.batch
┃ ┃ ┃   ┃  ℹ️ Package racine du code source de l'application
┃ ┃ ┃   ┗🔸firstbatch
┃ ┃ ┃     ┃  ℹ️ Package racine de notre premier batch
┃ ┃ ┃     ┣🔸config
┃ ┃ ┃     ┃  ┃  ℹ️ Package contenant la définition des @Bean Spring, les classes à développer ici sont suffixées du mode Configuration (ou Config)
┃ ┃ ┃     ┃  ┣🔸step
┃ ┃ ┃     ┃  ┃  ┃  ℹ️ Package contenant la définition  des @Bean Step
┃ ┃ ┃     ┃  ┃  ┗ 📜FirstTaskletStepConfiguration.java
┃ ┃ ┃     ┃  ┣ 📜DatasourceConfiguration.java
┃ ┃ ┃     ┃  ┗ 📜FirstBatchConfiguration.java
┃ ┃ ┃     ┣🔸tasklet
┃ ┃ ┃     ┃  ┃  ℹ️ Package contenant la logique métier des tasklets.
┃ ┃ ┃     ┃  ┗ 📜FirstTasklet.java
┃ ┃ ┃     ┗ 📜TutorialSpringBatchApplication.java
┃ ┃ ┗ 📂resources
┃ ┃   ┃  ℹ️ Resources de l'application
┃ ┃   ┗ 📜 application.yml
┃ ┣ 📂test
┃ ┃ ┣ 📂java
┃ ┃ ┃  ℹ️ Code source des tests unitaires de l'application
┃ ┃ ┗ 📂resources
┃ ┃     ℹ️ Resources des tests unitaires (jeux de données,...)
┃ ┗ 📂it
┃   ┣ 📂java
┃   ┃   ℹ️ Code source des tests d'intégration
┃   ┗ 📂resources
┃       ℹ️ Resource des tests d'intégration (configuration Spring, ...)
┗ 📜pom.xml
```

## Préambule

Pour de comprendre l'intérêt de cette _datasource_, regardons le traitement cible un peu plus détaillé :

```mermaid
flowchart TB
  subgraph Traitement ["JVM"]
    direction TB
    subgraph TrtJava ["&nbsp;"]
      TutorialSpringBatchApplication ==>|1| JobLauncher
      subgraph SpringBatchContext ["Spring Batch Application Context"]
        subgraph JobContext ["Job Application Context"]
          Job -.- myFirstJob(myFirstJob)
          Job ==>|2| StepContext
          subgraph StepContext ["Step Application Context"]
            direction TB
            Step -.- myFirstStep(myFirstStep)
            Step ==>|3| Tasklet
            Tasklet -.- myFirstTasklet(myFirstTasklet)
          end
        end
        JobLauncher <-.-> JobRepository
        JobContext <-.-> JobRepository
        StepContext <-.-> JobRepository
      end
    end
    subgraph DataBase ["&nbsp;"]
      direction BT
      JobRepository <-.-> id3[(H2 - Embedded Database)]
    end
  end
  JobLauncher --> JobContext
  Start["Lanchement de l'application via Launcher ou Command Line"] -->|0| Traitement -->|4| End["Fin de traitement"]
```

0. Lancement de notre application Spring.
1. Lancement de notre _Job_ au sein de son contexte via le _JobLauncher_.
2. Lancement de notre _Step_ au sein de son contexte via notre _Job_.
3. Lancement de note _Tasklet_ via notre _Step_.
    1. Log dans la console.
    2. Insert en base de données.
4. Fin de traitement.

Tentons maintenant d'aller voir ce qu'il se cache derrière cette base de données.

## Configuration par défaut de la datasource Spring

Comme nous l'avons vu précédemment, _Spring Batch_ utilise par défaut une base de données _H2_ en mémoire.

:::caution Attention
Nous allons utiliser la console de la base de données H2, elle nous donnera accès à une console Web permettant d'accèder à nos données durant le _debug_ de nos traitements par exemple.

Pour pouvoir l'utiliser, nous devons ajouter la dépendance suivante au pom :

```xml		
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

C'est elle qui lancera le conteneur Web nécessaire pour l'accès à l'url de notre console _H2_ (http://localhost:8080/h2 ici en l'occurence).

Attention, néanmoins, en l'état, nous l'embarquerons pour le build final, ce qui est inutile, elle peut etre ajoutée à un profil _maven_ _dev_ ou utilisée uniquement en cas de besoin.
:::

Après l'ajout de la dépendance _spring-boot-starter-web_, nous pouvons voir ceci dans les logs :

```text {1,4,8}
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
o.apache.catalina.core.StandardService   : Starting service [Tomcat]
org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.52]
o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3124 ms
com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
o.s.b.a.h2.H2ConsoleAutoConfiguration    : H2 console available at '/h2-console'. Database available at 'jdbc:h2:mem:5576c7a2-3acb-4f63-bdac-40e738650027'
o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: H2
o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
```

Une base de données a été créée : `jdbc:h2:mem:5576c7a2-3acb-4f63-bdac-40e738650027`, une console est disponible sur un _context path_ vide d'un tomcat embarqué (_embedded WebApplicationContext_) à l'url `/h2-console`.

### Découverte de la console h2

Avec la configuration précédente, voyons ce qu'il se passe si nous mettons un point d'arret lors du traitement (disons, au moment du _return_ de la méthode _execute_ de la première _Tasklet_) et que nous relançons le batch en mode _Debug_.

Rendons-nous à cette url : [http://localhost:8080/h2-console](http://localhost:8080/h2-console/]) et nous nous retrouvons face à une console Web de connexion.

| ![h2-console](/img/datasource/h2_console.png) |
|:--:|
| <b>Console H2 configuré sur le path par défaut /h2-console - Login</b>|

Suivons notre configuration, et utilisons le user _sa_, avec un password vide (pensez à utiliser le bon nom de base de données issu des logs, dans l'exemple : `5576c7a2-3acb-4f63-bdac-40e738650027`, dans l'image : `springMetadata`).

| ![h2-console](/img/datasource/h2_admin.png) |
|:--:|
| <b>Console H2 Up</b>|

Nous avons désormais accès à une console web permettant de consulter les informations techniques de notre batch.

:::caution Attention
La console _H2_ étant hébergée sur un _tomcat_ embarquée par _Spring Boot_, elle ne sera disponible que lors du traitement batch. C'est pour cela qu'il est nécessaire de mettre un point d'arrêt pour s'y arrêter.
:::

### Découverte des _Metadata_ _Spring Batch_

Voici un extrait ci-dessous qui nous permettra de naviguer dans ce modèle technique :

| ![ERD-Metadata](/img/datasource/ERD_metadata.png) |
|:--:|
| __Image Credits - [Figure 35. Spring Batch Meta-Data ERD](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#metaDataSchema)__ |

#### BATCH_JOB_INSTANCE

Il s'agit de la table principale du modèle de données.

```sql
SELECT * FROM BATCH_JOB_INSTANCE;
```

| JOB_INSTANCE_ID | VERSION | JOB_NAME | JOB_KEY |
|-----------------|---------|----------| ----------|
|        1        |    0    | myFirstJob | d41d8cd98f00b204e9800998ecf8427e |

La table nous indique qu'un batch nommé _myFirstJob_ tourne, ou a tourné.

Nous noterons son _JOB_INSTANCE_ID_ (1, il s'agit d'une base mémoire, nous aurons toujours 1, néanmoins, si les metadata sont persitées, cet _id_ sera incrémenté).

#### BATCH_JOB_EXECUTION

Il s'agit de la table contenant les informations d'exécution de _Job_.

```sql
SELECT * FROM BATCH_JOB_EXECUTION;
```

| JOB_EXECUTION_ID | VERSION | JOB_INSTANCE_ID | CREATE_TIME | START_TIME | END_TIME | STATUS | EXIT_CODE | EXIT_MESSAGE | LAST_UPDATED | JOB_CONFIGURATION_LOCATION |
|------------------|---------|-----------------|-------------|------------|----------|--------|-----------|--------------|--------------|----------------------------|
|1 | 1 | 1 | 2021-09-13 19:03:14.702 | 2021-09-13 | 01:03:14.88 | null | STARTED | UNKNOWN | 2021-09-13 01:03:14.881 |null |

La table nous apprend que le _Job_ lié au _JOB_INSTANCE_ID_ 1 est en train de tourné, que son statut de fin d'exécution est indéfini (_STATUS_ = null && _EXIT_CODE_ = _UNKNWON_, notre point d'arrêt à stoppé temporairement l'exécution du _Job_).

#### BATCH_JOB_EXECUTION_PARAMS

Il s'agit de la table contenant les paramètres d'exécution.

```sql
SELECT * FROM BATCH_JOB_EXECUTION_PARAMS;
```

| JOB_EXECUTION_ID | TYPE_CD | KEY_NAME | STRING_VAL | DATE_VAL | LONG_VAL | DOUBLE_VAL | IDENTIFYING |
|------------------|---------|----------|------------|----------|----------|------------|-------------|

Il s'agit d'une table très importante, _Spring Batch_ s'appuiera dessus pour le rerun d'un batch déjà exécuté.

Le couple _KEY_NAME_ et _STRING_VAL_ fera office d'identifiant de batch si le boolean _IDENTIFYING_ est à true.

:::info
Nous verrons plus tard dans le tutoriel comment ajouter des paramètres d'exécution.
:::

#### BATCH_JOB_EXECUTION_CONTEXT

Il s'agit de la table de contexte d'exécution de Job.

```sql
SELECT * FROM BATCH_JOB_EXECUTION_CONTEXT;
```

| JOB_EXECUTION_ID | SHORT_CONTEXT | SERIALIZED_CONTEXT |
|------------------|---------------|--------------------|
| 1 | {"@class":"java.util.HashMap"} | null |

:::info

Nous verrons plus tard dans le tutoriel comment ajouter des paramètres d'exécution.

:::

#### BATCH_STEP_EXECUTION

L'ensemble des _Step_ lancées par les jobs.

```sql
SELECT * FROM BATCH_STEP_EXECUTION;
```

| STEP_EXECUTION_ID | VERSION | STEP_NAME | JOB_EXECUTION_ID | START_TIME | END_TIME | STATUS | COMMIT_COUNT | READ_COUNT | FILTER_COUNT | WRITE_COUNT | READ_SKIP_COUNT | WRITE_SKIP_COUNT | PROCESS_SKIP_COUNT | ROLLBACK_COUNT | EXIT_CODE | EXIT_MESSAGE | LAST_UPDATED |
|-------------------|-------- |-----------|------------------|------------|----------|--------|--------------|------------|--------------|-------------|-----------------|------------------|--------------------|----------------|-----------|--------------|--------------| 
|1	| 1	| myFirstStep | 1 | 2021-09-13 19:03:14.926 | null | STARTED | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | EXECUTING | 2021-09-13 01:03:14.927 |

La table nous indique qu'une _Step_ lié à notre _Job_ vu précédement (_JOB_EXECUTION_ID_ = 1) nommée _myFirstStep_ est en train de tourner (_STATUS_ = _STARTED_)

Cette _Step_ n'a aucun compteur différent de 0.

:::info

Nous verrons plus tard dans le tutoriel comment utiliser les compteurs fournis par les _metadata_ de _Spring Batch_.

:::

#### BATCH_STEP_EXECUTION_CONTEXT

Il s'agit de la table de context d'exécution de _Step_.

```sql
SELECT * FROM BATCH_STEP_EXECUTION_CONTEXT;
```

| STEP_EXECUTION_ID | SHORT_CONTEXT | SERIALIZED_CONTEXT |
|-------------------|---------------|--------------------|
| 1 | {"@class":"java.util.HashMap","batch.taskletType":"fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet","batch.stepType":"org.springframework.batch.core.step.tasklet.TaskletStep"} | null |

:::info
Nous verrons plus tard dans le tutoriel comment utiliser les compteurs fournis par les _metadata_ de _Spring Batch_.
:::

### Cas d'utilisation

Ce cas d'utilisation est relativement rare, il ne s'utilise qu'en cas de non utilisation de base de données annexes (pour stockage, ou récupération de données durant le batch), et de non stockage (à minima pour historisation) des données relatives au exécution de notre traitement.

## Configuration d'une datasource

### Représentation

```mermaid
flowchart TB
  subgraph Traitement ["JVM"]
    direction LR
    subgraph TrtJava ["&nbsp;"]
      TutorialSpringBatchApplication ==>|1| JobLauncher
      subgraph SpringBatchContext ["Spring Batch Application Context"]
        subgraph JobContext ["Job Context"]
          Job -.- myFirstJob(myFirstJob)
          Job ==>|2| StepContext
          subgraph StepContext ["Step Context"]
            direction TB
            Step -.- myFirstStep(myFirstStep)
            Step ==>|3| Tasklet
            Tasklet -.- myFirstTasklet(myFirstTasklet)
          end
        end
        JobLauncher <-.-> JobRepository
        JobContext <-.-> JobRepository
        StepContext <-.-> JobRepository
      end
    end
  end
  JobLauncher --> JobContext
  Start["Lanchement de l'application via Launcher ou Command Line"] -->|0| Traitement -->|4| End["Fin de traitement"]
  subgraph DataBase ["&nbsp;"]
    direction BT
      id3[(H2 - File Database)]
  end
  JobRepository <-.-> id3
  myFirstTasklet <-.-> id3
```

Contrairement à la configuration par défaut, ici, la base de données n'est plus en mémoire.

Aussi, suite à notre modification de _tasklet_, _myFirstTasklet_ accède (pas très proprement ^^) à notre base de données.

### Configuration YAML

Commençons par la configuration de la base de données spécifique à _Spring Batch_ :

```yaml title="application.yml"
spring:
  datasource:
    url: jdbc:h2:~/Documents/h2db/tutorialSpringBatchDb;INIT=CREATE TABLE IF NOT EXISTS info_traitement (message varchar)
    driverClassName: org.h2.Driver
    username: sa
    password: 
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
  h2:
    console:
      enabled: true
inputFile: file:/chemin/vers/fichier_a_traiter.txt
```

:::note
Notre base de données aura pour url une base de données H2 qui pointe vers un fichier local, que nous avons nommée springMetadata, le username par défaut est sa, aucun password.

L'ensemble de la configuration après le `INIT` sert à simuler la présence d'une info_traitement.
```mermaid
erDiagram
    INFO_TRAITEMENT {
        string message
   }
```
:::

### Configuration Java

NA/ :smile:

_Spring_ se charge de la configuration du `@Bean` _datasource_ tout seul, seules les informations présentent dans la variable de configuration `spring.datasource` du fichier `application.yml` seront nécessaires.

Néanmoins, nous allons modifier notre _tasklet_ pour lui faire écrire en base, alors préparons, le terrain :

```jsx
    /**
	 * Définition de notre première {@link Tasklet} de lecture de fichier.
	 * 
	 * @param directoryPath la {@link Resource} dont le path est issu du fichier de
	 *                      configuration.
	 * @param datasource    la datasource utilisée.
	 * @return notre première {@link Tasklet} configurée.
	 */
	@Bean
	public Tasklet myFirstTasklet(@Value("${inputFile}") final Resource directoryPath,
			final DataSource datasource) {
		return new FirstTasklet(directoryPath, datasource);
	}
```
### Utilisation d'une datasource dans la configuration

:::caution Attention
Ce code source n'est qu'un exemple le plus simple pour visualiser en base de données le résultat, il ne fait pas office de bon exemple.
:::

Nous allons simplement ajouter un attribut _DataSource_ et insérer notre contenu dans la base de données :

```jsx {7-10,16,18,21,27-28,37-43}
...
	/**
	 * Le fichier à traiter.
	 */
	private final Resource inputFile;

	/**
	 * Datasource de traitement.
	 */
	private final DataSource datasource;

    /**
     * Constructeur paramétré de MyFirstTasklet.
     *
     * @param inputFile  le fichier à traiter.
     * @param datasource la datasource de traitement.
     */
    public FirstTasklet(final Resource inputFile, final DataSource datasource) {
        Assert.notNull(inputFile, "Le fichier en entrée de la Tasklet ne peut être vide !");
        this.inputFile = inputFile;
        this.datasource = datasource;
    }

    /**
     * Méthode de traitement de {@link FirstTasklet}.
     *
     * Cette méthode logguera puis stockera en base de données le contenu du fichier
     * passé en paramétre.
     *
     */
    @Override
    public RepeatStatus execute(final StepContribution contribution, final ChunkContext chunkContext) throws Exception {
        final String message = Files.lines(inputFile.getFile().toPath()).collect(Collectors.joining("\n"));
    
        LOGGER.info(message);
    
        // Insertion en base de données.
        final PreparedStatement prepareStatement = datasource.getConnection()
            .prepareStatement("insert into info_traitement (message) values (?)");
        prepareStatement.setString(1, message);
        prepareStatement.executeUpdate();
    
        return RepeatStatus.FINISHED;
    }
```

:::tip Rappel :smile: Best Practice
Ne jamais utiliser d'annotation dans une classe de traitement. Pour un batch _Spring_, les annotations ne seront acceptées que dans la main class ou dans le package `config`.
:::

### Test de l'application

Avec cette configuration, si nous lançons notre batch, nous retrouvons ces informations dans les logs :

```text
o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2791 ms
com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
o.s.b.a.h2.H2ConsoleAutoConfiguration    : H2 console available at '/h2-console'. Database available at 'jdbc:h2:~/Documents/h2db/tutorialSpringBatchDb'
o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: H2
o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
```

Remettons un point d'arrêt dans la _Tasklet_ et relançons en mode _Debug_.

Oh ! Oh Oh Oh Oh ! ⚫

L'iDE ne s'est pas arrété dans le point d'arrêt, regardons les logs...

```text
o.s.b.a.b.JobLauncherApplicationRunner   : Running default command line with: [CommandLineJobRunner, fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration, myFirstJob]
o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=myFirstJob]] launched with the following parameters: [{}]
o.s.batch.core.job.SimpleStepHandler     : Step already complete or not restartable, so no action to execute: StepExecution: id=2, version=3, name=myFirstStep, status=COMPLETED, exitStatus=COMPLETED, readCount=0, filterCount=0, writeCount=0 readSkipCount=0, writeSkipCount=0, processSkipCount=0, commitCount=1, rollbackCount=0, exitDescription=
o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=myFirstJob]] completed with the following parameters: [{}] and the following status: [COMPLETED] in 52ms
```

:::caution Attention
Un _Job_ lancé avec les mêmes paramètres (ici, aucun paramètre) ne peut être relancé que s'il n'est pas à l'état _COMPLETED_ (notamment pour pouvoir relancer un batch _FAILED_ après correction des entrants par exemple).

Il est possible de le faire sur une base de données embarquée en mémoire car celle-ci est recréée à chaque lancement du batch.
:::

Ici, nous travaillons sur une base de données en local, vous pouvez supprimer le fichier _db_ créé au chemin défini dans l'`application.yml`.

Pour parer ce comportement, et puisque nous ne nous interesserons pas à au re-run dans cette partie du tutoriel, nous allons modifier le lancement de notre batch :

```jsx {5} title="Extrait de fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration.java"
...
@Bean
public Job myFirstJob(final JobBuilderFactory jobBuilderFactory, final Step myFirstStep) {
    return jobBuilderFactory.get("myFirstJob")
        .incrementer(new RunIdIncrementer())
        .start(myFirstStep)
        .build();
}
...
```

:::info
Nous utilisons ici un incrémenteur d'identifiant de metadata, ce qui nous permettra de relancer le batch avec les mêmes paramètres.
:::

Vous pouvez désormais supprimer vos point d'arrêt et relancer le batch autant de fois que vous voulez, il crééra autant d'instance de _Job_ en base de données.

### Alternative à la console H2

Désormais, nous avons un fichier _db_ qui stocke notre base de données H2, il est facile de paramétrer une vue pour accèder graphiquement aux données.

#### La vue Database Development

Cette vue est disponible sur _Eclipse EE 2021-06_, elle peut être installée via le MarketPlace sur d'autres versions : `Database Tools Platform (DTP) Plugin`. 

| __![DbeaverData](/img/datasource/dtp_config.png)__ |
|:--:|
| __Database Tools Plateform - Configuration__ |

| __![DbeaverData](/img/datasource/dtp_viewdata.png)__ |
|:--:|
| __Database Tools Plateform - View Data__ |

#### La vue DBEaver

DbEaver est un plugin disponible sur le MarketPlace.

| __![DbeaverData](/img/datasource/dbeaver_config.png)__ |
|:--:|
| __DbEaver - Configuration__ |

| __![DbeaverData](/img/datasource/dbeaver_viewdata.png)__ |
|:--:|
| __DbEaver - View Data__ |

Des deux, DBEaver est le seul à proposer un exécuteur de requête, ce qui peut être très utile.

:::danger
Lorsque vous vous connectez à la base de données via l'un de ces deux plugins, vous verrouillez la base de données. Pensez à systématiquement couper la connexion après avoir analysé les données.
:::

### Cas d'utilisation

Ce cas d'utilisation est, selon moi, un cas standard lorsque 
- l'on n'accède à aucune autre base de données **OU**
- l'on peut stocker les metadatas sur le schèma par défaut (généralement _public_) de la base de données utilisées pour nos traitements.

Dans le cas contraire (une base de données est utilisée, mais on ne peut pas y stocker nos metadata), il est possible de configurer d'autres datasource.

## Configuration d'une seconde datasource

### Configuration YAML

Nous allons modifier l'`application.yml` comme ci-dessous :

```yaml {12-17} title="application.yml
spring:
  batch: 
    jdbc:
      initialize-schema: always
  datasource:
    jdbcUrl: jdbc:h2:~/Documents/h2db/tutorialSpringBatchMetadataDb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  datasourceTraitement:  
    jdbcUrl: jdbc:h2:~/Documents/h2db/tutorialSpringBatchTraitementDb;INIT=CREATE TABLE IF NOT EXISTS info_traitement (message varchar)
    driver-class-name: org.h2.Driver
    username: sa
    password: 
inputFile: file:~/Documents/test_tuto_batch/fichier_a_traiter.txt
```

:::info
La propriété _datasourceTraitement_ est un nom défini arbitrairement, essayer d'être cohérent et parlant lors du nommage de celle-ci.
:::

### Configuration Java

La configuration d'une datasource via _Spring Boot_ est grandement simplifiée, ainsi, voici la définition de nos deux datasources :

```jsx
package fr.goro.tutorial.spring.batch.firstbatch.config;

import javax.sql.DataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * Classe de configuration des datasources.
 * 
 */
@Configuration
@EnableConfigurationProperties
public class DatasourcesConfiguration {

	/**
	 * Création de la datasource principale pour les metadata de Spring Batch.
	 * 
	 * @return la datasource principale.
	 */
	@Bean
	@Primary
	@ConfigurationProperties(prefix="spring.datasource")
	public DataSource datasource() {
	    return DataSourceBuilder.create().build();
	}
	
	/**
	 * Création de la seconde datasource pour les données de traitement.
	 * 
	 * @return la datasource secondaire.
	 */
	@Bean
	@ConfigurationProperties(prefix="spring.datasource-traitement")
	public DataSource secondDatasource() {
	    return DataSourceBuilder.create().build();
	}

}
```

:::info
- Il est important de préciser à _Spring Batch_ une `@Primary` _datasource_, c'est celle qui sera utilisé pour la création des metadata.

- Lors de l'utilisation de _@ConfigurationProperties_ (activée par _@EnableConfigurationProperties_), il est recommandé d'ajouter cette dépendance au pom :

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```
:::

### Utilisation des datasources

```jsx
    /**
	 * Définition de notre première {@link Tasklet} de lecture de fichier.
	 * 
	 * @param directoryPath la {@link Resource} dont le path est issu du fichier de
	 *                      configuration.
	 * @param secondDatasource    la datasource utilisée.
	 * @return notre première {@link Tasklet} configurée.
	 */
	@Bean
	public Tasklet myFirstTasklet(@Value("${inputFile}") final Resource directoryPath,
			@Qualifier("secondDatasource") final DataSource secondDatasource) {
		return new FirstTasklet(directoryPath, secondDatasource);
	}
```

:::note
Il est, à priori, indispensable d'utiliser un `@Qualifier` lorsqu'on utilise plusieurs datasources.
:::

### Test de l'application

| __![DbeaverData](/img/datasource/h2_double_datasource.png)__ |
|:--:|
| __DbEaver - View Data - Twice Datasources__ |

Nous avons bien nos deux _datasources_ attendues :
- tutorialSpringBatchMetadataDb contenant les _metadata_ de _Spring Batch_,
- tutorialSpringBatchTraitementDb contenant les données métiers de notre traitement.

## Conclusion

Nous venons de voir qu'il est assez simple de configurer des bases de données avec l'auto configuration de _Spring_, 
néanmoins, nous avons été incapable de relancer notre batch sans `IncrementerId`.

Afin de mieux comprendre ce point, nous allons nous pencher sur la table BATCH_JOB_PARAMETERS, et l'utilisation de paramètre passé au _Job_.