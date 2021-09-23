"use strict";(self.webpackChunktp_spring_batch=self.webpackChunktp_spring_batch||[]).push([[4798],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:5},s="Profile Spring",p={unversionedId:"tutorial-basics/profile",id:"tutorial-basics/profile",isDocsHomePage:!1,title:"Profile Spring",description:"Cette partie n'est pas li\xe9e \xe0 Spring Batch, mais au framework Spring, le framework permet de g\xe9rer diff\xe9rent profile au sein d'un m\xeame projet.",source:"@site/docs/tutorial-basics/profile.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/profile",permalink:"/docusaurus-test/docs/tutorial-basics/profile",editUrl:"https://github.com/GoroGoraK/docusaurus-test/docs/tutorial-basics/profile.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Mes premiers tests automatis\xe9s",permalink:"/docusaurus-test/docs/tutorial-basics/first-test"},next:{title:"Manage Docs Versions",permalink:"/docusaurus-test/docs/tutorial-extras/manage-docs-versions"}},c=[{value:"Objectifs",id:"objectifs",children:[{value:"Pr\xe9ambule",id:"pr\xe9ambule",children:[]},{value:"Configuration YAML / Bundle (properties)",id:"configuration-yaml--bundle-properties",children:[]},{value:"Premi\xe8re Tasklet",id:"premi\xe8re-tasklet",children:[]},{value:"Premi\xe8re Step",id:"premi\xe8re-step",children:[]},{value:"Premier Job",id:"premier-job",children:[]},{value:"Configuration Java",id:"configuration-java",children:[]}]},{value:"Lancement de l&#39;application",id:"lancement-de-lapplication",children:[{value:"M\xe9thode de lancement",id:"m\xe9thode-de-lancement",children:[]},{value:"Analyse de log",id:"analyse-de-log",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profile-spring"},"Profile Spring"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cette partie n'est pas li\xe9e \xe0 ",(0,r.kt)("em",{parentName:"p"},"Spring Batch"),", mais au framework ",(0,r.kt)("em",{parentName:"p"},"Spring"),", le framework permet de g\xe9rer diff\xe9rent profile au sein d'un m\xeame projet.\nL'utilisation de cette fonctionnalit\xe9 peut s'av\xe9rer tr\xe8s utile lors des d\xe9veloppements ou reproduction d'anomalie en locale."))),(0,r.kt)("h2",{id:"objectifs"},"Objectifs"),(0,r.kt)("p",null,"L'objectif de cette partie sera d'aborder le sujet des profiles ",(0,r.kt)("em",{parentName:"p"},"Spring")," en mettant en place un profile de d\xe9veloppement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ud83d\udce6tutorial-spring-batch\n\u2523 \ud83d\udcc2src\n\u2503 \u2523 \ud83d\udcc2main\n\u2503 \u2503 \u2523 \ud83d\udcc2java\n\u2503 \u2503 \u2503 \u2517\ud83d\udd38fr.goro.tutorial.spring.batch\n\u2503 \u2503 \u2503   \u2503  \u2139\ufe0f Package racine du code source de l'application\n\u2503 \u2503 \u2503   \u2517\ud83d\udd38firstbatch\n\u2503 \u2503 \u2503     \u2503  \u2139\ufe0f Package racine de notre premier batch \n\u2503 \u2503 \u2503     \u2523\ud83d\udd38config\n\u2503 \u2503 \u2503     \u2503  \u2503 \u2139\ufe0f Package contenant la d\xe9finition des @Bean Spring, les classes \xe0 d\xe9velopper ici sont suffix\xe9es du mode Configuration (ou Config)\n\u2503 \u2503 \u2503     \u2503  \u2523\ud83d\udd38step\n\u2503 \u2503 \u2503     \u2503  \u2503  \u2503 \u2139\ufe0f Package contenant la d\xe9finition  des @Bean Step\n\u2503 \u2503 \u2503     \u2503  \u2503  \u2517 \ud83d\udcdcFirstTaskletStepConfiguration.java\n\u2503 \u2503 \u2503     \u2503  \u2517 \ud83d\udcdcFirstBatchConfiguration.java\n\u2503 \u2503 \u2503     \u2523\ud83d\udd38tasklet\n\u2503 \u2503 \u2503     \u2503  \u2503 \u2139\ufe0f Package contenant la logique m\xe9tier des tasklets.\n\u2503 \u2503 \u2503     \u2503  \u2517 \ud83d\udcdcFirstTasklet.java\n\u2503 \u2503 \u2503     \u2517 \ud83d\udcdcTutorialSpringBatchApplication.java\n\u2503 \u2503 \u2517 \ud83d\udcc2resources\n\u2503 \u2503   \u2503 \u2139\ufe0f Resources de l'application\n\u2503 \u2503   \u2523 \ud83d\udcdcapplication.yml\n\u2503 \u2503   \u2517 \ud83d\udcdcapplication-dev.yml\n\u2503 \u2523 \ud83d\udcc2test\n\u2503 \u2503 \u2523 \ud83d\udcc2java\n\u2503 \u2503 \u2503  \u2139\ufe0f Code source des tests unitaires de l'application\n\u2503 \u2503 \u2517 \ud83d\udcc2resources\n\u2503 \u2503     \u2139\ufe0f Resources des tests unitaires (jeux de donn\xe9es,...)\n\u2503 \u2517 \ud83d\udcc2it\n\u2503   \u2523 \ud83d\udcc2java\n\u2503   \u2503   \u2139\ufe0f Code source des tests d'int\xe9gration\n\u2503   \u2517 \ud83d\udcc2resources\n\u2503       \u2139\ufe0f Resource des tests d'int\xe9gration (configuration Spring, ...)\n\u2517 \ud83d\udcdcpom.xml\n")),(0,r.kt)("h3",{id:"pr\xe9ambule"},"Pr\xe9ambule"),(0,r.kt)("p",null,"La structure de package pr\xe9sent\xe9e ici n'est qu'un exemple, il convient de l'adapter en fonction des clients / besoin."),(0,r.kt)("p",null,"On retrouve dans le code source (",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java"),") deux sous packages principaux :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"config "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Il contiendra uniquement des m\xe9thodes permettant la d\xe9finition de ",(0,r.kt)("em",{parentName:"li"},"@Bean")," ",(0,r.kt)("em",{parentName:"li"},"Spring")),(0,r.kt)("li",{parentName:"ul"},"Il pourra contenir des fichiers suffix\xe9s de ",(0,r.kt)("em",{parentName:"li"},"Configuration")," (ou ",(0,r.kt)("em",{parentName:"li"},"Config"),") pour la d\xe9finition des @Bean et ",(0,r.kt)("em",{parentName:"li"},"Properties")," (ou ",(0,r.kt)("em",{parentName:"li"},"Property"),") pour la d\xe9finition d'objet de propri\xe9t\xe9s d\xe9finies dans l'",(0,r.kt)("em",{parentName:"li"},"application.yml")),(0,r.kt)("li",{parentName:"ul"},"Il ne contiendra aucune logique m\xe9tier, uniquement de la d\xe9finition de ",(0,r.kt)("em",{parentName:"li"},"@Bean")," / properties."),(0,r.kt)("li",{parentName:"ul"},"On s'appuiera autant que possible sur des ",(0,r.kt)("em",{parentName:"li"},"class")," ",(0,r.kt)("em",{parentName:"li"},"Spring")," afin de minimiser le code source \xe0 d\xe9velopper au sein des autres ",(0,r.kt)("em",{parentName:"li"},"package")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"tasklet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Il contiendra uniquement le d\xe9veloppement m\xe9tier de nos tasklets."),(0,r.kt)("li",{parentName:"ul"},"Une tasklet impl\xe9mente l'interface ",(0,r.kt)("em",{parentName:"li"},"Spring")," ",(0,r.kt)("em",{parentName:"li"},"Tasklet"))))),(0,r.kt)("p",null,"Nous d\xe9couvrirons d'autres ",(0,r.kt)("em",{parentName:"p"},"package")," dans les diff\xe9rentes parties du tutoriel."),(0,r.kt)("h3",{id:"configuration-yaml--bundle-properties"},"Configuration YAML / Bundle (properties)"),(0,r.kt)("p",null,"Commen\xe7ons par la configuration YAML. Nous allons y d\xe9clarer le chemin vers un fichier \xe0 lire."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},'\ninputFile: "/chemin/vers/fichier/a/lire.txt"\n\n')),(0,r.kt)("p",null,"Une fois le fichier cr\xe9\xe9 et correctement aliment\xe9 (mettre le chemin d'un fichier texte existant), nous allons pouvoir cr\xe9er notre ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasklet"),"."),(0,r.kt)("h3",{id:"premi\xe8re-tasklet"},"Premi\xe8re Tasklet"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Spring charge automatiquement les propri\xe9t\xe9s d\xe9clar\xe9es dans application.yml ou application.properties."),(0,r.kt)("li",{parentName:"ul"},"Le logger utilis\xe9 sera celui par d\xe9faut (",(0,r.kt)("a",{parentName:"li",href:"https://logback.qos.ch/manual/introduction.html"},"logback")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"org.slf4j.Logger"),"), de ce fait, aucune configuration ne sera n\xe9cessaire.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"D\xe9tail pour la r\xe9alisation du TP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La tasklet lira le contenu d'un fichier (pensez \xe0 un attribut de type ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),") et le logguera en info (par d\xe9faut, dans la sortie standard : notre bonne vieille console !).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notre tasklet devra impl\xe9menter l'objet Spring Batch ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasklet"),", vous pouvez vous inspirer de la ","[documentation officielle]","(partie Tasklet)","[https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#exampleTaskletImplementation]","]."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("a",{class:"btnfire small stroke"},(0,r.kt)("em",{class:"fas fa-chevron-circle-down"}),"Voir la soluce")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet.java"',title:'"fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet.java"'},'\npackage fr.goro.tutorial.spring.batch.firstbatch.tasklet.;\n\nimport java.nio.file.Files;\nimport java.util.stream.Collectors;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.batch.core.StepContribution;\nimport org.springframework.batch.core.scope.context.ChunkContext;\nimport org.springframework.batch.core.step.tasklet.Tasklet;\nimport org.springframework.batch.repeat.RepeatStatus;\nimport org.springframework.core.io.Resource;\nimport org.springframework.util.Assert;\n\n/**\n * Classe Premi\xe8re Tasklet, elle ne fera que logguer le contenu d\'un fichier via log4j.\n */\npublic class FirstTasklet implements Tasklet {\n\n    /**\n     * Logger Slf4j/Logback (logger par d\xe9faut) de la classe {@link FirstTasklet}.\n     */\n    private static Logger LOGGER = LoggerFactory.getLogger(FirstTasklet.class);\n\n    /**\n     * Le fichier \xe0 traiter.\n     */\n    private final Resource inputFile;\n\n    /**\n     * Constructeur param\xe9tr\xe9 de MyFirstTasklet.\n     *\n     * @param inputFile le fichier \xe0 traiter.\n     */\n    public FirstTasklet(final Resource inputFile) {\n        Assert.notNull(inputFile, "Le fichier en entr\xe9e de la Tasklet ne peut \xeatre vide !");\n        this.inputFile = inputFile;\n    }\n\n    /**\n     * M\xe9thode de traitement de {@link FirstTasklet}.\n     *\n     * Cette m\xe9thode logguera uniquement le contenu du fichier pass\xe9 en param\xe9tre.\n     *\n     */\n    @Override\n    public RepeatStatus execute(final StepContribution contribution, final ChunkContext chunkContext) throws Exception {\n        LOGGER.info(Files.lines(inputFile.getFile().toPath()).collect(Collectors.joining("\\n")));\n        return RepeatStatus.FINISHED;\n    }\n}\n\n'))),(0,r.kt)("h3",{id:"premi\xe8re-step"},"Premi\xe8re Step"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"D\xe9tail pour la r\xe9alisation du TP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Cr\xe9ation d'un ",(0,r.kt)("inlineCode",{parentName:"li"},"@Bean")," de type ",(0,r.kt)("inlineCode",{parentName:"li"},"Step")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#configuringAStep"},"Documentation officielle"),")."),(0,r.kt)("li",{parentName:"ul"},"Cr\xe9ation d'un ",(0,r.kt)("inlineCode",{parentName:"li"},"@Bean")," de type ",(0,r.kt)("inlineCode",{parentName:"li"},"Tasklet"),".")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Injection d'une Resource")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Le @Value(\"${maVariabke}\") pour l'injection d'une resource sera utile.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("a",{class:"btnfire small stroke"},(0,r.kt)("em",{class:"fas fa-chevron-circle-down"}),"Voir la soluce")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="fr.goro.tutorial.spring.batch.firstbatch.config.step.FirstTaskletStepConfiguration.java"',title:'"fr.goro.tutorial.spring.batch.firstbatch.config.step.FirstTaskletStepConfiguration.java"'},'\npackage fr.goro.tutorial.spring.batch.firstbatch.config.step;\n\nimport org.springframework.batch.core.Step;\nimport org.springframework.batch.core.configuration.annotation.StepBuilderFactory;\nimport org.springframework.batch.core.step.tasklet.Tasklet;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.io.Resource;\n\nimport fr.goro.tutorial.spring.batch.firstbatch.tasklet.FirstTasklet;\n\n/**\n * Classe de configuration de notre premi\xe8re {@link Step} compos\xe9e d\'une {@link Tasklet} {@link FirstTasklet}.\n *\n */\n@Configuration\npublic class FirstTaskletStepConfiguration {\n\n    /**\n     * D\xe9finition de la step de lecture de fichier.\n     *\n     * @param stepBuilderFactory la factory de construction de {@link Step}.\n     * @param myFirstTasklet notre premi\xe8re {@link Tasklet} de lecture de fichier.\n     * @return notre premi\xe8re {@link Step} compos\xe9 de notre premi\xe8re {@link Tasklet}.\n     */\n    @Bean\n    public Step myFirstStep(final StepBuilderFactory stepBuilderFactory, final Tasklet myFirstTasklet) {\n        return stepBuilderFactory\n                .get("myFirstStep")\n                .tasklet(myFirstTasklet)\n                .build();\n    }\n\n    /**\n     * D\xe9finition de notre premi\xe8re {@link Tasklet} de lecture de fichier.\n     *\n     * @param directoryPath la {@link Resource} dont le path est issu du fichier de configuration.\n     * @return notre premi\xe8re {@link Tasklet} configur\xe9e.\n     */\n    @Bean\n    public Tasklet myFirstTasklet(@Value("${inputFile}") final Resource directoryPath) {\n        return new FirstTasklet(directoryPath);\n    }\n\n}\n\n'))),(0,r.kt)("h3",{id:"premier-job"},"Premier Job"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Interdit")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Il s'agit d'une partie \"Configuration\", aucune logique m\xe9tier ne doit \xeatre pr\xe9sente, on n'utilise que des objets ",(0,r.kt)("inlineCode",{parentName:"li"},"Spring Batch")," pour d\xe9finir nos ",(0,r.kt)("inlineCode",{parentName:"li"},"@Bean"),".")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"D\xe9tail pour la r\xe9alisation du TP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Cr\xe9ation d'un ",(0,r.kt)("inlineCode",{parentName:"li"},"@Bean")," de type ",(0,r.kt)("inlineCode",{parentName:"li"},"Job")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#configuringAJob"},"Documentation officielle"),").")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Il s'agit ici de la classe principale de configuration de notre batch, nous conviendrons d'ajouter l'",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableBatchProcessing")," permettant entre autre la configuration du JobRepository n\xe9cessaire au fonctionnement de ",(0,r.kt)("inlineCode",{parentName:"li"},"Spring Batch")," ici.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("a",{class:"btnfire small stroke"},(0,r.kt)("em",{class:"fas fa-chevron-circle-down"}),"Voir la soluce")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration.java"',title:'"fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration.java"'},'\npackage fr.goro.tutorial.spring.batch.firstbatch.config;\n\nimport org.springframework.batch.core.Job;\nimport org.springframework.batch.core.Step;\nimport org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;\nimport org.springframework.batch.core.configuration.annotation.JobBuilderFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n/**\n * Configuration global du batch.\n */\n@Configuration\n@EnableBatchProcessing\npublic class FirstBatchConfiguration {\n\n    /**\n     * D\xe9finition de notre {@link Job}.\n     *\n     * @param jobBuilderFactory la factory de construction de {@link Job}\n     * @param myFirstStep notre premi\xe8re {@link} step compos\xe9e de notre premi\xe8re tasklet.\n     * @return notre premier {@link Job} Spring Batch.\n     */\n    @Bean\n    public Job myFirstJob(final JobBuilderFactory jobBuilderFactory, final Step myFirstStep) {\n        return jobBuilderFactory.get("importUserJob")\n                .start(myFirstStep)\n                .build();\n    }\n\n}\n\n'))),(0,r.kt)("h3",{id:"configuration-java"},"Configuration Java"),(0,r.kt)("h2",{id:"lancement-de-lapplication"},"Lancement de l'application"),(0,r.kt)("h3",{id:"m\xe9thode-de-lancement"},"M\xe9thode de lancement"),(0,r.kt)("p",null,"Plusieurs m\xe9thode de lancement sont possibles :"),(0,r.kt)("h4",{id:"terminal"},"Terminal"),(0,r.kt)("p",null,"Via un terminal, depuis votre workspace, vous pouvez taper :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lancement de l'application :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar\n")),(0,r.kt)("p",null,"De cette mani\xe8re, ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring")," lancera l'ensemble des ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," qu'il trouvera."),(0,r.kt)("p",null,"Pour les besoins du TP, nous utiliserons le ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner")," propos\xe9 par ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),", il nous permettra de lancer notre batch en pr\xe9cisant le fichier de configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"Java")," utilis\xe9.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#runningJobsFromCommandLine"},"La documentation officiel de ",(0,r.kt)("inlineCode",{parentName:"a"},"Spring")," \xe0 ce sujet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar target/tutorial-spring-batch-0.0.1-SNAPSHOT.jar CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob\n")),(0,r.kt)("h4",{id:"launcher"},"Launcher"),(0,r.kt)("p",null,"La majorit\xe9 des IDE propose diff\xe9rent Launcher permettant de lancer des applications, au choix :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Application."),(0,r.kt)("li",{parentName:"ul"},"Spring Boot App (d\xe9pend g\xe9n\xe9ralement d'un plugin suppl\xe9mentaire relatif \xe0 l'IDE utilis\xe9).")),(0,r.kt)("p",null,"Comme pour le terminal, et pour les besoins du TP, nous utiliserons le ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),", pensez donc \xe0 ajouter ce qui suit en argument de votre Launcher :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Param\xe9tre de Launcher"',title:'"Param\xe9tre',de:!0,'Launcher"':!0},"CommandLineJobRunner fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration myFirstJob\n")),(0,r.kt)("h3",{id:"analyse-de-log"},"Analyse de log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'{11,12,13,14} title="R\xe9sultat de la commande"',"{11,12,13,14}":!0,title:'"R\xe9sultat',de:!0,la:!0,'commande"':!0},"\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.5.4)\n\n2021-09-01 23:01:38.200  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : Starting TutorialSpringBatchApplication using Java 11.0.11 on goro-XPS-15-9560 with PID 192067 (/home/goro/Documents/workspace/tutorial-spring-batch/target/classes started by goro in /home/goro/Documents/workspace/tutorial-spring-batch)\n2021-09-01 23:01:38.206  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : No active profile set, falling back to default profiles: default\n2021-09-01 23:01:40.612  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...\n2021-09-01 23:01:41.193  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.\n2021-09-01 23:01:41.814  INFO 192067 --- [           main] o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: H2\n2021-09-01 23:01:42.305  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.\n2021-09-01 23:01:42.574  INFO 192067 --- [           main] f.g.t.s.b.TutorialSpringBatchApplication : Started TutorialSpringBatchApplication in 5.969 seconds (JVM running for 7.069)\n2021-09-01 23:01:42.579  INFO 192067 --- [           main] o.s.b.a.b.JobLauncherApplicationRunner   : Running default command line with: [CommandLineJobRunner, fr.goro.tutorial.spring.batch.firstbatch.config.FirstBatchConfiguration, myFirstJob]\n2021-09-01 23:01:42.735  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=importUserJob]] launched with the following parameters: [{}]\n2021-09-01 23:01:42.825  INFO 192067 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [readFile]\n2021-09-01 23:01:42.851  INFO 192067 --- [           main] f.g.t.s.b.f.tasklet.FirstTasklet         : Contenu du fichier affichier par My First Tasklet\n\n####### ######            #####  ######  ######  ### #     #  #####     ######     #    #######  #####  #     #\n   #    #     #          #     # #     # #     #  #  ##    # #     #    #     #   # #      #    #     # #     #\n   #    #     #          #       #     # #     #  #  # #   # #          #     #  #   #     #    #       #     #\n   #    ######            #####  ######  ######   #  #  #  # #  ####    ######  #     #    #    #       #######\n   #    #                      # #       #   #    #  #   # # #     #    #     # #######    #    #       #     #\n   #    #                #     # #       #    #   #  #    ## #     #    #     # #     #    #    #     # #     #\n   #    #                 #####  #       #     # ### #     #  #####     ######  #     #    #     #####  #     #\n\n\n\n\n               #####\n\n\n\n\n#     # #     #    ####### ### ######   #####  #######    #######    #     #####  #    # #       ####### #######\n##   ##  #   #     #        #  #     # #     #    #          #      # #   #     # #   #  #       #          #\n# # # #   # #      #        #  #     # #          #          #     #   #  #       #  #   #       #          #\n#  #  #    #       #####    #  ######   #####     #          #    #     #  #####  ###    #       #####      #\n#     #    #       #        #  #   #         #    #          #    #######       # #  #   #       #          #\n#     #    #       #        #  #    #  #     #    #          #    #     # #     # #   #  #       #          #\n#     #    #       #       ### #     #  #####     #          #    #     #  #####  #    # ####### #######    #\n2021-09-01 23:01:42.874  INFO 192067 --- [           main] o.s.batch.core.step.AbstractStep         : Step: [readFile] executed in 47ms\n2021-09-01 23:01:42.887  INFO 192067 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [SimpleJob: [name=importUserJob]] completed with the following parameters: [{}] and the following status: [COMPLETED] in 99ms\n2021-09-01 23:01:42.897  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...\n2021-09-01 23:01:42.908  INFO 192067 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.\n\n")),(0,r.kt)("p",null,"Le batch a bien lanc\xe9 le job, qui a lui m\xeame lanc\xe9 la tasklet."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Nous avons d\xe9sormais un premier ",(0,r.kt)("em",{parentName:"p"},"Spring Batch")," fonctionnel, qui nous savons tester \xe0 la main de diff\xe9rente mani\xe8re. Nous allons passer \xe0 l'automatisation de cette t\xe2che en mettant en place des tests JUnit."))}u.isMDXComponent=!0}}]);