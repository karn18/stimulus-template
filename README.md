# Stimulus Template

## Installation

```node
$ yarn add stimulus-template
```

## Usage

Register the controller to Stimulus:

```javascript
// app/javascript/controllers/index.js

import { Application } from 'stimulus';
import StimulusTemplateController from 'stimulus-template'

const application = Application.start()
application.register('template', StimulusTemplateController)
```

## Build

```node
$ yarn build
```
