<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project Architecture

- Keep portfolio content in typed data modules and render it through reusable section/card components so factual updates remain separate from presentation.
- Keep the portfolio as one semantic single-page route with hash navigation because the requested experience is a smooth-scrolling one-page site.
