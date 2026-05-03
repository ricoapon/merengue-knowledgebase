# Merengue knowledgebase

My own website which I use to keep track of my Merengue moves, patterns and other things I find interesting.

## Development

To run this project locally, run:

```
npx quartz build --serve
```

Open the page served on port 8080, not 3001.

Note that YouTube embedding will show an 153 error when running locally. It will work when deployed to GitHub Pages.

## Technical

It uses Quartz. The repository was initialized using [this template](https://github.com/jackyzha0/quartz) (specifically, v4).

When a Quartz upgrade is going to be done, keep the following in mind:

1. I had to make code changes to get the `start=X` to work. See `quartz/plugins/transformers/ofm.ts`. See https://github.com/ricoapon/salsa-knowledgebase/commit/9e86305217d8b2b7f5d95bca34dd503dbbfbefe6.
1. Showing the number of items in a folder can be disabled using `showFolderCount`. However, there was no way to actually pass this value, so I updated the default value to `false`. See https://github.com/ricoapon/salsa-knowledgebase/commit/5fa15953ebb05b749a3f3a95eb252d9ed3233237.

# Markdown specifics

There are a few situations that need more details to work as expected. If some standard way of working needs to be used, place it here.

## YouTube links

Embedding a YouTube video is possible, but there are strict requirements. To ensure it works, always embed it as follows:

```
![YouTube Video](https://youtu.be/6OW1gkSE2d8?start=120)
```

The name ("YouTube Video") is irrelevant and won't be shown. This can be replaced with a descriptive name that is useful for myself. The `start=X` is optional and can be used to start a video at a specific timestamp. Make sure to use this exact URL, because a regex is used to determine YouTube video's. It will not work if the URL doesn't match the regex. To stay consistent, always use this format.


## Using index.md

When I have a page that contains many variants, I will use a directory name `X`, with files `index.md`, `X Variant 1.md`, etc. When linking to this main page, you want `[[X]]` to work. However, `[[X]]` only works if the exact filename is also `X.md`. Therefore, we need to add an alias to the `index.md` as follows:

```
---
title: X
aliases:
  - X
---
```

If this alias is forgotten, `[[X]]` will not work.
