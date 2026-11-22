# Icons Toolkit Recipe

A Drupal Recipe that provides comprehensive icon integration for your Drupal site.

This recipe installs and configures the complete UI Icons ecosystem with Iconify Icons as a provider, bringing a vast library of over 🤯 **200,000 icons** from more than **150 open-source icon packs** directly to your Drupal site.

The goal of this recipe is to offer a ready-to-use icon system, ideal for projects that want modern icon integration across content types, fields, menus, CKEditor 5, patterns, and media.

## 🚀 Features

- Integrates the complete UI Icons 2.x ecosystem
- Enables Iconify Icons provider with access to 200,000+ icons
- Provides icon pickers for fields, menus, and content editing
- CKEditor 5 integration for inline icon insertion

## 📦 Included Contrib Dependencies

This recipe requires the following contributed modules:

```json
{
  "drupal/ui_icons": "^2.1",
  "drupal/iconify_icons": "^2.0"
}
```

## 🔧 Modules Installed by This Recipe

The recipe installs all key UI Icons modules for comprehensive icon integration:

### 🖼️ UI Icons (Full Suite)

- **ui_icons** - Core UI Icons module
- **ui_icons_field** - Icon field integration
- **ui_icons_ckeditor5** - CKEditor 5 icon insertion
- **ui_icons_menu** - Menu item icons
- **ui_icons_library** - Icon library browser
- **ui_icons_picker** - Icon picker widget
- **ui_icons_text** - Text format icon support

### 🎨 Icon Providers

- **iconify_icons** - Iconify provider (200,000+ icons from 150+ packs)

## 📘 What This Recipe Provides

By installing this recipe you get:

✔️ **Complete icon system**
All UI Icons modules with Iconify provider for instant access to hundreds of thousands of icons.

✔️ **Enhanced editorial UX**
Icon pickers in fields, menus, and CKEditor 5 for intuitive icon selection.

## 🛠️ Installation

Install the recipe in your Drupal project using ddev (web as docroot):

```bash
# Install the recipe dependencies using composer.
ddev composer require drupal/icons_toolkit

# Apply the recipe.
ddev exec -d /var/www/html/web php core/scripts/drupal recipe ../recipes/icons_toolkit
```

## 📄 License

This recipe follows the GPL-2.0-or-later license, consistent with Drupal and its contributed modules.

## 📬 Maintainers

- [gxleano](https://www.drupal.org/u/gxleano)

## Documentation

Full documentation is under [`docs/`](docs/) and published at
https://project.pages.drupalcode.org/icons_toolkit.
