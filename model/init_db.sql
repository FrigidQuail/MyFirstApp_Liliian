-- include sql used to create table

-- drop tables:
DROP TABLE if exists items;

--create
CREATE TABLE tickitem (
        itemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        isChecked tinyint(1)
);



