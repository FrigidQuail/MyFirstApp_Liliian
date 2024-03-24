-- include sql used to create table

DROP TABLE if exists all_results;

CREATE TABLE tickItem (
        itemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        isChecked tinyint(1)
)



