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

## Autres

[Pour quoi commiter package-lock.json](https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5)


