curl --location --request POST 'https://glados.rocks/api/user/checkin' \
--header 'cookie: _ga=GA1.2.132928602.1656412597; koa:sess=eyJ1c2VySWQiOjExNDI3NCwiX2V4cGlyZSI6MTY4MjMzMjYzOTgyNSwiX21heEFnZSI6MjU5MjAwMDAwMDB9; koa:sess.sig=0VwPsoECY6asXp3pHiiYXuxYIxg; _gid=GA1.2.179050917.1656899915; _gat_gtag_UA_104464600_2=1; __cf_bm=MQbzFZgrTTZwa9vCOKCP1BF7mjYoU7TpXb..vKWqTf8-1656921224-0-Abu2fGtyKXSFz4cFNdVk/B5J1P/FTGLZ/KBtZ4tnJJ0/g4vmqyuwwYh/M6uMzQRQ0oL6WKQ4trqXvpDKk5eIwnrOxWnselRxUSHkd3Ml5gxXhUysuz+q8d5G7V1nRm2yDw==' \
--header 'origin: https://glados.rocks' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "glados.network"
}'