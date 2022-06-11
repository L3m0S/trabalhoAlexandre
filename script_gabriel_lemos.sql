-- Cole esse script SQL no editor SQL preferido que esteja conectado no banco de dados
-- E execute o script
CREATE DATABASE  IF NOT EXISTS `dados212d`;
USE `dados212d`;

DROP TABLE IF EXISTS `internacao`;

CREATE TABLE `internacao` (
  `int_codigo` int NOT NULL AUTO_INCREMENT,
  `int_ativoinativo` char(1) DEFAULT NULL,
  `int_paciente` varchar(30) DEFAULT NULL,
  `int_convenio` varchar(15) DEFAULT NULL,
  `int_medico` varchar(30) DEFAULT NULL,
  `int_codigocid` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`int_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;


INSERT INTO `internacao` VALUES (1, 'A','gabriel', 'convenio1','medico1','1'),(2, 'A','lemos', 'convenio2', 'medico2', '2'),(3,'A','lemori', 'convenio3', 'medico3', '3');

DROP TABLE IF EXISTS `guiaexame`;

CREATE TABLE `guiaexame` (
  `gui_codigo` int NOT NULL AUTO_INCREMENT,
  `gui_ativoinativo` char(1) DEFAULT NULL,
  `gui_numeroguia` varchar(15) DEFAULT NULL,  
  `gui_exame` varchar(30) DEFAULT NULL,
  `int_codigo` int NOT NULL,
  PRIMARY KEY (`gui_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;


INSERT INTO `guiaexame` VALUES (1,'A', '1','sangue', 1),(2,'A','2','colonoscopia',2),(3,'A','3','raiox',3);
