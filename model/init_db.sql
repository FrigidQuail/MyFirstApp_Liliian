-- include sql used to create table

DROP TABLE if exists tickItem;

CREATE TABLE tickItem (
        itemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        isChecked tinyint(1)
);



