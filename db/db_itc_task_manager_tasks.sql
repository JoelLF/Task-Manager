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
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TaskName` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Workers` varchar(255) NOT NULL,
  `AreaName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (51,'Tarea 1','Prueba frontend','En proceso','Juan Carrera','Agua'),(52,'Tarea 4','Prueba frontend','Retrasada','Marco Peña','Computación Científica y Tecnológica'),(53,'Tarea 2','Prueba frontend','Pendiente','Pepe Benavente','Agua'),(56,'Tarea 3','Prueba validación','Terminada','Pedro Hernández','Agua'),(59,'Tarea 5','Prueba frontend','En proceso','Pedro Hernández','Biotecnología'),(60,'Tarea 6','Prueba frontend','Cancelada','Marco Peña','Análisis Ambiental'),(61,'Tarea 7','Prueba crear otra','Terminada','Marco Peña','Análisis Ambiental'),(62,'Tarea 8','Prueba frontend','En proceso','Pedro Hernández','Energías Renovables'),(63,'Tarea 9','Prueba frontend','En proceso','Pepe Benavente','Energías Renovables'),(64,'Tarea 10','Prueba frontend','Pendiente','Pedro Hernández','Energías Renovables'),(65,'Tarea 11','Prueba frontend','Retrasada','Pedro Hernández','Ingeniería Biomédica'),(66,'Tarea 12','Prueba frontend','Cancelada','Pepe Benavente','Servicios Institucionales y Metrología'),(67,'Tarea 13','Prueba frontend','Terminada','Pepe Benavente','Servicios Institucionales y Metrología');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
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
