# Frontend

## Установка

    cd /frontend
    yarn

Будут установлены все необходимые пакеты для сборки и отладки frontend


## Отладка

    yarn start

Будет запущен локальный веб-сервер с hot-reload.


## Сборка frontend страниц

    yarn build

Будут собраны и минифицированы файлы проекта для отдачи через Django-приложение.
* Все статические файлы: /backend/main/static/main/frontend/static/


## Общая структура:

1. build/ - директория для сборки проекта
2. src/ - исходные коды проекта


Если используется переадрессация порта для сервиса (например с 80 на 8888) в файле **docker-compose.override.yaml**, то необходимо скопировать файл **.env.development.local.example** в **.env** и изменить в нем значение порта.


# CLEAN INSTALL

Если вы хотите установить fronend с нуля:
удалите папку frontend

    yarn create react-app frontend --template typescript 
