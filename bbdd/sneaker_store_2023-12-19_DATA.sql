-- MariaDB dump 10.19-11.1.2-MariaDB, for osx10.19 (arm64)
--
-- Host: 127.0.0.1    Database: sneaker_store
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrusel`
--

DROP TABLE IF EXISTS `carrusel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrusel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(5000) DEFAULT NULL,
  `descripcion` varchar(2000) DEFAULT NULL,
  `foto` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrusel`
--

/*!40000 ALTER TABLE `carrusel` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrusel` ENABLE KEYS */;

--
-- Table structure for table `compra_producto`
--

DROP TABLE IF EXISTS `compra_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra_producto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `compraId` varchar(10) DEFAULT NULL,
  `productoId` varchar(10) DEFAULT NULL,
  `cantidad` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_producto`
--

/*!40000 ALTER TABLE `compra_producto` DISABLE KEYS */;
INSERT INTO `compra_producto` VALUES
(1,'1','1','1'),
(2,'1','3','1'),
(3,'2','2','1');
/*!40000 ALTER TABLE `compra_producto` ENABLE KEYS */;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuarioId` varchar(100) DEFAULT NULL,
  `direccion_envio` varchar(270) DEFAULT NULL,
  `tarjetaId` varchar(30) DEFAULT NULL,
  `precio_final` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES
(1,'1','Calle Agustin Montes Fuentes, 7','1',275),
(2,'2','Calle Walabi, 42','1',125);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;

--
-- Table structure for table `especificaciones`
--

DROP TABLE IF EXISTS `especificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especificaciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especificaciones`
--

/*!40000 ALTER TABLE `especificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `especificaciones` ENABLE KEYS */;

--
-- Table structure for table `news_letter`
--

DROP TABLE IF EXISTS `news_letter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news_letter` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `subscrito` tinyint(1) DEFAULT NULL,
  `contenido` varchar(10000) DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_letter`
--

/*!40000 ALTER TABLE `news_letter` DISABLE KEYS */;
/*!40000 ALTER TABLE `news_letter` ENABLE KEYS */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `valoracion` int(5) DEFAULT NULL,
  `precio` int(20) DEFAULT NULL,
  `descripcion_corta` varchar(200) DEFAULT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `descripcion_larga` varchar(2000) DEFAULT NULL,
  `stock` int(20) DEFAULT NULL,
  `referencia` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES
(1,'Nike Air Force 1',4,150,'Zapatillas icono de Nike desde 1982','/img/zapatilla1.jpg','El zapato deportivo Air Force 1, lanzado al mercado en 1982, es un producto de Nike Inc. \nFue creado por el diseñador Bruce Kilgore, fue el primer calzado deportivo de Baloncesto lanzado \npor Nike que usa la tecnología Nike Air',20,'nafo-01'),
(2,'Nike Dunk',3,125,'Zapatillas icono de Nike desde 1985','/img/zapatilla2.jpg','Nike Dunk es una línea de zapatos lanzado por Nike en 1985. Originalmente \n        lanzado como un zapato de baloncesto, la popularidad del zapato entre la \n        comunidad de patinaje también llevó a la creación de una variante utilizada \n        para el skateboarding',30,'nd-01'),
(3,'Nike Air Force 1 - 2023',4,125,'Zapatillas icono de Nike desde 1982','/img/zapatilla3.jpg','El zapato deportivo Air Force 1, lanzado al mercado en 1982, es un producto de Nike Inc. \n        Fue creado por el diseñador Bruce Kilgore, fue el primer calzado deportivo de Baloncesto lanzado \n        por Nike que usa la tecnología Nike Air',15,'nafo-02');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

--
-- Table structure for table `producto_especificaciones`
--

DROP TABLE IF EXISTS `producto_especificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_especificaciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productoId` varchar(10) DEFAULT NULL,
  `especificacionId` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_especificaciones`
--

/*!40000 ALTER TABLE `producto_especificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_especificaciones` ENABLE KEYS */;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjetas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `numero_tarjeta` varchar(30) DEFAULT NULL,
  `titular` varchar(100) DEFAULT NULL,
  `caducidad` varchar(50) DEFAULT NULL,
  `codigo` varchar(5) DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` VALUES
(1,'1234567890123456','Roberto Acevedo','12/23','123',1),
(2,'0987654321098765','Roberto Acevedo','01/02','321',1),
(3,'5678901234556778','Lucas Garcia','02/01','567',2),
(6,'0000000000000000','Roberto','05/30','456',1);
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(80) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contraseña` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES
(1,'Roberto','Acevedo','robertoaclu@gmail.com','1234'),
(2,'Lucas','Garcia','lucasgarc@gmail.com','1234');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

--
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `valoraciones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuarioId` varchar(130) DEFAULT NULL,
  `valoracion` tinyint(1) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `producto` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoraciones` ENABLE KEYS */;

--
-- Dumping routines for database 'sneaker_store'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-19 17:01:14
