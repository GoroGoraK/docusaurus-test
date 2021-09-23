---
sidebar_position: 5
---

# Profile Spring

:::danger
Cette partie n'est pas liée à _Spring Batch_, mais au framework _Spring_, le framework permet de gérer différent profile au sein d'un même projet.
L'utilisation de cette fonctionnalité peut s'avérer très utile lors des développements ou reproduction d'anomalie en locale.
:::

## Objectifs

L'objectif de cette partie sera d'aborder le sujet des profiles _Spring_ en mettant en place un profile de développement.

```
📦tutorial-spring-batch
┣ 📂src
┃ ┣ 📂main
┃ ┃ ┣ 📂java
┃ ┃ ┃ ┗🔸fr.goro.tutorial.spring.batch
┃ ┃ ┃   ┃  ℹ️ Package racine du code source de l'application
┃ ┃ ┃   ┗🔸firstbatch
┃ ┃ ┃     ┃  ℹ️ Package racine de notre premier batch 
┃ ┃ ┃     ┣🔸config
┃ ┃ ┃     ┃  ┃ ℹ️ Package contenant la définition des @Bean Spring, les classes à développer ici sont suffixées du mode Configuration (ou Config)
┃ ┃ ┃     ┃  ┣🔸step
┃ ┃ ┃     ┃  ┃  ┃ ℹ️ Package contenant la définition  des @Bean Step
┃ ┃ ┃     ┃  ┃  ┗ 📜FirstTaskletStepConfiguration.java
┃ ┃ ┃     ┃  ┗ 📜FirstBatchConfiguration.java
┃ ┃ ┃     ┣🔸tasklet
┃ ┃ ┃     ┃  ┃ ℹ️ Package contenant la logique métier des tasklets.
┃ ┃ ┃     ┃  ┗ 📜FirstTasklet.java
┃ ┃ ┃     ┗ 📜TutorialSpringBatchApplication.java
┃ ┃ ┗ 📂resources
┃ ┃   ┃ ℹ️ Resources de l'application
┃ ┃   ┣ 📜application.yml
┃ ┃   ┗ 📜application-dev.yml
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

### Préambule

La structure de package présentée ici n'est qu'un exemple, il convient de l'adapter en fonction des clients / besoin.

On retrouve dans le code source (`src/main/java`) deux sous packages principaux :

- config 
  - Il contiendra uniquement des méthodes permettant la définition de _@Bean_ _Spring_
  - Il pourra contenir des fichiers suffixés de _Configuration_ (ou _Config_) pour la définition des @Bean et _Properties_ (ou _Property_) pour la définition d'objet de propriétés définies dans l'_application.yml_
  - Il ne contiendra aucune logique métier, uniquement de la définition de _@Bean_ / properties.
  - On s'appuiera autant que possible sur des _class_ _Spring_ afin de minimiser le code source à développer au sein des autres _package_

- tasklet
  - Il contiendra uniquement le développement métier de nos tasklets.
  - Une tasklet implémente l'interface _Spring_ _Tasklet_

Nous découvrirons d'autres _package_ dans les différentes parties du tutoriel.

### Configuration YAML / Bundle (properties)

Commençons par la configuration YAML. Nous allons y déclarer le chemin vers un fichier à lire.

```yaml title="application.yml"

inputFile: "/chemin/vers/fichier/a/lire.txt"

```

Une fois le fichier créé et correctement alimenté (mettre le chemin d'un fichier texte existant), nous allons pouvoir créer notre `Tasklet`.

### Première Tasklet

:::info

- Spring charge automatiquement les propriétés déclarées dans application.yml ou application.properties.
- Le logger utilisé sera celui par défaut ([logback](https://logback.qos.ch/manual/introduction.html) : `org.slf4j.Logger`), de ce fait, aucune configuration ne sera nécessaire.

:::

:::note Détail pour la réalisation du TP

- La tasklet lira le contenu d'un fichier (pensez à un attribut de type `Resource`) et le logguera en info (par défaut, dans la sortie standard : notre bonne vieille console !).

- Notre tasklet devra implémenter l'objet Spring Batch `Tasklet`, vous pouvez vous inspirer de la [documentation officielle](partie Tasklet)[https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#exampleTaskletImplementation]].

:::

<details>
<summary>
<a class="btnfire small stroke"><em class="fas fa-chevron-circle-down"></em>Voir la soluce</a>
</summary>

```jsx title="fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet.java"

package fr.goro.tutorial.spring.batch.firstbatch.tasklet.;

import java.nio.file.Files;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.core.io.Resource;
import org.springframework.util.Assert;

/**
 * Classe Première Tasklet, elle ne fera que logguer le contenu d'un fichier via log4j.
 */
public class FirstTasklet implements Tasklet {

    /**
     * Logger Slf4j/Logback (logger par défaut) de la classe {@link FirstTasklet}.
     */
    private static Logger LOGGER = LoggerFactory.getLogger(FirstTasklet.class);

    /**
     * Le fichier à traiter.
     */
    private final Resource inputFile;

    /**
     * Constructeur paramétré de MyFirstTasklet.
     *
     * @param inputFile le fichier à traiter.
     */
    public FirstTasklet(final Resource inputFile) {
    	Assert.notNull(inputFile, "Le fichier en entrée de la Tasklet ne peut être vide !");
        this.inputFile = inputFile;
    }

    /**
     * Méthode de traitement de {@link FirstTasklet}.
     *
     * Cette méthode logguera uniquement le contenu du fichier passé en paramétre.
     *
     */
    @Override
    public RepeatStatus execute(final StepContribution contribution, final ChunkContext chunkContext) throws Exception {
        LOGGER.info(Files.lines(inputFile.getFile().toPath()).collect(Collectors.joining("\n")));
        return RepeatStatus.FINISHED;
    }
}

```

</details>

### Première Step

:::note Détail pour la réalisation du TP

- Création d'un `@Bean` de type `Step` ([Documentation officielle](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#configuringAStep)).
- Création d'un `@Bean` de type `Tasklet`.

:::

:::tip Injection d'une Resource

- Le @Value("${maVariabke}") pour l'injection d'une resource sera utile.

:::

<details>
<summary>
<a class="btnfire small stroke"><em class="fas fa-chevron-circle-down"></em>Voir la soluce</a>
</summary>

```jsx title="fr.goro.tutorial.spring.batch.firstbatch.config.step.FirstTaskletStepConfiguration.java"

package fr.goro.tutorial.spring.batch.firstbatch.config.step;

import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

import fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet;

/**
 * Classe de configuration de notre première {@link Step} composée d'une {@link Tasklet} {@link FirstTasklet}.
 *
 */
@Configuration
public class FirstTaskletStepConfiguration {

	/**
	 * Définition de la step de lecture de fichier.
	 *
	 * @param stepBuilderFactory la factory de construction de {@link Step}.
	 * @param myFirstTasklet notre première {@link Tasklet} de lecture de fichier.
	 * @return notre première {@link Step} composé de notre première {@link Tasklet}.
	 */
    @Bean
    public Step myFirstStep(final StepBuilderFactory stepBuilderFactory, final Tasklet myFirstTasklet) {
        return stepBuilderFactory
                .get("myFirstStep")
                .tasklet(myFirstTasklet)
                .build();
    }

    /**
     * Définition de notre première {@link Tasklet} de lecture de fichier.
     *
     * @param directoryPath la {@link Resource} dont le path est issu du fichier de configuration.
     * @return notre première {@link Tasklet} configurée.
     */
    @Bean
    public Tasklet myFirstTasklet(@Value("${inputFile}") final Resource directoryPath) {
        return new FirstTasklet(directoryPath);
    }

}

```

</details>

### Premier Job

:::danger Interdit

- Il s'agit d'une partie "Configuration", aucune logique métier ne doit être présente, on n'utilise que des objets `Spring Batch` pour définir nos `@Bean`.

:::

:::note Détail pour la réalisation du TP

- Création d'un `@Bean` de type `Job` ([Documentation officielle](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#configuringAJob)).

:::

:::info Info

- Il s'agit ici de la classe principale de configuration de notre batch, nous conviendrons d'ajouter l'`@EnableBatchProcessing` permettant entre autre la configuration du JobRepository nécessaire au fonctionnement de `Spring Batch` ici.

:::

<details>
<summary>
<a class="btnfire small stroke"><em class="fas fa-chevron-circle-down"></em>Voir la soluce</a>
</summary>

```jsx title="fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration.java"

package fr.goro.tutorial.spring.batch.firstbatch.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration global du batch.
 */
@Configuration
@EnableBatchProcessing
public class FirstBatchConfiguration {

    /**
     * Définition de notre {@link Job}.
     *
     * @param jobBuilderFactory la factory de construction de {@link Job}
     * @param myFirstStep notre première {@link} step composée de notre première tasklet.
     * @return notre premier {@link Job} Spring Batch.
     */
    @Bean
    public Job myFirstJob(final JobBuilderFactory jobBuilderFactory, final Step myFirstStep) {
        return jobBuilderFactory.get("importUserJob")
                .start(myFirstStep)
                .build();
    }

}

```

</details>

### Configuration Java

## Lancement de l'application

### Méthode de lancement

Plusieurs méthode de lancement sont possibles :

#### Terminal

Via un terminal, depuis votre workspace, vous pouvez taper :

- Lancement de l'application :

```shell
java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar
```

De cette manière, `Spring` lancera l'ensemble des `Job` qu'il trouvera.

Pour les besoins du TP, nous utiliserons le `CommandLineRunner` proposé par `Spring`, il nous permettra de lancer notre batch en précisant le fichier de configuration `Java` utilisé.
[La documentation officiel de `Spring` à ce sujet](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#runningJobsFromCommandLine)

```bash
java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob
```

#### Launcher

La majorité des IDE propose différent Launcher permettant de lancer des applications, au choix :
- Java Application.
- Spring Boot App (dépend généralement d'un plugin supplémentaire relatif à l'IDE utilisé).

Comme pour le terminal, et pour les besoins du TP, nous utiliserons le `CommandLineRunner`, pensez donc à ajouter ce qui suit en argument de votre Launcher :

```text title="Paramétre de Launcher"
CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob
```

### Analyse de log

```text {11,12,13,14} title="Résultat de la commande"

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.5.4)

2021-09-01 23:01:38.200  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : Starting TutorialSpringBatchApplication using Java 11.0.11 on goro-XPS-15-9560 with PID 192067 (/home/goro/Documents/workspace/tutorial-spring-batch/target/classes started by goro in /home/goro/Documents/workspace/tutorial-spring-batch)
2021-09-01 23:01:38.206  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : No active profile set, falling back to default profiles: default
2021-09-01 23:01:40.612  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2021-09-01 23:01:41.193  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2021-09-01 23:01:41.814  INFO 192067 --- [           main] o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: H2
2021-09-01 23:01:42.305  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.
2021-09-01 23:01:42.574  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : Started TutorialSpringBatchApplication in 5.969 seconds (JVM running for 7.069)
2021-09-01 23:01:42.579  INFO 192067 --- [           main] o.s.b.a.b.JobLauncherApplicationRunner   : Running default command line with: [CommandLineJobRunner, fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration, myFirstJob]
2021-09-01 23:01:42.735  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=importUserJob]] launched with the following parameters: [{}]
2021-09-01 23:01:42.825  INFO 192067 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [readFile]
2021-09-01 23:01:42.851  INFO 192067 --- [           main] f.g.t.s.b.f.tasklet.FirstTasklet         : Contenu du fichier affichier par My First Tasklet

####### ######            #####  ######  ######  ### #     #  #####     ######     #    #######  #####  #     #
   #    #     #          #     # #     # #     #  #  ##    # #     #    #     #   # #      #    #     # #     #
   #    #     #          #       #     # #     #  #  # #   # #          #     #  #   #     #    #       #     #
   #    ######            #####  ######  ######   #  #  #  # #  ####    ######  #     #    #    #       #######
   #    #                      # #       #   #    #  #   # # #     #    #     # #######    #    #       #     #
   #    #                #     # #       #    #   #  #    ## #     #    #     # #     #    #    #     # #     #
   #    #                 #####  #       #     # ### #     #  #####     ######  #     #    #     #####  #     #




               #####




#     # #     #    ####### ### ######   #####  #######    #######    #     #####  #    # #       ####### #######
##   ##  #   #     #        #  #     # #     #    #          #      # #   #     # #   #  #       #          #
# # # #   # #      #        #  #     # #          #          #     #   #  #       #  #   #       #          #
#  #  #    #       #####    #  ######   #####     #          #    #     #  #####  ###    #       #####      #
#     #    #       #        #  #   #         #    #          #    #######       # #  #   #       #          #
#     #    #       #        #  #    #  #     #    #          #    #     # #     # #   #  #       #          #
#     #    #       #       ### #     #  #####     #          #    #     #  #####  #    # ####### #######    #
2021-09-01 23:01:42.874  INFO 192067 --- [           main] o.s.batch.core.step.AbstractStep         : Step: [readFile] executed in 47ms
2021-09-01 23:01:42.887  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=importUserJob]] completed with the following parameters: [{}] and the following status: [COMPLETED] in 99ms
2021-09-01 23:01:42.897  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
2021-09-01 23:01:42.908  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.

```

Le batch a bien lancé le job, qui a lui même lancé la tasklet.


## Conclusion

Nous avons désormais un premier _Spring Batch_ fonctionnel, qui nous savons tester à la main de différente manière. Nous allons passer à l'automatisation de cette tâche en mettant en place des tests JUnit.
