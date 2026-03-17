# Rapport — TP1

## Points clés

### 1. [Structurer la page web en fonction du shéma donné]

J'ai suivi le shéma donné pour structurer mon site : le header avec logo et boutons, le hero avec titre et CTA, le main avec 3 cartes, et une section à propos, et enfin un footer.

### 2. [Détails]

Le css m'a pris peu de temps à réaliser, j'ai donc fait quelques changements dans le html, j'ai réfléchi à une charte graphique, les polices, les couleurs (sur https://coolors.co/), ainsi que les transitions sur les boutons et les cartes.

### 3. [Compétences et notions utilisées]
J'ai compris comment utiliser flexbox et grid, le meilleur moyen pour disposer les éléments sur un site.
J'ai appris à utiliser les cartes pour faire un beau site avec plusieurs parties.
J'ai appris à faire des transitions et à ajouter des ombres pour rendre un site dynamique.

### 4. [Difficultés]

Je n'ai toutefois pas réussi à faire fonctionner les liens dans le footer.

## Utilisation de l'IA

### Démarche

J'utilise Gemini pour résoudre certains problèmes, ou si je ne comprends pas un concept.

### Apports et limites

J'ai par exemple eu un problème : les boutons dans le header fonctionnaient mais pas dans le footer. Le problème était simplement que je m'étais trompé de "class".
J'ai aussi demandé à gemini comment metre un lien vers un site (par exemple linkedIn) mais je n'ai pas réussi à avoir une réponse qui marchait (malgré le fait que j'ai reformulé trois fois ma question).

### Prompts significatifs

1. "Dans mon site en html/css, les boutons marchent dans le header mais pas dans le footer ? + [captures d'écran] + [parties du code html et css dédiés aux boutons, au header et au footer]" → Je me suis trompé de "class" : j'ai juste mis‎ <nav‎ >‎ au lieu de <nav‎ class="menu-header-footer">.
   
2. "Je veux mettre un lien dans mon site en html/css, comment je fait ? + [captures d'écran] + [parties du code html et css dédiés au footer]"
   → <nav‎ class="menu-header-footer">
      <a‎ href="mailto:leofaulle@gmail.com" class="bouton-nav">Email</a>
      <a‎ href="www.linkedin.com/in/léo-faulle-a910973b6" target="_blank" class="bouton-nav">LinkedIn</a>
      <a‎ href="https://github.com/LeoFaulle" target="_blank" class="bouton-nav">GitHub</a>
    </nav>
   
    **problème : j'ai reformulé 3 fois et ça n'a pas marché.*
