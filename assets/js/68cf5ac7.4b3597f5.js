"use strict";(self.webpackChunktp_spring_batch=self.webpackChunktp_spring_batch||[]).push([[8864],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44654:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={sidebar_position:2},p="Configuration Spring",l={unversionedId:"tutorial-init/spring-initialization",id:"tutorial-init/spring-initialization",isDocsHomePage:!1,title:"Configuration Spring",description:"- Le code source de la partie pr\xe9c\xe9dente (Initialisation de structure) est disponible ici.",source:"@site/docs/tutorial-init/spring-initialization.mdx",sourceDirName:"tutorial-init",slug:"/tutorial-init/spring-initialization",permalink:"/docusaurus-test/docs/tutorial-init/spring-initialization",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-init/spring-initialization.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Structure du projet",permalink:"/docusaurus-test/docs/tutorial-init/structure-initialization"},next:{title:"Mon premier Job",permalink:"/docusaurus-test/docs/tutorial-basics/first-job"}},c=[{value:"Objectif",id:"objectif",children:[]},{value:"Configuration Spring Boot",id:"configuration-spring-boot",children:[{value:"Ajout des d\xe9pendances Maven",id:"ajout-des-d\xe9pendances-maven",children:[]},{value:"Configuration Java",id:"configuration-java",children:[]}]},{value:"Lancement de l&#39;application",id:"lancement-de-lapplication",children:[{value:"M\xe9thode de lancement",id:"m\xe9thode-de-lancement",children:[]},{value:"R\xe9sultat",id:"r\xe9sultat",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:c};function d(e){var n=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-spring"},"Configuration Spring"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Le code source de la partie pr\xe9c\xe9dente (Initialisation de structure) est disponible ",(0,r.kt)("a",{target:"_blank",href:t(54498).Z},"ici"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La suite du tutoriel utilisera l'IDE pour les diff\xe9rentes actions comme la cr\xe9ation de class, le build/run de l'application via diff\xe9rents launchers."))))),(0,r.kt)("h2",{id:"objectif"},"Objectif"),(0,r.kt)("p",null,"L'objectif de cette partie est de charger un contexte ",(0,r.kt)("em",{parentName:"p"},"Spring")," au lancement de notre application."),(0,r.kt)("h2",{id:"configuration-spring-boot"},"Configuration Spring Boot"),(0,r.kt)("h3",{id:"ajout-des-d\xe9pendances-maven"},"Ajout des d\xe9pendances Maven"),(0,r.kt)("p",null,"Nous allons commencer par ajouter ces d\xe9pendances au pom de notre application :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'{6-11,21-31,34-43,48-51} title="pom.xml"',"{6-11,21-31,34-43,48-51}":!0,title:'"pom.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.5.4</version>\n        <relativePath /> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>fr.goro.tutorial</groupId>\n    <artifactId>tutorial-spring-batch</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>tutorial-spring-batch</name>\n    <description>Tutoriel pour Spring Batch</description>\n    <properties>\n        <java.version>11</java.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-batch</artifactId>\n        </dependency>\n\n        \x3c!-- Database --\x3e\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n\n        \x3c!-- Testing --\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.batch</groupId>\n            <artifactId>spring-batch-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n\n            \x3c!-- Testing --\x3e\n\n            \x3c!-- Copie des IT sources dans les target test sources. --\x3e\n            <plugin>\n                <groupId>org.codehaus.mojo</groupId>\n                <artifactId>build-helper-maven-plugin</artifactId>\n                <executions>\n                    <execution>\n                        <id>add-integration-test-source</id>\n                        <phase>generate-test-sources</phase>\n                        <goals>\n                            <goal>add-test-source</goal>\n                        </goals>\n                        <configuration>\n                            <sources>\n                                <source>src/it/java</source>\n                            </sources>\n                        </configuration>\n                    </execution>\n                    <execution>\n                        <id>add-test-resource</id>\n                        <phase>generate-test-resources</phase>\n                        <goals>\n                            <goal>add-test-resource</goal>\n                        </goals>\n                        <configuration>\n                            <resources>\n                                <resource>\n                                    <directory>src/it/resources</directory>\n                                </resource>\n                            </resources>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n\n            \x3c!-- Tests unitaires. Par d\xe9faut, Test, ... --\x3e\n            <plugin>\n                <artifactId>maven-surefire-plugin</artifactId>\n            </plugin>\n\n            \x3c!-- Tests d\'int\xe9gration. Par d\xe9faut, IT, ITCase, ... --\x3e\n            <plugin>\n                <artifactId>maven-failsafe-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"3 blocks surlign\xe9s ont \xe9t\xe9 ajout\xe9 pour ajouter les d\xe9pendances Spring"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"L'h\xe9ritage du projet spring-boot-starter-parent."),(0,r.kt)("li",{parentName:"ul"},"Les d\xe9pendances minimales pour le fonctionnement de Spring Batch."),(0,r.kt)("li",{parentName:"ul"},"L'utilisation du plugin ",(0,r.kt)("inlineCode",{parentName:"li"},"Spring-boot-maven-plugin"),".")),(0,r.kt)("p",{parentName:"div"},"Le reste du pom concerne 3 plugins relatifs aux tests :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build-helper-maven-plugin")," : `src/it/resources n'\xe9tant pas reconnu par maven, il aura \xe0 sa charge la copie des sources/resources IT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maven-surefire-plugin")," : ayant \xe0 sa charge le lancement des tests unitaires"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maven-failsafe-plugin")," : ayant \xe0 sa charge le lancement des tests d'int\xe9gration.")))),(0,r.kt)("h3",{id:"configuration-java"},"Configuration Java"),(0,r.kt)("p",null,"Nous allons modifier la classe principale ",(0,r.kt)("inlineCode",{parentName:"p"},"TutorialSpringBatchApplication")," comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3,4,9,20} title="diff fr/goro/tutorial/spring/batch/TutorialSpringBatchApplication.java"',"{3,4,9,20}":!0,title:'"diff','fr/goro/tutorial/spring/batch/TutorialSpringBatchApplication.java"':!0},"package fr.goro.tutorial.spring.batch;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n/**\n * Classe main de l'application.\n */\n@SpringBootApplication\npublic class TutorialSpringBatchApplication {\n\n    /**\n     * M\xe9thode principale de l'application : point d'entr\xe9e.\n     *\n     * Lancement du traitement batch.\n     *\n     * @param args les arguments pass\xe9 en param\xe9tre de l'application.\n     */\n    public static void main(String[] args) {\n        System.exit(SpringApplication.exit(SpringApplication.run(TutorialSpringBatchApplication.class, args)));\n    }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"La mise en oeuvre de la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," s'appuie sur l'exemple donn\xe9es par Spring sur son ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/batch-processing/"},"guide de mise en oeuvre de Spring Batch")))),(0,r.kt)("h2",{id:"lancement-de-lapplication"},"Lancement de l'application"),(0,r.kt)("h3",{id:"m\xe9thode-de-lancement"},"M\xe9thode de lancement"),(0,r.kt)("p",null,"Plusieurs m\xe9thode de lancement sont possibles :"),(0,r.kt)("h4",{id:"terminal"},"Terminal"),(0,r.kt)("p",null,"Via un terminal, depuis votre workspace, vous pouvez taper :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lancement de l'application :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar\n")),(0,r.kt)("p",null,"De cette mani\xe8re, ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring")," lancera l'ensemble des ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," qu'il trouvera."),(0,r.kt)("p",null,"Pour les besoins du TP, nous utiliserons le ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner")," propos\xe9 par ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),", il nous permettra de lancer notre batch en pr\xe9cisant le fichier de configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"Java")," utilis\xe9.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#runningJobsFromCommandLine"},"La documentation officiel de ",(0,r.kt)("inlineCode",{parentName:"a"},"Spring")," \xe0 ce sujet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob\n")),(0,r.kt)("h4",{id:"launcher"},"Launcher"),(0,r.kt)("p",null,"La majorit\xe9 des IDE propose diff\xe9rent Launcher permettant de lancer des applications, au choix :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Application."),(0,r.kt)("li",{parentName:"ul"},"Spring Boot App (d\xe9pend g\xe9n\xe9ralement d'un plugin suppl\xe9mentaire relatif \xe0 l'IDE utilis\xe9).")),(0,r.kt)("p",null,"Comme pour le terminal, et pour les besoins du TP, nous utiliserons le ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),", pensez donc \xe0 ajouter ce qui suit en argument de votre Launcher :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Param\xe9tre de Launcher"',title:'"Param\xe9tre',de:!0,'Launcher"':!0},"CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob\n")),(0,r.kt)("h3",{id:"r\xe9sultat"},"R\xe9sultat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="R\xe9sultat de la commande"',title:'"R\xe9sultat',de:!0,la:!0,'commande"':!0},"...\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.5.4)\n\n2021-09-08 00:40:22.022  INFO 301368 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : Starting TutorialSpringBatchApplication using Java 11.0.11 on goro-XPS-15-9560 with PID 301368 (/home/goro/Documents/workspace/tutorial-spring-batch/target/classes started by goro in /home/goro/Documents/workspace/tutorial-spring-batch)\n2021-09-08 00:40:22.027  INFO 301368 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : No active profile set, falling back to default profiles: default\n2021-09-08 00:40:24.415  INFO 301368 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...\n2021-09-08 00:40:25.062  INFO 301368 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.\n2021-09-08 00:40:25.658  INFO 301368 --- [           main] o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: H2\n2021-09-08 00:40:26.152  INFO 301368 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.\n")),(0,r.kt)("p",null,"Nous avons lancer notre traitement au travers d'un contexte ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"A cette \xe9tape, nous avons cr\xe9\xe9 notre premi\xe8re coquille vide ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),", la structure est d\xe9sormais pr\xeate \xe0 accueillir un premier traitement."))}d.isMDXComponent=!0},54498:function(e,n,t){n.Z=t.p+"assets/files/tutorial-spring-batch_InitStructure-53e5fa93d1f8c45869245e9458fac49d.zip"}}]);