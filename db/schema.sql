  DROP DATABASE IF EXISTS burgers_db;

  CREATE DATABASE burgers_db;

  USE burgers_db;

  CREATE TABLE burgers (
    `burger_id` INT(11) NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN NOT NULL DEFAULT 0,
    `description` VARCHAR(255) DEFAULT 'A delicious, meaty burger.',
    `image_url` VARCHAR(255) DEFAULT './assets/images/burger.jpg',
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`burger_id`)
  );