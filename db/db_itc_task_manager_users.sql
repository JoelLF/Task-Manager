-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: db_itc_task_manager
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Baltasar','$2a$10$MPTE0xOCPcCfK20BheMwNu0PB9OcA/e5EErOIyK2elVppMu7f58O6'),(6,'Ricardo','$2a$10$yjlu35pSavt.TWg.IvOEjOEoU/p7COIFBE.znSvwXInpsxVwDip8C'),(7,'Eduardo','$2a$10$PlD0jxnp59pA5oYhbChzJ.qm/mXEKTp8UqFcqXGtBsB9f1Y/zCQcm'),(8,'Juan','$2a$10$46dZEQTnhyYHdZ9aKfGSvOv2egyFLKYIp4RV16SFH9yi2jBKD96LC'),(9,'Salvador','$2a$10$HQqJUWXZ2RdBcdE4jLi5VuOA2.6xdusWe8nldgoZ4BYxQl9lJipk6'),(10,'Donato','$2a$10$EZdnfgkjGjBO7Wdso.xiHuWYc7pAKiX1y8mcSwVjjubEVb8ygvzeG'),(11,'Alma','$2a$10$wt.cakj7Iid8mkOb8oJDMu8wPjk2QVSZ9R3FXjFnE0q5EqI/DfpZq'),(12,'Mercedes','$2a$10$vmkzz8.t.dTVbv6S4MT5n.aOG6QsTTqvmCfRisuL32xxaSE.5q5hu'),(13,'Vicente','$2a$10$n/tMQ0EIzQuZ7gGMVEa8uOoNRmrMd.pa8fQVwpY/3m.OK7g.8urqC');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-14 10:31:51
