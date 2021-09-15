---
sidebar_position: 3
---

# Mes premiers tests automatisés

:::info

Nous utiliserons JUnit 5 pour les tests de ce tutoriel.

:::

## Objectifs

L'objectif de ce TP sera de mettre en oeuvre nos premiers tests unitaires et d'intégration.

Nous nous contenterons de deux classes de tests : la première pour les tests unitaires (fichier présent, fichier absent), et la seconde pour le test d'intégration (le job a tourné sans erreur).

Voici la structure à atteindre lors de cette partie :

```
📦tutorial-spring-batch
┣ 📂src
┃ ┣ 📂main
┃ ┃ ┣ 📂java
┃ ┃ ┃ ┗🔸fr.goro.tutorial.spring.batch
┃ ┃ ┃   ┃  ℹ️ Package racine du code source de l'application
┃ ┃ ┃   ┣🔸firstbatch
┃ ┃ ┃   ┃ ┃  ℹ️ Package racine de notre premier batch
┃ ┃ ┃   ┃ ┣🔸config
┃ ┃ ┃   ┃ ┃  ┃ ℹ️ Package contenant la définition des @Bean Spring, les classes à développer ici sont suffixées du mode Configuration (ou Config)
┃ ┃ ┃   ┃ ┃  ┣🔸step
┃ ┃ ┃   ┃ ┃  ┃  ┃ ℹ️ Package contenant la définition  des @Bean Step
┃ ┃ ┃   ┃ ┃  ┃  ┗ 📜FirstTaskletStepConfiguration.java
┃ ┃ ┃   ┃ ┃  ┗ 📜FirstBatchConfiguration.java
┃ ┃ ┃   ┃ ┗🔸tasklet
┃ ┃ ┃   ┃  ┃ ℹ️ Package contenant la logique métier des tasklets.
┃ ┃ ┃   ┃  ┗ 📜FirstTasklet.java
┃ ┃ ┃   ┗ 📜TutorialSpringBatchApplication.java
┃ ┃ ┗ 📂resources
┃ ┃   ┃  ℹ️ Resources de l'application
┃ ┃   ┗ 📜 application.yml
┃ ┣ 📂test
┃ ┃ ┣ 📂java
┃ ┃ ┃ ┃  ℹ️ Code source des tests unitaires de l'application
┃ ┃ ┃ ┗🔸fr.goro.tutorial.spring.batch
┃ ┃ ┃   ┃  ℹ️ Package racine de nos tests unitaires
┃ ┃ ┃   ┗🔸firstbatch
┃ ┃ ┃     ┗🔸tasklet
┃ ┃ ┃       ┗ 📜FirstTaskletTest.java
┃ ┃ ┗ 📂resources
┃ ┃   ┃  ℹ️ Resources des tests unitaires (jeux de données,...)
┃ ┃   ┗ 📂firstbactch
┃ ┃      ┗📝fichier_a_traiter.txt
┃ ┗ 📂it
┃   ┣ 📂java
┃   ┃ ┃ ℹ️ Code source des tests d'intégration
┃   ┃ ┗🔸fr.goro.tutorial.spring.batch
┃   ┃   ┃ ℹ️ Package racine de nos tests d'intégration
┃   ┃   ┗🔸firstbatch
┃   ┃     ┗ 📜TutorialSpringBatchFirstITCase.java
┃   ┗ 📂resources
┃     ┃ ℹ️ Resource des tests d'intégration (configuration Spring, ...)
┃     ┗ 📜application.yml
┗ 📜pom.xml
```

Une bonne pratique à utiliser est de 'ranger' correctement nos tests.

## Partie TU `src/test/java`

### Configuration

Nous utiliserons le plugin _surefire_ pour lancer nos tests unitaires via Maven, nous utiliserons donc le suffixe _Test_ car c'est le plus commun, mais sachez qu'il en existe d'autre [que vous retrouverez ici](https://maven.apache.org/surefire/maven-surefire-plugin/examples/inclusion-exclusion.html).

De ce fait, nous commencerons par configurer notre _pom_ pour y ajouter la déclaration minimaliste de notre plugin.

```xml title="modification du pom.xml"
<!-- Tests unitaires. Par défaut, Test, ... -->
<plugin>
	<artifactId>maven-surefire-plugin</artifactId>
</plugin>
```

### Développement _Java_

Rien de bien particulier en terme de test unitaire pour `Spring Batch`, il s'agira d'utiliser _JUnit_ comme sur n'importe quel autre projet _Java_.

:::tip Astuce

On notera que moins nous écrivons de code métier (autre que de la configuration), moins nous aurons de test unitaire à développer :grin:, d'où l'importance d'utiliser correctement un maximum d'objet _Spring Batch_ existant.

:::

#### Test de la Tasklet

<details>
<summary>
<a class="btnfire small stroke"><em class="fas fa-chevron-circle-down"></em>Voir le code source du test unitaire</a>
</summary>

```jsx title="fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTaskletTest.java"

package fr.goro.tutorial.spring.batch.firstbatch.tasklet;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

/**
 * Classe de test de notre première tasklet.
 *
 */
class FirstTaskletTest {

	/**
	 * Test unitaire de notre première tasklet dans un cas passant.
	 *
	 * Il vérifiera le statut d'exécution de la tasklet après son exécution.
	 */
	@Test
	void testExecuteTasklet_nonNullInputResource() throws Exception {
		// Jeu de données.
		final Resource inputResource = new ClassPathResource("firstbatch/fichier_a_traiter.txt");

		// Création de la tasklet à tester.
		final Tasklet taskletToTest = new FirstTasklet(inputResource);
		final RepeatStatus repeatStatus = taskletToTest.execute(null, null);

		// Vérification
		Assertions.assertEquals(RepeatStatus.FINISHED, repeatStatus);
	}

	/**
	 * Test unitaire de notre première tasklet dans un cas d'erreur.
	 *
	 * Il vérifiera la levée d'erreur à l'exécution de la tasklet.
	 */
	@Test
	void testExecuteTasklet_nullInputResource() throws Exception {
		// Jeu de données.
		final Resource inputResource = null;

		// Vérifications
		final Exception exception = Assertions.assertThrows(IllegalArgumentException.class,
				() -> new FirstTasklet(inputResource));
		assertTrue(exception.getMessage().contains("Le fichier en entrée de la Tasklet ne peut être vide !"));
	}

}

```

</details>

#### Test de la partie Config

Il n'est pas très pertinent de développer des tests unitaires sur les objets _Configuration_ tant le code source doit être très simple, de ce fait, nous n'en développerons pas durant ce tutorial.

### Lancement des tests unitaires

La plupart des IDE proposent des _Launcher_ spécifiques à _JUnit_ (_JUnit 5_ ici), un simple clic droit sur package de test, sur une classe de test, ou directement sur une méthode de test, puis "Run As Junit" lancera le / les tests désirés.

## Partie TI `src/it/java`

### Configuration

Nous utiliserons le plugin _failsafe_ pour lancer nos tests d'intégration via Maven, nous utiliserons le suffixe _ITCase_ pour les tests de _Job_, et _IT_ pour les tests de composant (_Step_, _Reader_, ...) mais sachez qu'il en existe d'autre d'autre [que vous retrouverez ici](https://maven.apache.org/surefire/maven-failsafe-plugin/examples/inclusion-exclusion.html).

De ce fait, nous commencerons par configurer notre pom pour y ajouter la déclaration minimaliste de notre plugin.

```xml
<!-- Tests d'intégration. Par défaut, IT, ITCase, ... -->
<plugin>
	<artifactId>maven-failsafe-plugin</artifactId>
</plugin>
```

Comme nous l'avons vu lors de la création de la structure, nous utilisons un chemin différent de `src/test/resources` pour les tests d'intégration. `src/it/java` et `src/it/resources` n'étant pas reconnu comme _package_ de test par défaut, il faut modifier le build de notre application afin d'ajouter les fichiers _IT_ au _classpath_ de test.

```xml
<!-- Copie des IT sources dans les target test sources. -->
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>build-helper-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>add-integration-test-source</id>
            <phase>generate-test-sources</phase>
            <goals>
                <goal>add-test-source</goal>
            </goals>
            <configuration>
                <sources>
                    <source>src/it/java</source>
                </sources>
            </configuration>
        </execution>
        <execution>
            <id>add-test-resource</id>
            <phase>generate-test-resources</phase>
            <goals>
                <goal>add-test-resource</goal>
            </goals>
            <configuration>
                <resources>
                    <resource>
                        <directory>src/it/resources</directory>
                    </resource>
                </resources>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### Développement _Java_

Nous développerons les tests d'un cas d'utilisation, le découpage en package est plus libre, ici, on se placera simplement dans un package `firstbatch`.

Nous avons vu que nous utiliserons le plugin _failsafe_ pour lancer nos tests d'intégration via Maven, nous utiliserons le suffixe _ITCase_ pour les tests de _Job_, et _IT_ pour les tests de composant (_Step_, _Reader_, ...).

<details>
<summary>
<a class="btnfire small stroke"><em class="fas fa-chevron-circle-down"></em>Voir le code source du test d'intégration</a>
</summary>

```jsx title="fr.goro.tutorial.spring.batch.firstbatch.TutorialSpringBatchFirstITCase.java"

package firstbatch;

import org.assertj.core.api.Assertions;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.batch.test.JobRepositoryTestUtils;
import org.springframework.batch.test.context.SpringBatchTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration;
import fr.goro.tutorial.spring.batch.firstbatch.config.step.FirstTaskletStepConfiguration;

/**
 * Classe de test d'intégration du premier batch.
 *
 * @see @SpringBatchTest pour la récupération de {@link JobLauncherTestUtils} et
 *      {@link JobRepositoryTestUtils}.
 * @see @TestPropertySource pour l'insertion d'un fichier properties hors du
 *      classPath.
 * @see @EnableAutoConfiguration pour l'auto configuration des beans nécessaire
 *      à SpringBatch.
 * @see @ContextConfiguration pour ne charger que les fichier de configuration
 *      du batch qui nous interesse.
 */
@ExtendWith(SpringExtension.class)
@SpringBatchTest
@TestPropertySource("application.yml")
@EnableAutoConfiguration
@ContextConfiguration(classes = { FirstBatchConfiguration.class, FirstTaskletStepConfiguration.class })
public class TutorialSpringBatchFirstITCase {

	/**
	 * Classe utilitaire Spring Batch Test.
	 *
	 * Elle permet de lancer un job.
	 */
	@Autowired
	private JobLauncherTestUtils jobLauncherTestUtils;

	/**
	 * Classe utilitaire Spring Batch Test.
	 *
	 * Elle permet l'accès aux métadatas Spring Batch.
	 */
	@Autowired
	private JobRepositoryTestUtils jobRepositoryTestUtils;

	/**
	 * Clean des métadatas Spring Batch.
	 */
	@After
	public void cleanUp() {
		jobRepositoryTestUtils.removeJobExecutions();
	}

	/**
	 * Test d'intégration de notre premier batch.
	 *
	 * Il vérifiera que le Job est au statut "COMPLETED" (terminé sans erreur).
	 *
	 * @throws Exception
	 */
	@Test
	public void testFirstBatch() throws Exception {
		final JobExecution jobExecution = jobLauncherTestUtils.launchJob(defaultJobParameters());
		final ExitStatus actualJobExitStatus = jobExecution.getExitStatus();

		Assertions.assertThat(actualJobExitStatus).isEqualTo(ExitStatus.COMPLETED);
	}

	/**
	 * Méthode d'initialisation des JobParameters.
	 *
	 * @return l'objet {@link JobParameters} initialisé pour le test.
	 */
	private JobParameters defaultJobParameters() {
		final JobParametersBuilder paramsBuilder = new JobParametersBuilder();
		return paramsBuilder.toJobParameters();
	}
}

```

</details>

:::info

- Il est possible de ne tester qu'une partie du traitement batch, la [documentation est par ici](https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#testing).

:::

### Lancement des tests d'intégration

Comme pour les tests unitaires, un simple clic droit sur package de test, sur une classe de test, ou directement sur une méthode de test, puis "Run As Junit" lancera le / les tests désirés.

## Automatisation des tests

Avec cette configuration, il suffit de taper la commande (ou de créer un _Launcher_ _Maven_) :

```bash
mvn clean install
```

:::info

- Faisafe donne un paramétre (boolean) de désactivation des tests untaires, ainsi, la commande suivante ne lancera pas les tests d'intégration, mais uniquement les tests unitaires :

```bash
mvn clean install -DskipITs
```

- Surefire donne un paramétre (boolean) de désactivation des tests d'intégration, ainsi, la commande suivante ne lancera aucun test :

```bash
mvn clean install -DskipTests
```

:::

## Conclusion

Nous avons désormais automatisé nos tests, ils sont exécutables par une plateforme d'intégration continue (_Jenkins_ par exemple).

Avant d'aborder le sujet de la _datasource_, nous allons apporter quelques modifications de configuration à notre application afin d'utiliser le concept de profil utilisé par _Spring_.

