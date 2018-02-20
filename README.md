# Template pour dev de css

Préalables:
- Nodejs
- npm

On assume que l'utilisateur a déjà sa clé ssh chez bitbucket.

## Pour commencer
Le setup:
```
git clone git@bitbucket.org:uqam/esg_gabarit.git
cd esg_gabarit
npm install
```

## Créer le fichier css

```
gulp sass2css
```

## Mettre les images inline

```
gulp inline-images
```

Le fichier `css/main.css` sera traité pour trouver les images et le css final sera dans `build/main.css`

Pour que les images soient traitées par la tâche `inline-images`, on doit ajouter `?embed`

On n'a pas besoin d'ajouter le chemin car cela est configuré par le paramètre `path`de la task definie dans le
Gulpfile.

## Utilisation

-Ça ne fonctionne pas --
On utilisera le lien
https://bitbucket.org/uqam/esg_gabarit/raw/HEAD/build/main.css
pour inclure la feuille de style avec
```
<link rel="stylesheet" href="https://bitbucket.org/uqam/esg_gabarit/raw/HEAD/build/main.css">
```

Pour avoir le css avec le bon type, on utilisera:
```
https://rawgit.com/
```
ça ne fonctionne que avec github, donc on utilisera `github` pour simplifier tests.


### Git stuff

Comme le dépôt 'officiel' de l'UQAM est bitbucket, on utilisera deux remotes.

Dans github, vous allez faire un fork de
```
https://github.com/nmoller/cssdev
```

Si vous avez cloné le dépôt originel `https://bitbucket.org/uqam/esg_gabarit` la commande
`git remote -v` vous retournera que origin est associé à bitbucket (bb).

Vous ajouterez un autre remote:
```
git remote add gh https://github.com/[username]/cssdev
```

Donc, vous allez faire
```
git push origin [branche]
git push gh [branche]
```
pour pousser vos modifications vers les deux remotes.

De cette manière, on est en mesure d'utiliser

```
<link rel="stylesheet" type="text/css" href="https://rawgit.com/saitansky-uqam/cssdev/master/build/main.css">
```
pour inclure le fichier css.

Bien sûr, assurez-vous de changer [username] par votre identifiant chez github.



## Autres

[Pour quoi commiter package-lock.json](https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5)
