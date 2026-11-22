# Installation

## Requirements

- Drupal core `^11.3`.
- Composer and a Drupal project. The examples use DDEV with web as the docroot.

## Install the package

```bash
ddev composer require drupal/icons_toolkit
```

Composer installs these dependencies:

- `drupal/ui_icons`: `^2.1`
- `drupal/iconify_icons`: `^2.0`

For Drupal core 11.2.x, use the 1.0.x branch of this recipe, which supports `ui_icons` 1.1.x.

## Apply the recipe

```bash
ddev exec -d /var/www/html/web php core/scripts/drupal recipe ../recipes/icons_toolkit
```

Applying the recipe enables the modules listed in [Usage](usage/index.md) and imports the
Iconify Icons settings described in [Configuration](configuration.md).
