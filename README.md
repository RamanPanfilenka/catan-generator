# Catan Board Generator

Статический генератор полей CATAN с минимальным балансом, общей вкладкой «Мореходы», восемью сценариями кампании на 3–6 игроков и случайным архипелагом.

## Публикация на GitHub Pages

1. Создать репозиторий и загрузить содержимое этой папки в ветку `main` (включая `.github/workflows/deploy.yml`).
2. Открыть Settings → Pages → Build and deployment → Source → GitHub Actions.
3. Запустить workflow **Deploy GitHub Pages** во вкладке Actions (или отправить новый коммит).
4. Открыть адрес из результата deploy.

Для бесплатного GitHub Free репозиторий должен быть публичным. Сайт также будет публичным.

`build-pages.mjs` автоматически учитывает подпапку репозитория и пути к изображениям, JS-модулям, Web Worker, страницам и ссылкам Share. Для домена `username.github.io` или собственного домена используется корень.

## Локальная проверка

```sh
node tests/maps.test.mjs
node tests/worker.test.mjs
node build-pages.mjs
python3 -m http.server 8000 --directory _site
```

При стандартном имени репозитория открыть `http://localhost:8000/` для просмотра содержимого сборки; для проверки путей подкаталога разместить `_site` в соответствующей подпапке HTTP-сервера. Для локальной сборки без подпапки: `PAGES_BASE_PATH=/ node build-pages.mjs`.

Источник базового сайта: https://catanboardgenerator.org/ . Схемы сценариев сверены с официальными книгами CATAN Seafarers 2025 и Seafarers 5–6 Player 2025. Порты и специальные жетоны расставляются вручную по книгам. Неофициальный инструмент.
