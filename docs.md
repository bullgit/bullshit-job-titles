# bullshit-job-titles on `npm`

The job titles are a simple `json`, which you can edit!

Installing is done via:

```sh
$ npm install (--save) bullshit-job-titles
```

```js
var bjt = require('bullshit-job-titles')
bjt.all(); // and other functions
```

## all() ⇒ <code>object</code>
All of the possible job titles

<pre>
{
  first: [
    'some first part',
    '...'
  ],
  last: [
    'some second part',
    '...'
  ]
}
</pre>

**Kind**: global function

**Returns**: <code>object</code> - the same as 'bullshit-job-titles.json'
<a name="random"></a>

## random() ⇒ <code>string</code>
Get a random job title

**Kind**: global function

**Returns**: <code>string</code> - a random great job title
<a name="randomWithAcronym"></a>

## randomWithAcronym() ⇒ <code>object</code>
Get a random job title and its acronym in the form of

<pre>
{
  title: 'Some Cool Title',
  acronym: 'SCT'
}
</pre>

**Kind**: global function

**Returns**: <code>object</code> - the job title and its acronym
<a name="randomParts"></a>

## randomParts() ⇒ <code>array</code>
Get random job title, split in parts.

**Kind**: global function

**Returns**: <code>array</code> - the parts of the job title, in order
