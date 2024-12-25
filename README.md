# Cyberpunk RED Source Links

This module replaces source pages text with links to PDF for Cyberpunk RED items. Uses [PDF Pager](https://foundryvtt.com/packages/pdf-pager) module under the hood.

## How to use

1. Create Journal Entry
2. Add page (select PDF)
3. Select PDF source file
4. Enter page offset 1 for sources where the page count doesn't start with the first page (e.g. Core, Black Chrome, Danger Gal and all other books that were printed). Free DLCs don't have offsets (as far as I'm aware)
5. Enter PDF Code
6. Save and repeat for all sources

## PDF codes used in Foundry

To get all codes used in your particular world and sample items do following:
1. Open developer console(Chrome F12)
2. Open console tab
3. Type `game.log_sources()` and press Enter.
4. You will see `Promise` in console.
5. Wait for `Object` to appear(might take several seconds to read all compendiums)
6. Press on object. 
You should see something like this:
```
{
    "Core": "Root Vegetables",
    "BC": "White Hornet Tanto",
    "BC+": "Very Heavy Pistol (Small Game)",
    "IRv1": "The Transporter",
    "CCaCH": "🪴 Second-hand Special",
    "CC": "Spider Cyberchair",
    "ELO": "Vial of Poison",
    "ELO TCG": "Sword of Arvish",
    "IRv2": "Reflex Co-Processor",
    "HP": "Veritas",
    "MC": "Superflash Jacket",
    "MHCD": "Sponsored Covering (Cyberleg)",
    "MwtU": "Warlock's Book",
    "NCW": "Waterproof Jacket Lining",
    "SYW": "Trailer",
    "12DoC": "Watch-Man",
    "12DoG": "WAA Bullpup Assault Weapon",
    "WG": "Triple Treat",
    "homebrew": "WakeUP!",
    "CC&SA": "Virtual Barbeque",
    "DGD": "Lime Smash",
    "TT": "X-9mm"
}
```

### Here are codes that I used with full source names:
+ **Core**: Core Rulebook
+ **BC**: Black Chrome
+ **BC+**: Black Chrome Plus
+ **IRv1**: Interface RED Volume 1
+ **CCaCH**: Cargo Containers & Cube Hotels
+ **CC**: Cyberchairs
+ **ELO**: Elflines Online
+ **ELO TCG**: Elflines Online The Trading Card Game
+ **IRv2**: Interface RED Volume 2
+ **HP**: Hornets Pharmacy
+ **MC**: MicroChrome
+ **MHCD**: Must Have Cyberware Deals
+ **MwtU**: Midnight with the Upload
+ **NCW**: Night City Weather
+ **SYW**: Spinning Your Wheels
+ **12DoC**: 12 Days of Cybermas
+ **12DoG**: 12 Days of Gunmas
+ **WG**: Woodchipper's Garage
+ **homebrew**: -
+ **CC&SA**: Corporate Conapts & Studio Apartments
+ **DGD**: Danger Gal Dossier
+ **TT**: Toggle's Temple