# Link Saver

## Overview
[Watch the Demo Video](https://youtu.be/dR8xQ0cFmQU)

Link Saver is a simple web application that allows users to save and manage their favorite links. Users can enter a URL manually or save the current browser tab, and all links persist using local storage. They can also delete all saved links with a double-click.

## Features
- Save links manually by entering a URL
- Save the current browser tab
- Store links persistently using localStorage
- Delete all saved links with a double-click
- Chrome Extension support

## Technologies Used
- **HTML** for structure
- **CSS** for styling
- **JavaScript** for functionality
- **localStorage** for data persistence
- **Chrome Extension API** for tab-saving functionality

## Chrome Extension Setup
- Open chrome://extensions/ in Google Chrome.
- Enable Developer mode (top right corner).
- Click Load unpacked and select the project folder.
- The extension will be installed and accessible via the Chrome toolbar.

## Usage
- Enter a link in the input field and click SAVE INPUT to store it.
- Click SAVE TAB to save the current browser tab.
- Double-click DELETE ALL to remove all saved links.
- Click on any saved link in the list to open it in a new tab.
- Use the Chrome Extension popup to quickly add links.

 ## manifest.json
{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    },
    "permissions": [
        "tabs"
    ]
}