# Branch Protection Rules

## main (production)

- PR required before merge
- Minimum 1 approval required
- CI status checks must pass (GitHub Actions)
- Branch must be up-to-date before merging
- Force pushes blocked
- Branch deletion blocked

## develop (integration)

- PR recommended before merge
- CI status checks must pass
- Used for merging feature branches
