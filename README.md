## Dev Workflow
```
npx gulp
```
Check localhost:3000 for hot-reload server

## Deploy Notes
```
npx gulp clean
npx gulp compile
```

```
git push origin `git subtree split --prefix=dist/ develop`:master --force
```
