# /public assets

## hero.mp4 (and optional hero.webm)

The hero section autoplays a muted, looped video. Drop your final file at
`public/hero.mp4`. Until then a CSS-gradient poster card shows in its place.

Convert from .mkv → .mp4:

```
ffmpeg -i input.mkv -c:v libx264 -crf 23 -an -vf "scale=1920:-2" public/hero.mp4
```

Optional smaller-payload .webm:

```
ffmpeg -i input.mkv -c:v libvpx-vp9 -b:v 0 -crf 32 -an -vf "scale=1600:-2" public/hero.webm
```

## og.svg → og.jpg

`og.svg` is the 1200×630 social card. Most platforms want a raster image —
render to JPG before launch:

```
npx svgexport public/og.svg public/og.jpg 1200:630 jpg 90%
```

Then update the default `ogImage` in `src/layouts/Base.astro` from
`/og.svg` → `/og.jpg`.

## favicon.svg

Tiny wordmark — gold `z.` italic on the deep ink ground.
