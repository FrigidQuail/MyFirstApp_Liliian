-- include sql used to create table

-- drop tables:
DROP TABLE if exists itemtick;

--create
CREATE TABLE itemtick (
        itemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        isChecked tinyint(1)
);



