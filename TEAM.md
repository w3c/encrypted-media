# Editor Team Instructions

Updates to generated HTML are automated using GitHub Actions.  On each push to
the `main` branch, the index and all registries will be regenerated and pushed
to the `gh-pages` branch.

See `generate-respec-html.py` and `.github/workflows/generate-respec-html.yml`
for details on how this is done.
