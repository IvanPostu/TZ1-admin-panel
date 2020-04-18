FROM postgres:9.6-alpine
COPY ./postgres-initdb.sql /docker-entrypoint-initdb.d/