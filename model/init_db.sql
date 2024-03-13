-- include sql used to create table

DROP TABLE if exists all_results;

CREATE TABLE all_results (
    id_user INT,
    dep_answers tinyint(1),
    anx_answers tinyint(1),
    seek_help tinyint(1)
    );

