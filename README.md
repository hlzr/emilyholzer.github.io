## Dev Workflow
```
npx gulp
```
Check localhost:3000 for hot-reload server

## Deploy Notes
```
npx gulp compile
```

```
git push origin `git subtree split --prefix=dist/ source`:master --force
```
