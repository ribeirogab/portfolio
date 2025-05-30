#!/bin/bash
# sync-agent-rules.sh

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Find project root (directory containing .git)
find_project_root() {
  local current_dir="$PWD"
  while [[ "$current_dir" != "/" ]]; do
    if [[ -d "$current_dir/.git" ]]; then
      echo "$current_dir"
      return 0
    fi
    current_dir="$(dirname "$current_dir")"
  done
  echo "Error: Not in a git repository" >&2
  return 1
}

PROJECT_ROOT=$(find_project_root)
if [[ $? -ne 0 ]]; then
  echo -e "${RED}$PROJECT_ROOT${NC}"
  exit 1
fi

# Define source and target directories with absolute paths
SOURCE_DIR="$PROJECT_ROOT/.ai/rules"
TARGET_DIRS=(
  "$PROJECT_ROOT/.cursor/rules"
  "$PROJECT_ROOT/.windsurf/rules"
)

# Define source and target directories with relative paths for display
SOURCE_DIR_REL=".ai/rules"
TARGET_DIRS_REL=(
  ".cursor/rules"
  ".windsurf/rules"
)

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo -e "${RED}Error: Source directory '$SOURCE_DIR_REL' not found${NC}"
  exit 1
fi

echo "Synchronizing agent rules..."
echo "Project root: $PROJECT_ROOT"

# Process each target directory
for i in "${!TARGET_DIRS[@]}"; do
  TARGET_DIR="${TARGET_DIRS[$i]}"
  TARGET_DIR_REL="${TARGET_DIRS_REL[$i]}"
  
  echo ""
  echo "Syncing $SOURCE_DIR_REL to $TARGET_DIR_REL"
  
  # Remove target directory if it exists
  if [ -d "$TARGET_DIR" ]; then
    rm -rf "$TARGET_DIR"
    echo "- Removed existing directory"
  fi
  
  # Create parent directory if needed
  TARGET_PARENT=$(dirname "$TARGET_DIR")
  mkdir -p "$TARGET_PARENT"
  
  # Create target directory
  mkdir -p "$TARGET_DIR"
  
  # Handle Cursor directory specifically (convert .md to .mdc)
  if [[ "$TARGET_DIR" == *".cursor/rules" ]]; then
    echo "- Converting .md files to .mdc for Cursor"
    
    # Copy files with extension conversion
    for file in "$SOURCE_DIR"/*.md; do
      if [ -f "$file" ]; then
        base_name=$(basename "$file" .md)
        cp "$file" "$TARGET_DIR/$base_name.mdc"
        echo "  - Copied $(basename "$file") as $base_name.mdc"
      fi
    done
  else
    # Regular copy for other targets
    cp -r "$SOURCE_DIR"/* "$TARGET_DIR"/
  fi
  
  if [ $? -eq 0 ]; then
    echo -e "- ${GREEN}Sync complete${NC}"
  else
    echo -e "- ${RED}Sync failed${NC}"
    exit 1
  fi
done

echo ""
echo -e "${GREEN}All rules successfully synchronized!${NC}"