# [WIP] Suisei: The very hexagon idol. Ever.

Preview: <https://hosimati-suisei-moe.netlify.app/>

## Getting started

Note: when cloning this repository, clone the single branch rather than cloning all the branches to reduce blob size. See [`7e7bc4f`](https://github.com/suisei-cn/hosimati.suisei.moe/commit/7e7bc4fda1eb44fda424f2df2e0719cb3f1a1344) for details.

```bash
# Clone this repository
git clone https://github.com/suisei-cn/hosimati.suisei.moe.git --single-branch master # If you work with HTTPS
git clone git@github.com:suisei-cn/hosimati.suisei.moe.git --single-branch master     # If you work with SSH

# Install the dependencies
npm install   # For NPM users
yarn install  # For Yarn men of culture

# You can build a static version of the website, all the files go into `dist/`
npm run build # On NPM or
yarn build    # On Yarn

# You can also run a development server that automatically reloads when you change anything!
npm run serve # On NPM or
yarn serve    # On yarn

# Finally, use --production to create an optimised build
# that is smaller and more compatible, but takes way more time to generate
npm run build --production # On NPM or
yarn build --production    # On Yarn

# (also works with `serve`)
```
## Translating

* Go to <https://hosimati-suisei-moe.netlify.app/#translator-mode>, new buttons will appear on the top-left
* Click on "Download" to get a copy of every string of text on the website
* Use an IDE to edit the YAML file
* Use the "Browse..." button on satania.moe in translator mode to load your YAML file on the website to preview your changes locally
* Once you're done, convert the YAML to JSON and add it to /src/locales and add the option for it in the index.html file around line 119, then you can do a pull request

## License

SDL 1.0 License (the Satania Daiakuma License). See more at LICENSE.md.