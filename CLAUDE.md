# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Spendly: a Flask expense tracker built as a step-by-step teaching project. Much of the app is intentionally unimplemented; placeholder routes and files say which "Step" implements them.

## Commands

```bash
pip install -r requirements.txt   # flask, werkzeug, pytest, pytest-flask
python app.py                     # dev server on http://localhost:5001 (debug on)
pytest                            # no tests exist yet
pytest path/to/test_file.py::test_name   # single test
```

There is no linter or build step configured. The SQLite file `expense_tracker.db` and `venv/` are gitignored.

## Architecture

- `app.py` holds all routes in one file. Real routes (`/`, `/register`, `/login`, `/terms`, `/privacy`) only render templates; `/register` and `/login` are GET-only and have no form handling yet. The routes below the "Placeholder routes" banner (`/logout`, `/profile`, `/expenses/add`, `/expenses/<id>/edit`, `/expenses/<id>/delete`) return stub strings and are meant to be replaced step by step.
- `database/db.py` is a comment-only stub. Step 1 is meant to provide `get_db()` (SQLite connection with `row_factory` and foreign keys on), `init_db()` (`CREATE TABLE IF NOT EXISTS`) and `seed_db()`. Nothing calls these yet.
- `templates/`: every page extends `base.html`, which holds the nav and footer (including the Terms/Privacy links). Add site-wide UI there. Use `url_for(...)` for links so they follow the route function names in `app.py`.
- `static/css/style.css` is plain CSS driven by variables (`--ink`, `--paper`, `--accent`, ...). Page sections are styled by class prefix (`.hero-*`, `.dash-*`, `.legal-*`, `.video-modal`).
- `static/js/main.js` is plain JS in IIFEs that bail out if their elements are missing, so it is safe to load on every page. It currently drives only the landing page's "See how it works" video modal.

## Gotchas

- The landing video modal injects a `youtube-nocookie.com` iframe from the `data-video-id` attribute on `#video-frame` in `landing.html`, and clears it on close to stop playback. To change the video, edit that attribute.
- Terms and Privacy text is generic placeholder copy and has not been reviewed legally.
