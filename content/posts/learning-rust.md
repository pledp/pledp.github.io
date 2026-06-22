---
title: Notes on learning Rust
date: 2026-05-15
excerpt: A few notes from building mögl, my work-in-progress game framework written in Rust.
tags: [rust, gamedev]
---

Some scattered notes from working on [mögl](https://github.com/pledp/moegl), my Rust game framework project built on winit and wgpu.

## Ownership took a while to click

Coming from C++ and C#, the borrow checker fought me constantly at first. The thing that finally helped was thinking of references as "loans" rather than pointers.

```rust
fn render(&mut self, frame: &wgpu::SurfaceTexture) {
    // borrow, don't take
}
```

More notes to come as the project progresses.
