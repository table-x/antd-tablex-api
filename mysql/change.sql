-- user list
CREATE TABLE IF NOT EXISTS `users` (
    `userId` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(32) NOT NULL,
    `mobile` varchar(32) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `email` varchar(64) DEFAULT NULL,
    `city` varchar(64) NOT NULL,
    `note` varchar(64) DEFAULT NULL,
    `amount` decimal(14,4) NOT NULL DEFAULT '0.0000',
    `registerIp` varchar(64) DEFAULT NULL,
    `permission` enum('normal', 'rich', 'admin') DEFAULT 'normal',
    PRIMARY KEY (`userId`),
    UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB CHARSET=utf8;