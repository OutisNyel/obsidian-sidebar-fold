# Obsidian Sidebar Fold Plugin

## Goals

- Keep the file tree clean by folding rarely used files
- Reduce visual clustter in the sidebar
- Help users focus on important content

## Features

- [ ] Configure the number of visible items
- [ ] Configure automatic folder folding rules
  - The default rule folds items only from layer `2`.
  - You can customize rules like `1, >=3, <5`
  - Rules are separated by ','. 
- [ ] Set ignored folders 
  - Add folder paths relative to the vault root.
  - Automatically updates when folders are renamed, moved or removed.
- [ ] Most recent opened sorting
  - Top 3 sub-items will be sorted by most recently opened
  - If there are 3 or fewer items, only the most recent item is prioritized.
  - Other items keep their original order.
  - This feature is optional and can be disabled. 

## Quickstart

### Manual installation

1. Clone the repo
```
cd [path to your vault]/.obsidian/plugins/
git clone https://github.com/OutisNyel/obsidian-sidebar-fold.git
cd obsidian-sidebar-fold
npm run dev
```

## Definition of done

- Plugin loads successfully in Obsidian. 
- Folder contents fold according to rules. 
- Visible item count is configurable. 
- Ignored folders are respected. 
